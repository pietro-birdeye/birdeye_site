import type { ComponentSource } from './componentTypes';

export interface ComponentDoc {
  id: string;
  title: string;
  moduleId: string;
  htmlPath: string;
  html: string;
  css?: string[];
}

type TemplateContext = Record<string, unknown>;

interface RuntimeContext extends Record<string, unknown> {
  __parent?: RuntimeContext;
}

type Preview = {
  id: string;
  spec?: string[];
  context?: TemplateContext;
  sizeContexts?: Record<string, TemplateContext>;
  html?: string;
  title?: string;
  sizes?: string[];
  variants?: string[];
};

const wrapPreviewComponents = new Set<string>(['button', 'textrename']);

const withParent = (context: RuntimeContext, parent?: RuntimeContext): RuntimeContext => ({
  ...context,
  __parent: parent,
});

const resolveValue = (key: string, context?: RuntimeContext): unknown => {
  if (!context) return undefined;
  if (key.startsWith('../')) {
    return resolveValue(key.slice(3), context.__parent);
  }
  if (Object.prototype.hasOwnProperty.call(context, key)) {
    return context[key];
  }
  return resolveValue(key, context.__parent);
};

const renderTemplate = (template: string, context: RuntimeContext): string => {
  let output = template;

  output = output.replace(/{{#each (\w+)}}([\s\S]*?){{\/each}}/g, (_match, key, block) => {
    const value = resolveValue(key, context);
    if (!Array.isArray(value)) return '';
    return value
      .map((item) => {
        const childContext =
          typeof item === 'object' && item !== null
            ? (item as RuntimeContext)
            : ({ this: item } as RuntimeContext);
        return renderTemplate(block, withParent(childContext, context));
      })
      .join('');
  });

  output = output.replace(/{{#if ([^}]+)}}([\s\S]*?)(?:{{else}}([\s\S]*?))?{{\/if}}/g, (_match, key, truthy, falsy) => {
    const value = resolveValue(key, context);
    if (value && value !== 'false' && value !== '0') {
      return renderTemplate(truthy, context);
    }
    return falsy ? renderTemplate(falsy, context) : '';
  });

  output = output.replace(/{{#unless ([^}]+)}}([\s\S]*?){{\/unless}}/g, (_match, key, block) => {
    const value = resolveValue(key, context);
    if (value) return '';
    return renderTemplate(block, context);
  });

  output = output.replace(/{{{([^}]+)}}}/g, (_match, key) => {
    const value = resolveValue(key, context);
    if (value === undefined || value === null) return '';
    return String(value);
  });

  output = output.replace(/{{([^}]+)}}/g, (_match, key) => {
    const value = resolveValue(key, context);
    if (value === undefined || value === null) return '';
    return String(value);
  });

  // Clean up unmatched moustache helpers that may remain after rendering
  output = output
    .replace(/{{\/(?:if|unless)}}/g, '')
    .replace(/{{#if [^}]+}}/g, '');

  return output;
};

const resolveContext = (base: TemplateContext, overrides: TemplateContext): TemplateContext => {
  const merged: TemplateContext = { ...base, ...overrides };
  const placeholderRegex = /{{(\w+)}}/g;
  Object.entries(merged).forEach(([key, value]) => {
    if (typeof value !== 'string') return;
    merged[key] = value.replace(placeholderRegex, (_match, token) => {
      const replacement = merged[token];
      return typeof replacement === 'string' ? replacement : '';
    });
  });
  return merged;
};

const normalizeSpecLine = (line: string): string =>
  line
    .replace(/data-size=(["'])(.*?)\1/g, 'data-size="{{size}}"')
    .replace(/data-variant=(["'])(.*?)\1/g, 'data-variant="{{variant}}"');

const buildPreviewsFromDefaults = (defaults: any[]): Preview[] => {
  type Entry = {
    context: TemplateContext;
    html?: string;
    size?: string;
    variant?: string;
  };

  const groups = new Map<
    string,
    {
      spec: string[];
      entries: Entry[];
      variantOrder: (string | undefined)[];
    }
  >();

  defaults.forEach((def: any) => {
    const normalizedSpec = Array.isArray(def.spec)
      ? def.spec.map((line: string) => normalizeSpecLine(line))
      : [];

    const baseContext: TemplateContext = { ...(def.context ?? {}) };

    const sizes: (string | undefined)[] = Array.isArray(def.sizes)
      ? def.sizes.filter((size: unknown): size is string => typeof size === 'string' && size.length > 0)
      : [];

    const variants: (string | undefined)[] = Array.isArray(def.variants)
      ? def.variants.filter(
          (variant: unknown): variant is string => typeof variant === 'string' && variant.length > 0,
        )
      : [];

    const sizeValues = sizes.length ? sizes : [undefined];
    const variantValues = variants.length ? variants : [undefined];

    sizeValues.forEach((sizeValue) => {
      variantValues.forEach((variantValue) => {
        const context: TemplateContext = { ...baseContext };
        if (typeof sizeValue === 'string') {
          context.size = sizeValue;
        }
        if (typeof variantValue === 'string') {
          context.variant = variantValue;
        }

        const appliedSize = typeof context.size === 'string' ? context.size : undefined;
        const appliedVariant = typeof context.variant === 'string' ? context.variant : undefined;

        const typeKey =
          context.className ?? context.type ?? context.role ?? context.kind ?? 'default';

        const groupKey = JSON.stringify({
          spec: normalizedSpec,
          type: typeKey,
        });

        if (!groups.has(groupKey)) {
          groups.set(groupKey, {
            spec: normalizedSpec,
            entries: [],
            variantOrder: [],
          });
        }

        const group = groups.get(groupKey)!;
        if (!group.variantOrder.includes(appliedVariant)) {
          group.variantOrder.push(appliedVariant);
        }

        group.entries.push({
          context,
          html: def.html,
          size: appliedSize,
          variant: appliedVariant,
        });
      });
    });
  });

  const previews: Preview[] = [];

  Array.from(groups.values()).forEach(({ spec, entries, variantOrder }, groupIndex) => {
    const DEFAULT_VARIANT_KEY = '__default__';

    const variantBuckets = new Map<
      string,
      {
        entries: Entry[];
        variant?: string;
      }
    >();

    entries.forEach((entry) => {
      const variantKey = entry.variant;
      const bucketKey = variantKey ?? DEFAULT_VARIANT_KEY;
      if (!variantBuckets.has(bucketKey)) {
        variantBuckets.set(bucketKey, { entries: [], variant: variantKey });
      }
      variantBuckets.get(bucketKey)!.entries.push(entry);
    });

    const orderedVariantKeys: string[] = [];
    variantOrder.forEach((variantValue) => {
      const key = variantValue ?? DEFAULT_VARIANT_KEY;
      if (variantBuckets.has(key) && !orderedVariantKeys.includes(key)) {
        orderedVariantKeys.push(key);
      }
    });

    variantBuckets.forEach((_bucket, key) => {
      if (!orderedVariantKeys.includes(key)) {
        orderedVariantKeys.push(key);
      }
    });

    orderedVariantKeys.forEach((variantKey, variantIndex) => {
      const bucket = variantBuckets.get(variantKey);
      if (!bucket) return;

      const sizeContexts: Record<string, TemplateContext> = {};
      const sizes: string[] = [];

      bucket.entries.forEach((entry) => {
        const ctx = { ...entry.context };
        const sizeValue =
          entry.size ??
          (typeof ctx.size === 'string' ? ctx.size : undefined);
        const key = sizeValue ?? 'default';

        if (sizeValue && !sizes.includes(sizeValue)) {
          sizes.push(sizeValue);
        }

        sizeContexts[key] = ctx;
      });

      const contextList = Object.values(sizeContexts);
      const sharedContext: TemplateContext = {};

      if (contextList.length > 0) {
        const candidateKeys = Object.keys(contextList[0]).filter((key) => key !== 'size');
        candidateKeys.forEach((key) => {
          const firstValue = contextList[0][key];
          if (contextList.every((ctx) => ctx[key] === firstValue)) {
            sharedContext[key] = firstValue;
          }
        });
      }

      Object.entries(sizeContexts).forEach(([key, ctx]) => {
        delete ctx.size;
        Object.keys(sharedContext).forEach((sharedKey) => {
          delete ctx[sharedKey];
        });
      });

      const preview: Preview = {
        id: `group-${groupIndex}-${variantKey}-${variantIndex}`,
        spec,
        context: sharedContext,
        sizeContexts:
          Object.values(sizeContexts).some((ctx) => Object.keys(ctx).length > 0)
            ? sizeContexts
            : undefined,
        sizes: sizes.length ? sizes : undefined,
      };

      const htmlTemplate = bucket.entries.find((entry) => typeof entry.html === 'string')?.html;
      if (htmlTemplate) {
        preview.html = htmlTemplate;
      }

      previews.push(preview);
    });
  });

  return previews;
};

const renderVariantTiles = (
  componentName: string,
  preview: Preview,
  template?: string,
): string | null => {
  let sizeVariants: (string | undefined)[] =
    Array.isArray(preview.sizes) && preview.sizes.length > 0
      ? preview.sizes
      : preview.sizeContexts
        ? Object.keys(preview.sizeContexts).filter((key) => key !== 'default')
        : [];

  if (!sizeVariants.length) {
    sizeVariants = preview.sizeContexts ? ['default'] : [undefined];
  }

  let variantValues: (string | undefined)[] =
    Array.isArray(preview.variants) && preview.variants.length > 0
      ? preview.variants
      : [undefined];

  if (
    variantValues.length === 1 &&
    variantValues[0] === undefined &&
    typeof preview.context?.variant === 'string'
  ) {
    variantValues = [preview.context.variant as string];
  } else if (variantValues.length === 1 && variantValues[0] === undefined && Array.isArray(preview.spec)) {
    const variantRegex = /data-variant=['"]\{\{(\w+)\}\}['"]/;
    const match = preview.spec.find((line) => variantRegex.test(line));
    if (match) {
      const key = variantRegex.exec(match)?.[1];
      if (key) {
        const value = preview.context?.[key];
        if (typeof value === 'string') {
          variantValues = value
            .split(',')
            .map((entry) => entry.trim())
            .filter(Boolean);
        }
      }
    }
  }

  const rows = variantValues
    .map((variant) => {
      const tiles = sizeVariants
        .map((size) => {
          const runtimeSize = typeof size === 'string' && size !== 'default' ? size : undefined;
          const sizeKey = runtimeSize ?? 'default';
          const sizeSpecificContext =
            (typeof sizeKey === 'string' && preview.sizeContexts?.[sizeKey]) || {};

          const baseContext = preview.context ?? {};
          const context = resolveContext(baseContext, {
            ...(sizeSpecificContext as TemplateContext),
            ...(runtimeSize ? { size: runtimeSize } : {}),
            ...(variant ? { variant } : {}),
          });
          const runtimeContext = withParent(context as RuntimeContext);

          const specLines = Array.isArray(preview.spec)
            ? preview.spec.map((line) => renderTemplate(line, runtimeContext))
            : [];

          let rendered = preview.html ?? '';

          if (!rendered && template) {
            rendered = renderTemplate(template, runtimeContext);
          }

          if (!rendered) return null;

          const specHtml = specLines
            .map((line) => `<span class="spec-line">${line}</span>`)
            .join('');

          const wrapperClass = wrapPreviewComponents.has(componentName)
            ? 'harmony-component-preview-wrap-wrapper'
            : 'harmony-component-preview-280-wrapper';

          return `
    <div class="${wrapperClass}">
      <div class="spec-wrapper harmony-spec-wrapper">
        ${specHtml}
      </div>
      <div class="harmony-preview">
        ${rendered}
      </div>
    </div>`;
        })
        .filter((html): html is string => Boolean(html))
        .join('');

      if (!tiles) return null;

      const rowClass = `harmony-component-row${componentName === 'textrename' ? ' component-textrename' : ''}`;
      return `
    <div class="${rowClass}" style="margin-bottom:var(--space-4)">
      ${tiles}
    </div>`;
    })
    .filter((html): html is string => Boolean(html))
    .join('');

  return rows || null;
};

export const renderComponentDoc = (source: ComponentSource): ComponentDoc | null => {
  let previews: Preview[] = [];

  const defaults = Array.isArray(source.spec?.defaults) ? source.spec.defaults : [];

  if (defaults.length) {
    const hasSizeField = defaults.every(
      (entry: any) => entry?.context && typeof entry.context.size === 'string',
    );
    previews = hasSizeField ? buildPreviewsFromDefaults(defaults) : (defaults as Preview[]);
  } else if (Array.isArray(source.spec?.previews)) {
    previews = source.spec.previews;
  }

  if (!previews.length) return null;

  const variantsHtml = previews
    .map((preview) => renderVariantTiles(source.name, preview, source.template))
    .filter((html): html is string => Boolean(html));

  if (!variantsHtml.length) return null;

  const pageHtml = `
<div>
  <h1 style="margin:0">${source.title}</h1>
</div>
<div class="devstudio-page-section">
  ${variantsHtml.join('\n')}
</div>
`;

  return {
    id: source.name,
    title: source.title,
    moduleId: `harmony-new/${source.name}`,
    htmlPath: `harmony-new/${source.name}`,
    html: pageHtml,
    css: source.css ? [source.css] : [],
  };
};
