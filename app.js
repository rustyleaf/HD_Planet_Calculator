const {getEphemerisCross} = require('./astro.js');

const dateObj = new Date('1974-10-10T07:20:00.000+02:00');
const eph = getEphemerisCross(dateObj, {coords: [-19.9833, 37.7833]});

console.log(eph);
