(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const r of d.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(s){if(s.ep)return;s.ep=!0;const d=i(s);fetch(s.href,d)}})();const S=`<div class="harmony-preview colors-page">
  <style>
    /* local-only helpers for the color chips */
    .chip { inline-size: 72px; block-size: 56px; border-radius: var(--control-radius-lg); }
    .token-label { color: color-mix(in oklab, var(--devstudio-text), transparent 30%); }
    /* neutral contrast: light uses black mix, dark uses white mix */
    .nc { background: color-mix(in oklab, black 25%, var(--neutral-base)); }
    :root[data-theme="dark"] .nc { background: color-mix(in oklab, white 25%, var(--neutral-base)); }

    /* Page-scoped overrides — fluid rows that never wrap blocks */
    .colors-page .row {
      display: flex;
      flex-wrap: nowrap;                 /* never wrap blocks */
      align-items: center;
      column-gap: clamp(4px, 2vw, 32px); /* outer gutter shrinks first */
      row-gap: 0;
      width: 100%;
      overflow-x: auto;                  /* fallback if still too narrow */
      -webkit-overflow-scrolling: touch;
    }
    .colors-page .row-header { flex: 0 0 clamp(80px, 12vw, 160px); white-space: nowrap; }
    /* Tight label+chip pair; allow overall pair to shrink */
    .colors-page .specdpreview { display: inline-flex; align-items: center; gap: clamp(4px, 1vw, 12px); flex: 0 1 auto; min-width: 0; white-space: nowrap; }
    .colors-page .preview-specs { width: clamp(56px, 14vw, 160px); text-align: right; overflow: hidden; text-overflow: ellipsis; }
    .colors-page .componentpreview { justify-content: flex-start; }

  </style>

  <!-- System -->
  <h3>System</h3>

  <!-- Red -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Red</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-red</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-red);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">red-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-red-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">red.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-red-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">red.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-red-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">red.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-red-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">red.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-red-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">red.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-red-5);"></div></div>
    </div>
  </div>

  <!-- Orange -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Orange</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-orange</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-orange);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">orange-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-orange-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">orange.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-orange-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">orange.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-orange-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">orange.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-orange-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">orange.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-orange-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">orange.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-orange-5);"></div></div>
    </div>
  </div>

  <!-- Yellow -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Yellow</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-yellow</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-yellow);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">yellow-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-yellow-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">yellow.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-yellow-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">yellow.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-yellow-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">yellow.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-yellow-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">yellow.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-yellow-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">yellow.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-yellow-5);"></div></div>
    </div>
  </div>

  <!-- Green -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Green</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-green</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-green);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">green-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-green-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">green.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-green-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">green.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-green-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">green.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-green-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">green.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-green-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">green.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-green-5);"></div></div>
    </div>
  </div>

  <!-- Mint -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Mint</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-mint</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-mint);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">mint-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-mint-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">mint.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-mint-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">mint.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-mint-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">mint.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-mint-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">mint.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-mint-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">mint.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-mint-5);"></div></div>
    </div>
  </div>

  <!-- Teal -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Teal</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-teal</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-teal);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">teal-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-teal-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">teal.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-teal-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">teal.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-teal-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">teal.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-teal-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">teal.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-teal-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">teal.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-teal-5);"></div></div>
    </div>
  </div>

  <!-- Cyan -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Cyan</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-cyan</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-cyan);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">cyan-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-cyan-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">cyan.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-cyan-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">cyan.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-cyan-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">cyan.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-cyan-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">cyan.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-cyan-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">cyan.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-cyan-5);"></div></div>
    </div>
  </div>

  <!-- Blue -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Blue</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-blue</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-blue);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">blue-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-blue-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">blue.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-blue-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">blue.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-blue-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">blue.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-blue-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">blue.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-blue-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">blue.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-blue-5);"></div></div>
    </div>
  </div>

  <!-- Indigo -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Indigo</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-indigo</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-indigo);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">indigo-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-indigo-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">indigo.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-indigo-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">indigo.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-indigo-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">indigo.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-indigo-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">indigo.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-indigo-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">indigo.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-indigo-5);"></div></div>
    </div>
  </div>

  <!-- Purple -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Purple</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-purple</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-purple);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">purple-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-purple-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">purple.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-purple-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">purple.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-purple-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">purple.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-purple-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">purple.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-purple-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">purple.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-purple-5);"></div></div>
    </div>
  </div>

  <!-- Pink -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Pink</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-pink</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-pink);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">pink-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-pink-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">pink.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-pink-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">pink.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-pink-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">pink.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-pink-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">pink.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-pink-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">pink.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-pink-5);"></div></div>
    </div>
  </div>

  <!-- Brown -->
  <div class="row" data-cols="2" data-kind="system">
    <div class="row-header">Brown</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-brown</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-brown);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">brown-contrast</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-brown-contrast);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">brown.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-brown-1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">brown.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-brown-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">brown.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-brown-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">brown.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-brown-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">brown.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-brown-5);"></div></div>
    </div>
  </div>

  <!-- Neutrals -->
  <h3>Neutrals</h3>

  <!-- Gray -->
  <div class="row" data-cols="2">
    <div class="row-header">Gray</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-gray</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-contrast</span></div>
      <div class="componentpreview"><div class="chip nc" style="--neutral-base: var(--color-system-gray);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-step1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-step2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-step3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-step4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-step5);"></div></div>
    </div>
  </div>

  <!-- Gray 2 -->
  <div class="row" data-cols="2">
    <div class="row-header">Gray 2</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-gray-2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-2-contrast</span></div>
      <div class="componentpreview"><div class="chip nc" style="--neutral-base: var(--color-system-gray-2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-2.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-2-step1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-2.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-2-step2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-2.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-2-step3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-2.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-2-step4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-2.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-2-step5);"></div></div>
    </div>
  </div>

  <!-- Gray 3 -->
  <div class="row" data-cols="2">
    <div class="row-header">Gray 3</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-gray-3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-3-contrast</span></div>
      <div class="componentpreview"><div class="chip nc" style="--neutral-base: var(--color-system-gray-3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-3.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-3-step1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-3.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-3-step2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-3.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-3-step3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-3.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-3-step4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-3.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-3-step5);"></div></div>
    </div>
  </div>

  <!-- Gray 4 -->
  <div class="row" data-cols="2">
    <div class="row-header">Gray 4</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-gray-4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-4-contrast</span></div>
      <div class="componentpreview"><div class="chip nc" style="--neutral-base: var(--color-system-gray-4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-4.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-4-step1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-4.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-4-step2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-4.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-4-step3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-4.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-4-step4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-4.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-4-step5);"></div></div>
    </div>
  </div>

  <!-- Gray 5 -->
  <div class="row" data-cols="2">
    <div class="row-header">Gray 5</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-gray-5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-5);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-5-contrast</span></div>
      <div class="componentpreview"><div class="chip nc" style="--neutral-base: var(--color-system-gray-5);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-5.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-5-step1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-5.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-5-step2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-5.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-5-step3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-5.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-5-step4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-5.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-5-step5);"></div></div>
    </div>
  </div>

  <!-- Gray 6 -->
  <div class="row" data-cols="2">
    <div class="row-header">Gray 6</div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">--color-system-gray-6</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-6);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-6-contrast</span></div>
      <div class="componentpreview"><div class="chip nc" style="--neutral-base: var(--color-system-gray-6);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-6.1</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-6-step1);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-6.2</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-6-step2);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-6.3</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-6-step3);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-6.4</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-6-step4);"></div></div>
    </div>
    <div class="specdpreview">
      <div class="preview-specs"><span class="token-label">gray-6.5</span></div>
      <div class="componentpreview"><div class="chip" style="background:var(--color-system-gray-6-step5);"></div></div>
    </div>
  </div>
</div>
<script type="module">
  (() => {
    const rows = document.querySelectorAll('.specdpreview');
    rows.forEach((row) => {
      const label = row.querySelector('.token-label');
      if (!label) return;
      const chip = row.querySelector('.componentpreview .chip');
      if (!chip) return;
      const match = chip.style.background.match(/var\\((--color-system-[^)]+)\\)/);
      if (!match) return;
      const token = match[1].replace('--color-system-', '');
      label.textContent = token;
    });
  })();
<\/script>
`,H=`
<div class="icon-page-wrapper">
  <style>
    .icon-page-wrapper {
      display: grid;
      gap: var(--space-6, 1.5rem);
    }
    .icon-page__header {
      margin: 0;
      font: 600 var(--fs-18, 1.125rem)/1.2 var(--font-ui);
    }
    .icon-page__caption {
      margin: 0;
      font: 500 var(--fs-11, 0.6875rem)/1.3 var(--font-ui);
      color: color-mix(in oklab, var(--color-text), transparent 45%);
    }
    .icon-grid {
      display: grid;
      gap: var(--space-5, 1.25rem);
    }
    .icon-row {
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: var(--space-4, 1rem) var(--space-6, 1.5rem);
      padding: 0;
      align-items: center;
    }
    .icon-row__header {
      font: 600 var(--fs-13, 0.8125rem)/1.3 var(--font-ui);
      color: var(--color-text);
      text-transform: capitalize;
      min-inline-size: 0;
    }
    .icon-row__cells {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: clamp(var(--space-2, 0.5rem), 2vw, var(--space-4, 1rem));
      align-items: center;
      justify-items: center;
    }
    .icon-card {
      display: flex;
      flex-direction: column;
      gap: var(--space-2, 0.5rem);
      padding: var(--space-3, 0.75rem) var(--space-4, 1rem);
      border-radius: var(--radius-3, 0.375rem);
      background: var(--color-system-white, #ffffff);
      border: 1px solid color-mix(in oklab, var(--role-border, rgba(10,10,12,0.16)), transparent 35%);
      align-items: center;
      width: 100%;
      box-sizing: border-box;
    }
    .icon-card__preview {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .icon-card__label {
      font: 500 var(--fs-11, 0.6875rem)/1.3 var(--font-ui);
      color: color-mix(in oklab, var(--color-text), transparent 35%);
      white-space: nowrap;
    }
    @media (max-width: 720px) {
      .icon-row {
        grid-template-columns: 1fr;
      }
      .icon-row__cells {
        justify-content: flex-start;
      }
    }
    .icon-card__preview .harm-icon[data-size] {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .icon-card__preview .harm-icon[data-size="xxs"] {
      inline-size: var(--control-icon-xxs, 0.75rem);
      block-size: var(--control-icon-xxs, 0.75rem);
    }
    .icon-card__preview .harm-icon[data-size="xs"] {
      inline-size: var(--control-icon-xs, 1rem);
      block-size: var(--control-icon-xs, 1rem);
    }
    .icon-card__preview .harm-icon[data-size="sm"] {
      inline-size: var(--control-icon-sm, 1.25rem);
      block-size: var(--control-icon-sm, 1.25rem);
    }
    .icon-card__preview .harm-icon[data-size="md"] {
      inline-size: var(--control-icon-md, 1.5rem);
      block-size: var(--control-icon-md, 1.5rem);
    }
    .icon-card__preview .harm-icon[data-size="lg"] {
      inline-size: var(--control-icon-lg, 1.75rem);
      block-size: var(--control-icon-lg, 1.75rem);
    }
    .icon-card__preview .harm-icon[data-size="xl"] {
      inline-size: var(--control-icon-xl, 2rem);
      block-size: var(--control-icon-xl, 2rem);
    }
    .icon-card__preview .harm-icon[data-size="2xl"] {
      inline-size: var(--control-icon-2xl, 2.25rem);
      block-size: var(--control-icon-2xl, 2.25rem);
    }
    .icon-card__preview .harm-icon[data-size="3xl"] {
      inline-size: var(--control-icon-3xl, 2.5rem);
      block-size: var(--control-icon-3xl, 2.5rem);
    }
  </style>
  <h3 class="icon-page__header">Icons — Sizes 12 to 40</h3>
  <p class="icon-page__caption">One row per icon; sizes 12px, 16px, 20px, 24px, 28px, 32px, 36px, 40px. Glyphs render via the same icon hydrator used in components.</p>
  <div class="icon-grid">
    
  <div class="icon-row">
    <div class="icon-row__header">arrow.counterclockwise</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.counterclockwise"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.down.document</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.down.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.down.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.down.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.down.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.down.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.down.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.down.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.down.document"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.down.left</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.down.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.down.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.down.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.down.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.down.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.down.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.down.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.down.left"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.down.right</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.down.right"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.down</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.down"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.left</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.left"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.right</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.right"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.trianglehead.2.counterclockwise</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.trianglehead.2.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.trianglehead.2.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.trianglehead.2.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.trianglehead.2.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.trianglehead.2.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.trianglehead.2.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.trianglehead.2.counterclockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.trianglehead.2.counterclockwise"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.trianglehead.clockwise</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.trianglehead.clockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.trianglehead.clockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.trianglehead.clockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.trianglehead.clockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.trianglehead.clockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.trianglehead.clockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.trianglehead.clockwise"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.trianglehead.clockwise"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.up.document</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.up.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.up.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.up.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.up.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.up.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.up.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.up.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.up.document"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.up.left</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.up.left"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.up.right</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.up.right"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrow.up</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrow.up"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrowshape.down</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrowshape.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrowshape.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrowshape.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrowshape.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrowshape.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrowshape.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrowshape.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrowshape.down"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrowshape.forward</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrowshape.forward"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrowshape.forward"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrowshape.forward"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrowshape.forward"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrowshape.forward"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrowshape.forward"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrowshape.forward"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrowshape.forward"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrowshape.left</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrowshape.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrowshape.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrowshape.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrowshape.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrowshape.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrowshape.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrowshape.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrowshape.left"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrowshape.turn.up.left.2</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrowshape.turn.up.left.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrowshape.turn.up.left.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrowshape.turn.up.left.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrowshape.turn.up.left.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrowshape.turn.up.left.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrowshape.turn.up.left.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrowshape.turn.up.left.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrowshape.turn.up.left.2"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrowshape.turn.up.left</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrowshape.turn.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrowshape.turn.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrowshape.turn.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrowshape.turn.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrowshape.turn.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrowshape.turn.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrowshape.turn.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrowshape.turn.up.left"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrowshape.turn.up.right</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrowshape.turn.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrowshape.turn.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrowshape.turn.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrowshape.turn.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrowshape.turn.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrowshape.turn.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrowshape.turn.up.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrowshape.turn.up.right"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">arrowshape.up</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="arrowshape.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="arrowshape.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="arrowshape.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="arrowshape.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="arrowshape.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="arrowshape.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="arrowshape.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="arrowshape.up"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">at</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="at"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="at"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="at"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="at"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="at"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="at"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="at"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="at"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">bag</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="bag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="bag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="bag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="bag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="bag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="bag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="bag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="bag"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">bell</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="bell"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="bell"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="bell"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="bell"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="bell"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="bell"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="bell"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="bell"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">bold</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="bold"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="bold"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="bold"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="bold"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="bold"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="bold"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="bold"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="bold"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">bolt</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="bolt"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="bolt"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="bolt"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="bolt"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="bolt"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="bolt"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="bolt"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="bolt"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">bubble.left.and.bubble.right</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="bubble.left.and.bubble.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="bubble.left.and.bubble.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="bubble.left.and.bubble.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="bubble.left.and.bubble.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="bubble.left.and.bubble.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="bubble.left.and.bubble.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="bubble.left.and.bubble.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="bubble.left.and.bubble.right"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">bubble</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="bubble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="bubble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="bubble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="bubble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="bubble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="bubble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="bubble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="bubble"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">calendar</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="calendar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="calendar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="calendar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="calendar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="calendar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="calendar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="calendar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="calendar"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">camera</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="camera"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="camera"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="camera"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="camera"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="camera"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="camera"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="camera"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="camera"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">cart</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="cart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="cart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="cart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="cart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="cart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="cart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="cart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="cart"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">character.circle</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="character.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="character.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="character.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="character.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="character.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="character.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="character.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="character.circle"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chart.bar</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chart.bar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chart.bar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chart.bar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chart.bar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chart.bar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chart.bar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chart.bar"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chart.bar"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chart.pie</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chart.pie"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chart.pie"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chart.pie"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chart.pie"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chart.pie"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chart.pie"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chart.pie"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chart.pie"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">checkmark.message</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="checkmark.message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="checkmark.message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="checkmark.message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="checkmark.message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="checkmark.message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="checkmark.message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="checkmark.message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="checkmark.message"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">checkmark</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="checkmark"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chevron.compact.down</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chevron.compact.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chevron.compact.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chevron.compact.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chevron.compact.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chevron.compact.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chevron.compact.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chevron.compact.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chevron.compact.down"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chevron.compact.left</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chevron.compact.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chevron.compact.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chevron.compact.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chevron.compact.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chevron.compact.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chevron.compact.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chevron.compact.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chevron.compact.left"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chevron.compact.right</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chevron.compact.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chevron.compact.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chevron.compact.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chevron.compact.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chevron.compact.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chevron.compact.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chevron.compact.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chevron.compact.right"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chevron.compact.up</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chevron.compact.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chevron.compact.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chevron.compact.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chevron.compact.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chevron.compact.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chevron.compact.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chevron.compact.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chevron.compact.up"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chevron.down.2</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chevron.down.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chevron.down.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chevron.down.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chevron.down.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chevron.down.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chevron.down.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chevron.down.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chevron.down.2"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chevron.down</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chevron.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chevron.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chevron.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chevron.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chevron.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chevron.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chevron.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chevron.down"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chevron.left</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chevron.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chevron.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chevron.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chevron.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chevron.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chevron.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chevron.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chevron.left"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chevron.right</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chevron.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chevron.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chevron.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chevron.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chevron.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chevron.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chevron.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chevron.right"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chevron.up.2</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chevron.up.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chevron.up.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chevron.up.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chevron.up.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chevron.up.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chevron.up.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chevron.up.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chevron.up.2"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chevron.up.forward.2</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chevron.up.forward.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chevron.up.forward.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chevron.up.forward.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chevron.up.forward.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chevron.up.forward.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chevron.up.forward.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chevron.up.forward.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chevron.up.forward.2"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">chevron.up</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="chevron.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="chevron.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="chevron.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="chevron.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="chevron.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="chevron.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="chevron.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="chevron.up"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">circle.dotted</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="circle.dotted"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="circle.dotted"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="circle.dotted"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="circle.dotted"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="circle.dotted"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="circle.dotted"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="circle.dotted"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="circle.dotted"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">circle.grid.2x2</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="circle.grid.2x2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="circle.grid.2x2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="circle.grid.2x2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="circle.grid.2x2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="circle.grid.2x2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="circle.grid.2x2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="circle.grid.2x2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="circle.grid.2x2"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">circle.on.square</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="circle.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="circle.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="circle.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="circle.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="circle.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="circle.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="circle.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="circle.on.square"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">clock</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="clock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="clock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="clock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="clock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="clock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="clock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="clock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="clock"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">creditcard</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="creditcard"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="creditcard"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="creditcard"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="creditcard"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="creditcard"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="creditcard"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="creditcard"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="creditcard"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">cube</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="cube"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="cube"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="cube"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="cube"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="cube"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="cube"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="cube"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="cube"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">desktopcomputer</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="desktopcomputer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="desktopcomputer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="desktopcomputer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="desktopcomputer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="desktopcomputer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="desktopcomputer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="desktopcomputer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="desktopcomputer"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">document.on.document</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="document.on.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="document.on.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="document.on.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="document.on.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="document.on.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="document.on.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="document.on.document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="document.on.document"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">document</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="document"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="document"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">ellipsis.circle</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="ellipsis.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="ellipsis.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="ellipsis.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="ellipsis.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="ellipsis.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="ellipsis.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="ellipsis.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="ellipsis.circle"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">ellipsis</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="ellipsis"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">exclamationmark.triangle</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="exclamationmark.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="exclamationmark.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="exclamationmark.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="exclamationmark.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="exclamationmark.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="exclamationmark.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="exclamationmark.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="exclamationmark.triangle"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">face.smiling</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="face.smiling"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="face.smiling"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="face.smiling"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="face.smiling"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="face.smiling"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="face.smiling"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="face.smiling"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="face.smiling"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">flag</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="flag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="flag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="flag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="flag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="flag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="flag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="flag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="flag"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">folder</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="folder"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="folder"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="folder"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="folder"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="folder"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="folder"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="folder"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="folder"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">gear</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="gear"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="gear"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="gear"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="gear"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="gear"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="gear"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="gear"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="gear"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">gearshape.2</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="gearshape.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="gearshape.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="gearshape.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="gearshape.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="gearshape.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="gearshape.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="gearshape.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="gearshape.2"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">gearshape</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="gearshape"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">globe</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="globe"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="globe"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="globe"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="globe"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="globe"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="globe"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="globe"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="globe"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">hand.draw</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="hand.draw"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="hand.draw"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="hand.draw"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="hand.draw"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="hand.draw"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="hand.draw"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="hand.draw"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="hand.draw"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">hand.point.up.left</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="hand.point.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="hand.point.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="hand.point.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="hand.point.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="hand.point.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="hand.point.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="hand.point.up.left"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="hand.point.up.left"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">hand.point.up</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="hand.point.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="hand.point.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="hand.point.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="hand.point.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="hand.point.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="hand.point.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="hand.point.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="hand.point.up"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">hand.raised</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="hand.raised"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="hand.raised"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="hand.raised"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="hand.raised"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="hand.raised"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="hand.raised"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="hand.raised"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="hand.raised"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">hand.tap</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="hand.tap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="hand.tap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="hand.tap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="hand.tap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="hand.tap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="hand.tap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="hand.tap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="hand.tap"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">hand.thumbsdown</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="hand.thumbsdown"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="hand.thumbsdown"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="hand.thumbsdown"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="hand.thumbsdown"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="hand.thumbsdown"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="hand.thumbsdown"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="hand.thumbsdown"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="hand.thumbsdown"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">hand.thumbsup</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="hand.thumbsup"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="hand.thumbsup"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="hand.thumbsup"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="hand.thumbsup"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="hand.thumbsup"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="hand.thumbsup"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="hand.thumbsup"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="hand.thumbsup"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">hands.clap</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="hands.clap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="hands.clap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="hands.clap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="hands.clap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="hands.clap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="hands.clap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="hands.clap"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="hands.clap"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">heart</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="heart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="heart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="heart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="heart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="heart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="heart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="heart"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="heart"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">info.triangle</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="info.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="info.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="info.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="info.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="info.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="info.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="info.triangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="info.triangle"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">iphone</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="iphone"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="iphone"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="iphone"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="iphone"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="iphone"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="iphone"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="iphone"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="iphone"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">italic</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="italic"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="italic"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="italic"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="italic"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="italic"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="italic"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="italic"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="italic"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">key</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="key"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">lightbulb</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="lightbulb"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="lightbulb"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="lightbulb"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="lightbulb"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="lightbulb"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="lightbulb"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="lightbulb"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="lightbulb"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">line.3.horizontal.decrease.circle</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="line.3.horizontal.decrease.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="line.3.horizontal.decrease.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="line.3.horizontal.decrease.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="line.3.horizontal.decrease.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="line.3.horizontal.decrease.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="line.3.horizontal.decrease.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="line.3.horizontal.decrease.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="line.3.horizontal.decrease.circle"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">link</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="link"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="link"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="link"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="link"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="link"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="link"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="link"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="link"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">location</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="location"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="location"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="location"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="location"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="location"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="location"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="location"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="location"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">lock.open</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="lock.open"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="lock.open"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="lock.open"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="lock.open"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="lock.open"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="lock.open"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="lock.open"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="lock.open"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">lock.rectangle</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="lock.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="lock.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="lock.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="lock.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="lock.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="lock.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="lock.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="lock.rectangle"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">lock.shield</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="lock.shield"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="lock.shield"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="lock.shield"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="lock.shield"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="lock.shield"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="lock.shield"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="lock.shield"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="lock.shield"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">lock</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="lock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="lock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="lock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="lock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="lock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="lock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="lock"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="lock"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">macbook.and.ipod</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="macbook.and.ipod"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="macbook.and.ipod"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="macbook.and.ipod"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="macbook.and.ipod"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="macbook.and.ipod"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="macbook.and.ipod"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="macbook.and.ipod"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="macbook.and.ipod"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">map</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="map"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="map"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="map"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="map"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="map"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="map"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="map"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="map"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">mappin.and.ellipse</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="mappin.and.ellipse"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="mappin.and.ellipse"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="mappin.and.ellipse"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="mappin.and.ellipse"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="mappin.and.ellipse"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="mappin.and.ellipse"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="mappin.and.ellipse"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="mappin.and.ellipse"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">message</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="message"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="message"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">minus.square</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="minus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="minus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="minus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="minus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="minus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="minus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="minus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="minus.square"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">minus</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="minus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="minus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="minus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="minus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="minus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="minus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="minus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="minus"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">moon.fill</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="moon.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="moon.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="moon.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="moon.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="moon.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="moon.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="moon.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="moon.fill"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">multiply</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="multiply"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="multiply"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="multiply"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="multiply"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="multiply"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="multiply"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="multiply"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="multiply"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">paperclip</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="paperclip"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="paperclip"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="paperclip"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="paperclip"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="paperclip"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="paperclip"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="paperclip"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="paperclip"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">paperplane</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="paperplane"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="paperplane"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="paperplane"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="paperplane"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="paperplane"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="paperplane"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="paperplane"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="paperplane"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">party.popper</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="party.popper"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="party.popper"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="party.popper"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="party.popper"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="party.popper"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="party.popper"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="party.popper"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="party.popper"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">pause</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="pause"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="pause"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="pause"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="pause"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="pause"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="pause"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="pause"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="pause"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">pencil.slash</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="pencil.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="pencil.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="pencil.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="pencil.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="pencil.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="pencil.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="pencil.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="pencil.slash"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">pencil</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="pencil"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">person.2.badge.plus</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="person.2.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="person.2.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="person.2.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="person.2.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="person.2.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="person.2.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="person.2.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="person.2.badge.plus"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">person.2</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="person.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="person.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="person.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="person.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="person.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="person.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="person.2"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="person.2"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">person.badge.key</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="person.badge.key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="person.badge.key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="person.badge.key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="person.badge.key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="person.badge.key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="person.badge.key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="person.badge.key"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="person.badge.key"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">person.badge.plus</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="person.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="person.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="person.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="person.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="person.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="person.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="person.badge.plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="person.badge.plus"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">person.crop.circle</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="person.crop.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="person.crop.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="person.crop.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="person.crop.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="person.crop.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="person.crop.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="person.crop.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="person.crop.circle"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">person.fill.checkmark</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="person.fill.checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="person.fill.checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="person.fill.checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="person.fill.checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="person.fill.checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="person.fill.checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="person.fill.checkmark"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="person.fill.checkmark"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">person.line.dotted.person</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="person.line.dotted.person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="person.line.dotted.person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="person.line.dotted.person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="person.line.dotted.person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="person.line.dotted.person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="person.line.dotted.person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="person.line.dotted.person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="person.line.dotted.person"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">person</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="person"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="person"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">personalhotspot.slash</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="personalhotspot.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="personalhotspot.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="personalhotspot.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="personalhotspot.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="personalhotspot.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="personalhotspot.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="personalhotspot.slash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="personalhotspot.slash"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">photo</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="photo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="photo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="photo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="photo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="photo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="photo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="photo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="photo"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">play.circle</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="play.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="play.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="play.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="play.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="play.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="play.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="play.circle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="play.circle"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">play.rectangle</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="play.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="play.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="play.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="play.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="play.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="play.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="play.rectangle"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="play.rectangle"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">play.square</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="play.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="play.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="play.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="play.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="play.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="play.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="play.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="play.square"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">play</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="play"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="play"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="play"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="play"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="play"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="play"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="play"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="play"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">plus.square</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="plus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="plus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="plus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="plus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="plus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="plus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="plus.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="plus.square"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">plus</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="plus"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="plus"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">rectangle.and.pencil.and.ellipsis</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="rectangle.and.pencil.and.ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="rectangle.and.pencil.and.ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="rectangle.and.pencil.and.ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="rectangle.and.pencil.and.ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="rectangle.and.pencil.and.ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="rectangle.and.pencil.and.ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="rectangle.and.pencil.and.ellipsis"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="rectangle.and.pencil.and.ellipsis"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">rectangle.on.rectangle.badge.gearshape</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="rectangle.on.rectangle.badge.gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="rectangle.on.rectangle.badge.gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="rectangle.on.rectangle.badge.gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="rectangle.on.rectangle.badge.gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="rectangle.on.rectangle.badge.gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="rectangle.on.rectangle.badge.gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="rectangle.on.rectangle.badge.gearshape"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="rectangle.on.rectangle.badge.gearshape"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">rectangle.portrait.and.arrow.right</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="rectangle.portrait.and.arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="rectangle.portrait.and.arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="rectangle.portrait.and.arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="rectangle.portrait.and.arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="rectangle.portrait.and.arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="rectangle.portrait.and.arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="rectangle.portrait.and.arrow.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="rectangle.portrait.and.arrow.right"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">repeat</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="repeat"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="repeat"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="repeat"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="repeat"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="repeat"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="repeat"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="repeat"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="repeat"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">scribble</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="scribble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="scribble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="scribble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="scribble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="scribble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="scribble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="scribble"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="scribble"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">selection.pin.in.out</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="selection.pin.in.out"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="selection.pin.in.out"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="selection.pin.in.out"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="selection.pin.in.out"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="selection.pin.in.out"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="selection.pin.in.out"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="selection.pin.in.out"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="selection.pin.in.out"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">signature</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="signature"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="signature"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="signature"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="signature"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="signature"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="signature"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="signature"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="signature"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">slider.vertical.3</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="slider.vertical.3"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="slider.vertical.3"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="slider.vertical.3"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="slider.vertical.3"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="slider.vertical.3"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="slider.vertical.3"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="slider.vertical.3"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="slider.vertical.3"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">slowmo</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="slowmo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="slowmo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="slowmo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="slowmo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="slowmo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="slowmo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="slowmo"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="slowmo"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">sparkles</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="sparkles"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="sparkles"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="sparkles"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="sparkles"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="sparkles"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="sparkles"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="sparkles"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="sparkles"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">square.and.arrow.down</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="square.and.arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="square.and.arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="square.and.arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="square.and.arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="square.and.arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="square.and.arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="square.and.arrow.down"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="square.and.arrow.down"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">square.and.arrow.up</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="square.and.arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="square.and.arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="square.and.arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="square.and.arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="square.and.arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="square.and.arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="square.and.arrow.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="square.and.arrow.up"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">square.and.pencil</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="square.and.pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="square.and.pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="square.and.pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="square.and.pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="square.and.pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="square.and.pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="square.and.pencil"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="square.and.pencil"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">square.on.square</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="square.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="square.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="square.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="square.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="square.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="square.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="square.on.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="square.on.square"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">square.stack.3d.down.right</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="square.stack.3d.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="square.stack.3d.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="square.stack.3d.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="square.stack.3d.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="square.stack.3d.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="square.stack.3d.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="square.stack.3d.down.right"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="square.stack.3d.down.right"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">square.stack.3d.up</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="square.stack.3d.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="square.stack.3d.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="square.stack.3d.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="square.stack.3d.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="square.stack.3d.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="square.stack.3d.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="square.stack.3d.up"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="square.stack.3d.up"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">star</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="star"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="star"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="star"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="star"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="star"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="star"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="star"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="star"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">stop</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="stop"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="stop"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="stop"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="stop"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="stop"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="stop"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="stop"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="stop"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">strikethrough</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="strikethrough"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="strikethrough"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="strikethrough"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="strikethrough"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="strikethrough"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="strikethrough"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="strikethrough"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="strikethrough"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">sun.max.fill</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="sun.max.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="sun.max.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="sun.max.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="sun.max.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="sun.max.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="sun.max.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="sun.max.fill"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="sun.max.fill"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">sun.max</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="sun.max"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="sun.max"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="sun.max"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="sun.max"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="sun.max"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="sun.max"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="sun.max"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="sun.max"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">tachometer</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="tachometer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="tachometer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="tachometer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="tachometer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="tachometer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="tachometer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="tachometer"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="tachometer"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">tag</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="tag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="tag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="tag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="tag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="tag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="tag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="tag"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="tag"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">textformat.size.larger</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="textformat.size.larger"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="textformat.size.larger"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="textformat.size.larger"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="textformat.size.larger"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="textformat.size.larger"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="textformat.size.larger"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="textformat.size.larger"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="textformat.size.larger"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">trash</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="trash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="trash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="trash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="trash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="trash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="trash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="trash"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="trash"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">tray</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="tray"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="tray"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="tray"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="tray"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="tray"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="tray"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="tray"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="tray"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">underline</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="underline"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="underline"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="underline"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="underline"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="underline"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="underline"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="underline"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="underline"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">waveform.path.ecg</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="waveform.path.ecg"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="waveform.path.ecg"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="waveform.path.ecg"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="waveform.path.ecg"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="waveform.path.ecg"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="waveform.path.ecg"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="waveform.path.ecg"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="waveform.path.ecg"></span>
      </span>
    </div>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-row__header">xmark.triangle.circle.square</div>
    <div class="icon-row__cells">

    <div class="icon-card">
      <span class="icon-card__label">xxs · 12px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xxs" data-icon="xmark.triangle.circle.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xs · 16px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xs" data-icon="xmark.triangle.circle.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">sm · 20px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="sm" data-icon="xmark.triangle.circle.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">md · 24px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="md" data-icon="xmark.triangle.circle.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">lg · 28px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="lg" data-icon="xmark.triangle.circle.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">xl · 32px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="xl" data-icon="xmark.triangle.circle.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">2xl · 36px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="2xl" data-icon="xmark.triangle.circle.square"></span>
      </span>
    </div>

    <div class="icon-card">
      <span class="icon-card__label">3xl · 40px</span>
      <span class="icon-card__preview">
        <span class="harm-icon" aria-hidden="true" data-size="3xl" data-icon="xmark.triangle.circle.square"></span>
      </span>
    </div>
    </div>
  </div>
  </div>
</div>
`,A=`<div class="harmony-preview typography-page">
  <style>
    /* Page-scoped overrides — fluid rows that never wrap blocks */
    .typography-page .row {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      column-gap: clamp(4px, 2vw, 32px);
      row-gap: 0;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    .typography-page .row { margin-bottom: var(--space-8); }
    .typography-page .row:last-of-type { margin-bottom: 0; }
    .typography-page .row-header { flex: 0 0 clamp(80px, 12vw, 160px); white-space: nowrap; }
    .typography-page .specdpreview { display: inline-flex; align-items: center; gap: clamp(4px, 1vw, 12px); flex: 0 1 auto; min-width: 0; white-space: nowrap; }
    .typography-page .preview-specs { width: clamp(56px, 14vw, 160px); text-align: right; overflow: hidden; text-overflow: ellipsis; }
    .typography-page .componentpreview { justify-content: flex-start; }
  </style>

  <h3>Headings</h3>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Heading 1</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.heading-1</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="heading-1">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Heading 2</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.heading-2</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="heading-2">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Heading 3</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.heading-3</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="heading-3">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Heading 4</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.heading-4</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="heading-4">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Heading 5</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.heading-5</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="heading-5">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Heading 6</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.heading-6</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="heading-6">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>

  <h3>Body</h3>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Body Xxs</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.body-xxs</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="body-xxs">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Body Xs</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.body-xs</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="body-xs">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Body S</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.body-s</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="body-s">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Body M</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.body-m</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="body-m">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Body L</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.body-l</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="body-l">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Body Xl</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.body-xl</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="body-xl">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Body Xxl</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.body-xxl</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="body-xxl">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>

  <h3>Labels & Captions</h3>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Label Xxs</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.label-xxs</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="label-xxs">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Label Xs</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.label-xs</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="label-xs">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Label S</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.label-s</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="label-s">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Label M</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.label-m</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="label-m">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Label L</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.label-l</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="label-l">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Label Xl</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.label-xl</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="label-xl">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Label Xxl</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.label-xxl</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="label-xxl">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Caption</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.caption</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="caption">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Caption Small</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.caption-small</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="caption-small">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Overline</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.overline</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="overline">OVERLINE STYLE</div>
        </div>
      </div>
    </div>
    <div class="row" data-cols="1">
      <div class="row-header heading-5">Overline Small</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.overline-small</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="overline-small">OVERLINE STYLE</div>
        </div>
      </div>
    </div>
</div>
`,q=Object.assign({"../html/foundations/colors.html":S,"../html/foundations/icons.html":H,"../html/foundations/typography.html":A}),P=q,M=a=>a.split("/").pop()?.replace(/\.html$/,"")??"",O=a=>a.replace(/[-_]/g," ").replace(/\b\w/g,n=>n.toUpperCase()),G=a=>{const n=a.split("/"),i=n.findIndex(c=>c==="html");return i!==-1&&i+1<n.length?n[i+1]:"other"},k=a=>a==="foundations"?"Foundations":a==="harmony"||a==="components"?"Harmony Components":a==="tools"?"Tools":a.replace(/[-_]/g," ").replace(/\b\w/g,n=>n.toUpperCase()),I=Object.keys(q).sort(),E=I.map(a=>{const n=M(a);return{slug:n,title:O(n),path:`#/harmony/${n}`,htmlPath:a,css:[]}}),B=E,F=new Map(B.map(a=>[a.slug,a])),f=a=>({id:`showcase-${a.slug}`,title:a.title,path:a.path,kind:"showcase"}),$=()=>{const a=new Map;for(const c of E){const s=G(c.htmlPath);a.has(s)||a.set(s,[]),a.get(s).push(c)}const n=[],i=["tools","components","harmony","foundations"];for(const c of i){const s=a.get(c);!s||!s.length||(n.push({id:c==="foundations"?"foundations":c.toLowerCase().replace(/_/g,"-"),title:k(c),items:s.map(f)}),a.delete(c))}for(const[c,s]of a)n.push({id:c.toLowerCase().replace(/_/g,"-"),title:k(c),items:s.map(f)});return n},m=$(),R=new Map;m.forEach(a=>{a.items.forEach(n=>R.set(n.path,n))});const _="https://example.com",X="/assets/birdeyelogo-kwRRrd1b.svg";if(!document.querySelector("link[data-steve-tokens]")){const n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",`${_}/v1/harmony/tokens/tokens.css`),n.setAttribute("data-steve-tokens","true"),document.head.appendChild(n)}const T=document.getElementById("app");if(!T)throw new Error("DevStudio root node not found");const u=document.createElement("div");u.className="docs-shell";const x=document.createElement("aside");x.className="docs-shell__sidebar";const h=document.createElement("main");h.className="docs-shell__main devstudio-page-layout";u.append(x,h);T.append(u);const v=document.createElement("header");v.className="docs-shell__brand";v.style.display="flex";v.style.alignItems="center";v.style.gap="0.5rem";const t=document.createElement("img");t.src=X;t.alt="Birdeye logo";t.style.width="32px";t.style.height="32px";t.style.objectFit="contain";const b=document.createElement("h2");b.className="heading-2 docs-shell__brand-title";b.textContent="Harmony";v.append(t,b);x.append(v);const z=document.createElement("nav");z.className="docs-shell__nav";x.append(z);const N=new Map;m.forEach(a=>{if(!a.items.length)return;const n=document.createElement("section");if(n.className="nav-group",a.title){const c=document.createElement("p");c.className="nav-group__title label-small",c.textContent=a.title,n.append(c)}const i=document.createElement("ul");i.className="nav-group__list",a.items.forEach(c=>{const s=document.createElement("li"),d=document.createElement("a");d.className="nav-link body-m",d.href=c.path,d.textContent=c.title,d.addEventListener("click",r=>{r.preventDefault(),L(c.path)}),s.append(d),i.append(s),N.set(c.path,d)}),n.append(i),z.append(n)});function L(a){window.location.hash!==a?window.location.hash=a:g()}function D(a){return a.startsWith("#/harmony/")?a.replace("#/harmony/","").split("?")[0]:null}function U(a){N.forEach((n,i)=>{i===a?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Y(a){Array.from(a.querySelectorAll("[data-icon]")).forEach(i=>{const c=i.getAttribute("data-icon");c&&fetch(`${_}/v1/icons/svg/${encodeURIComponent(c)}.svg`).then(s=>s.ok?s.text():Promise.reject(new Error(String(s.status)))).then(s=>{const d=s.includes("aria-hidden")?s:s.replace("<svg",'<svg aria-hidden="true" focusable="false"');i.innerHTML=d,i.removeAttribute("data-icon")}).catch(()=>{})})}function V(a){a.querySelectorAll("script").forEach(n=>{const i=document.createElement("script");Array.from(n.attributes).forEach(c=>{i.setAttribute(c.name,c.value)}),i.textContent=n.textContent??"",n.replaceWith(i)})}function K(a,n=[]){const i=P[a],c=document.createElement("template");c.innerHTML=i??"<!-- missing fragment -->";const s=c.content.cloneNode(!0);Y(s),V(s);const d=document.createDocumentFragment();return n.forEach(r=>{if(!r)return;if(/^(https?:)?\//.test(r)){const p=document.createElement("link");p.setAttribute("rel","stylesheet"),p.setAttribute("href",r),d.append(p)}else{const p=document.createElement("style");p.textContent=r,d.append(p)}}),d.append(s),d}function W(a){const n=document.createDocumentFragment(),i=document.createElement("article");return i.className="stack",i.innerHTML=`<h1 class="heading-2">Missing</h1><p>Could not load \`${a}\`.</p>`,n.append(i),n}function J(a,n){if(a.querySelector(".devstudio-page"))return a;const i=Array.from(a.childNodes),c=document.createElement("div");c.className="devstudio-page";let s=null;const d=new Set;for(const e of i)if(e instanceof Element){if(/^H[1-6]$/.test(e.tagName)){s=e,d.add(e);break}if(e.children.length===1){const o=e.children[0];if(/^H[1-6]$/.test(o.tagName)){s=o,d.add(e);break}}}const r=document.createElement("header");if(r.className="devstudio-page__header",s)s.parentElement?.removeChild(s),r.append(s);else{const e=document.createElement("h1");e.className="heading-2",e.textContent=n,r.append(e)}const l=document.createElement("div");l.className="devstudio-page-section";let p=!1;const w=[];i.forEach(e=>{if(!(e.nodeType===Node.TEXT_NODE&&!(e.textContent??"").trim())&&!d.has(e)){if(e instanceof HTMLStyleElement||e instanceof Element&&e.tagName==="LINK"){c.append(e);return}if(e instanceof Element&&e.classList.contains("devstudio-page-section")){l.childNodes.length&&(w.push(l.cloneNode(!0)),l.replaceChildren()),w.push(e);return}l.append(e),p=!0}}),c.append(r),w.filter(e=>Array.from(e.childNodes).some(j=>j.nodeType===Node.ELEMENT_NODE)?!0:(e.textContent?.trim()??"").length>0).forEach(e=>c.append(e));const C=Array.from(l.childNodes).some(e=>{if(!(e instanceof Element))return!1;const o=e.tagName;return o!=="LINK"&&o!=="STYLE"});p&&C&&c.append(l);const y=document.createDocumentFragment();return y.append(c),y}function g(){const a=D(window.location.hash);if(!a){const d=m[0]?.items[0];d&&L(d.path);return}const n=F.get(a);if(!n){h.replaceChildren(W(a));return}const i=n.css?[...n.css]:[];n.slug==="icons"&&_&&i.push(`${_}/v1/harmony/components/icon/icon.css`);const c=K(n.htmlPath,i),s=J(c,n.title);U(n.path),document.title=`Harmony · ${n.title}`,h.replaceChildren(s)}window.addEventListener("hashchange",g);g();
