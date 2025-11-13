export type NavItemKind = 'home' | 'showcase';

export interface NavItem {
  id: string;
  title: string;
  path: string;
  kind: NavItemKind;
}

export interface NavGroup {
  id: string;
  title: string;
  items: NavItem[];
}

export interface ShowcasePage {
  slug: string;
  title: string;
  path: string;
  htmlPath: string;
  css: string[];
}

const staticShowcaseModules = import.meta.glob('../html/**/*.html', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

export const showcaseModules = staticShowcaseModules;

const toSlug = (path: string) => path.split('/').pop()?.replace(/\.html$/, '') ?? '';

const toTitle = (slug: string) => slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

const getFolderFromPath = (path: string): string => {
  const parts = path.split('/');
  const htmlIndex = parts.findIndex((p) => p === 'html');
  if (htmlIndex !== -1 && htmlIndex + 1 < parts.length) {
    return parts[htmlIndex + 1];
  }
  return 'other';
};

const getFolderTitle = (folder: string): string => {
  if (folder === 'foundations') return 'Foundations';
  if (folder === 'harmony') return 'Harmony Components';
  if (folder === 'components') return 'Harmony Components';
  if (folder === 'tools') return 'Tools';
  return folder.replace(/[-_]/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};

const staticShowcasePaths = Object.keys(staticShowcaseModules).sort();
const staticShowcasePages: ShowcasePage[] = staticShowcasePaths.map((path) => {
  const slug = toSlug(path);
  return {
    slug,
    title: toTitle(slug),
    path: `#/harmony/${slug}`,
    htmlPath: path,
    css: [],
  };
});

export const showcasePages: ShowcasePage[] = staticShowcasePages;

export const showcaseIndex = new Map(showcasePages.map((page) => [page.slug, page]));

const pageToNav = (page: ShowcasePage): NavItem => ({
  id: `showcase-${page.slug}`,
  title: page.title,
  path: page.path,
  kind: 'showcase',
});

const buildShowcaseGroups = (): NavGroup[] => {
  const folderMap = new Map<string, ShowcasePage[]>();

  for (const page of staticShowcasePages) {
    const folder = getFolderFromPath(page.htmlPath);
    if (!folderMap.has(folder)) {
      folderMap.set(folder, []);
    }
    folderMap.get(folder)!.push(page);
  }

  const groups: NavGroup[] = [];
  const folderOrder = ['tools', 'components', 'harmony', 'foundations'];

  for (const folder of folderOrder) {
    const pages = folderMap.get(folder);
    if (!pages || !pages.length) continue;
    groups.push({
      id: folder === 'foundations' ? 'foundations' : folder.toLowerCase().replace(/_/g, '-'),
      title: getFolderTitle(folder),
      items: pages.map(pageToNav),
    });
    folderMap.delete(folder);
  }

  for (const [folder, pages] of folderMap) {
    groups.push({
      id: folder.toLowerCase().replace(/_/g, '-'),
      title: getFolderTitle(folder),
      items: pages.map(pageToNav),
    });
  }

  return groups;
};

export const navGroups: NavGroup[] = buildShowcaseGroups();

export const navIndex = new Map<string, NavItem>();
navGroups.forEach((group) => {
  group.items.forEach((item) => navIndex.set(item.path, item));
});
