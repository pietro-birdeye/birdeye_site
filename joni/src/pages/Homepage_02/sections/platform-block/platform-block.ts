import { steveOrigin } from '../../../../utils/steve';

export const initPlatformBlock = () => {
  const lineImgs = document.querySelectorAll<HTMLImageElement>('[data-graph-line]');
  const birdLogo = document.querySelector<HTMLImageElement>('[data-birdai-logo]');
  if (!lineImgs.length && !birdLogo) return;

  const base = `${steveOrigin()}/v1/imgs/library/GraphLines`;
  lineImgs.forEach((img) => {
    const lineName = img.dataset.graphLine;
    if (!lineName) return;
    const src = `${base}/${lineName}.svg`;
    img.decoding = 'async';
    img.loading = 'lazy';

    // Inline the SVG so we can style on hover (for animated stroke on sources connector)
    fetch(src)
      .then((res) => (res.ok ? res.text() : Promise.reject()))
      .then((text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'image/svg+xml');
        const svg = doc.querySelector('svg');
        if (!svg) {
          img.src = src;
          return;
        }

        const defs =
          svg.querySelector('defs') ||
          (() => {
            const d = doc.createElementNS('http://www.w3.org/2000/svg', 'defs');
            svg.prepend(d);
            return d;
          })();

        const grad = doc.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        grad.setAttribute('id', 'graph-wave-gradient');
        grad.setAttribute('x1', '0%');
        grad.setAttribute('y1', '0%');
        grad.setAttribute('x2', '100%');
        grad.setAttribute('y2', '0%');

        const stop1 = doc.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#1e3a8a');
        const stop1Anim = doc.createElementNS('http://www.w3.org/2000/svg', 'animate');
        stop1Anim.setAttribute('attributeName', 'stop-color');
        stop1Anim.setAttribute(
          'values',
          '#1e3a8a; #3b82f6; #a855f7; #ec4899; #f9a8d4; #fdf2f8; #1e3a8a'
        );
        stop1Anim.setAttribute('dur', '12s');
        stop1Anim.setAttribute('repeatCount', 'indefinite');
        stop1.appendChild(stop1Anim);

        const stop2 = doc.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#f9a8d4');
        const stop2AnimColor = doc.createElementNS('http://www.w3.org/2000/svg', 'animate');
        stop2AnimColor.setAttribute('attributeName', 'stop-color');
        stop2AnimColor.setAttribute(
          'values',
          '#f9a8d4; #ec4899; #a855f7; #3b82f6; #1e3a8a; #3b82f6; #ec4899; #f9a8d4'
        );
        stop2AnimColor.setAttribute('dur', '10s');
        stop2AnimColor.setAttribute('repeatCount', 'indefinite');
        const stop2AnimOffset = doc.createElementNS('http://www.w3.org/2000/svg', 'animate');
        stop2AnimOffset.setAttribute('attributeName', 'offset');
        stop2AnimOffset.setAttribute(
          'values',
          '0.95; 0.8; 0.6; 0.4; 0.2; 0.2; 0; 0.2; 0.4; 0.6; 0.8; 0.95'
        );
        stop2AnimOffset.setAttribute('dur', '10s');
        stop2AnimOffset.setAttribute('repeatCount', 'indefinite');
        stop2.appendChild(stop2AnimColor);
        stop2.appendChild(stop2AnimOffset);

        grad.appendChild(stop1);
        grad.appendChild(stop2);

        defs.appendChild(grad);

        const paths = svg.querySelectorAll('path, line, polyline, polygon');
        paths.forEach((p) => {
          p.classList.add('graph-line-path');
          p.removeAttribute('stroke');
          p.setAttribute('fill', 'currentColor');
        });

        // Add animated dots for the sources connector (three pulses traveling toward the node)
        if (lineName === '5Lines') {
          const mainPath = svg.querySelector('path');
          const d = mainPath?.getAttribute('d');
          if (mainPath && d) {
            if (!mainPath.id) {
              mainPath.id = `graph-line-path-${lineName}-${Math.random().toString(36).slice(2, 8)}`;
            }
            const stops = [55, 78, 100]; // approx % along path to the node for top/mid/bottom
            stops.forEach((stopPct, idx) => {
              const dot = doc.createElementNS('http://www.w3.org/2000/svg', 'circle');
              dot.classList.add('graph-line-dot');
              dot.setAttribute('r', '3');
              dot.setAttribute('fill', 'currentColor');
              dot.setAttribute('transform-box', 'fill-box');
              dot.setAttribute('transform-origin', 'center');
              dot.style.setProperty('offset-path', `path('${d}')`);
              dot.style.setProperty('-webkit-offset-path', `path('${d}')`);
              dot.style.setProperty('offset-distance', '0%');
              dot.style.setProperty('-webkit-offset-distance', '0%');
              dot.style.setProperty('offset-rotate', '0deg');
              dot.style.setProperty('--dot-stop', `${stopPct}%`);
              dot.style.animationDelay = `${idx * 0.4}s`;

              const motion = doc.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
              motion.setAttribute('dur', '1.6s');
              motion.setAttribute('begin', `${idx * 0.4}s`);
              motion.setAttribute('fill', 'freeze');
              motion.setAttribute('repeatCount', '1');
              const mpath = doc.createElementNS('http://www.w3.org/2000/svg', 'mpath');
              mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${mainPath.id}`);
              motion.appendChild(mpath);
              dot.appendChild(motion);

              svg.appendChild(dot);
            });
          }
        }

        svg.setAttribute('aria-hidden', 'true');
        img.replaceWith(svg);
      })
      .catch(() => {
        img.src = src;
      });
  });

  if (birdLogo) {
    birdLogo.src = `${steveOrigin()}/v1/logos/BirdAILOGO.svg`;
    birdLogo.decoding = 'async';
    birdLogo.loading = 'lazy';
    birdLogo.style.maxWidth = '120px';
    birdLogo.style.height = 'auto';
  }
};
