function u(e,o={}){let t=o.nonce||"",a=Number(e?.logoSize??80),c=Number(e?.spacing??80),l=m(Number(e?.speed??5),1,10),i=Array.isArray(e?.logos)?e.logos:[],g=60-(l-1)*5,p=`
    ${d}
    .ck-logos__track{ --size:${a}px; --gap:${c}px; animation: scroll ${g}s linear infinite; }
  `,r=i.map(n=>`<div class="ck-logos__item"><img src="${s(n.url||"")}" alt="${s(n.alt||"")}" /></div>`).join("");return`<!doctype html><html><head><meta charset="utf-8" />
    <style nonce="${s(t)}">${p}</style>
  </head><body>
    <section class="ck-logos" data-role="logos">
      <div class="ck-logos__track">${r}${r}</div>
    </section>
  </body></html>`}function m(e,o,t){return Math.max(o,Math.min(t,e))}function s(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var d=`
  :root{ --gap:40px; }
  body{ margin:0; background:#f8fafc; color:#0f172a; font:14px/1.4 system-ui; }
  .ck-logos{ overflow:hidden; padding:16px; }
  .ck-logos__track{ display:flex; gap: var(--gap); align-items:center; }
  .ck-logos__item img{ display:block; height: var(--size, 80px); width:auto; }
  @keyframes scroll { from{ transform: translateX(0); } to{ transform: translateX(-50%); } }
`;export{u as render};
