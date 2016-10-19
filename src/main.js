/* global window, document */
/* eslint no-console: off */
/* eslint no-var: off */
/* eslint no-param-reassign: ["error", { "props": false }] */
import Snap from 'snapsvg';

const s = new Snap();

const bigCircle = s.circle(150, 150, 100);

bigCircle.attr({
  fill: '#bada55',
  stroke: '#000',
  strokeWidth: 5,
});

const smallCircle = s.circle(100, 150, 70);
const discs = s.group(smallCircle, s.circle(200, 150, 70));

discs.attr({
  fill: '#fff',
});
