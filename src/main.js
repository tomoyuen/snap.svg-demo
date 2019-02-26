/* eslint no-console: off */
/* eslint no-var: off */
/* eslint no-param-reassign: ["error", { "props": false }] */
import Snap from 'snapsvg';

const s = new Snap(800, 600);
const bigCircle = s.circle(150, 150, 100);

bigCircle.attr({
  fill: '#bada55',
  stroke: '#000',
  strokeWidth: 5,
});

const smallCircle = s.circle(100, 150, 70);
const smallCircle2 = s.circle(200, 150, 70);
const discs = s.group(smallCircle, smallCircle2);

discs.attr({
  fill: '#fff',
});

bigCircle.attr({
  mask: discs,
});

smallCircle.animate({ r: 50 }, 1000);
smallCircle2.animate({ r: 50 }, 1000);

let p = s.path('M10-5-10, 15M15, 0, 0, 15M0-5-20, 15').attr({
  fill: 'none',
  stroke: '#bada55',
  strokeWidth: 5,
});

p = p.pattern(0, 0, 10, 10);

bigCircle.attr({
  fill: p,
});

discs.attr({
  fill: 'r()#fff-#000',
});

discs.attr({
  fill: 'R(150, 150, 100)#fff-#000',
});

debugger;

p.select('path').animate({ stroke: '#f00' }, 1000);

Snap.load('mascot.svg', (f) => {
  // f.select('polygon[fill="#09b39c"]').attr({
  //   fill: '#bada55',
  // });
  const g = f.select('g');
  s.append(g);
  g.drag();
});

s.text(200, 100, 'hello, Snap.svg');
// const t = s.text(200, 120, ['hello', 'Snap', 'Svg']);

// t.select('tspan:nth-child(3)').attr({
//   fill: '#900',
//   'font-size': '20px',
// });
