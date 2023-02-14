const Ephemeris = require('ephemeris');

const IChing = require('./constants/i-ching');
const Elements = require('./constants/elements');
const IChingWheel = require('./constants/i-ching-wheel');

const gateOrder = IChingWheel.wheel;

const normaliseHDWheel = (deg, planet) => {
  if (planet) {
    deg += 58;
    if (deg > 360) {
      deg -= 360;
    } else if (deg < 0) {
      deg += 360;
    }
    return deg;
  } else return deg;
};

const getHex = (deg, planet) => {
  if (planet === 'earth') {
    deg += 180;
  }

  deg = normaliseHDWheel(deg, planet);

  const percentageThrough = deg / 360; // e.g. 182.3705 becomes 0.5065

  // Gate
  const gate = gateOrder[parseInt(percentageThrough * 64)];

  // Line
  const exactLine = 384 * percentageThrough;
  const line = (exactLine % 6) + 1;

  // Color
  const exactColor = 2304 * percentageThrough;
  const color = (exactColor % 6) + 1;

  // Tone
  const exactTone = 13824 * percentageThrough;
  const tone = (exactTone % 6) + 1;

  // Base
  const exactBase = 69120 * percentageThrough; // e.g. 46151
  const base = (exactBase % 5) + 1;

  return {
    hexagram: gate,
    line: parseInt(line),
    line_fraction: parseInt(exactLine),
    color: parseInt(color),
    color_fraction: parseInt(exactColor),
    tone: parseInt(tone),
    tone_fraction: parseInt(exactTone),
    base: parseInt(base),
    base_fraction: parseInt(exactBase),
  };
};

const createHexValues = (hexagram, planet) => {
  const font = IChing.find((x) => x.hex === hexagram.hexagram).hex_font;

  const binary = IChing.find((x) => x.hex === hexagram.hexagram).binary;
  const element_1 = Elements.from_binary[binary.toString().substring(0, 2)];
  const element_2 = Elements.from_binary[binary.toString().substring(2, 4)];
  const element_3 = Elements.from_binary[binary.toString().substring(4, 6)];

  return {
    hexagram: hexagram.hexagram,
    hexagram_line: hexagram.line,
    hexagram_color: hexagram.color,
    hexagram_tone: hexagram.tone,
    hexagram_base: hexagram.base,
    hexagram_symbol: font,
    binary: binary,

    line_fract: hexagram.line_fraction,
    colo_fract: hexagram.color_fraction,
    tone_fract: hexagram.tone_fraction,
    base_fract: hexagram.base_fraction,

    element_compound: `${element_1} of ${element_2} of ${element_3}`,
    pattern: [element_1, element_2, element_3],
    //radians: lon_rad,
    symbol: Elements.planet_symbol[planet],
    planet: planet,
    q_color: Elements.planet_q_colors[planet], // kabalah color
  };
};

const get_planet_today = (ephemeris, planet, pd) => {
  const p = planet === 'earth' ? 'sun' : planet;
  hexagram = getHex(ephemeris.observed[p].apparentLongitudeDd, planet);
  return createHexValues(hexagram, planet);
};

const incarnation_cross_object = (eph_0, eph_88, names) => {
  // eph = ephemeris returned from ephemeris package
  // names = array of planet names to include
  const planets = {};
  names.forEach((p_name) => {
    const planet_0 = get_planet_today(eph_0, p_name); // one from 0 degress (personality)
    const planet_88 = get_planet_today(eph_88, p_name); // one for -88 degrees (design)
    planets[`p_${p_name}`] = planet_0; // personality planet
    planets[`d_${p_name}`] = planet_88; // design planet
  });
  return planets;
};

exports.getEphemerisCross = (nowDate, location) => {
  // Retrieve incarnation cross ephemeris
  // rusty design date: 11 January 1978, 14:03:40
  //const rusty = new Date('1978-01-11T14:03:40.000+00:00');

  const coords = location != -1 ? location.coords : [0, 0];
  const [lon, lat] = coords;
  const height = 100;

  // 'guess' date for sun being 88 degrees back on thee wheel (roughly -88 days)
  let date_88 = new Date(nowDate.getTime());
  date_88.setDate(nowDate.getDate() - 88);

  // calculate now-ephemeris, and that of 88 days back
  const eph_now = Ephemeris.getAllPlanets(nowDate, lon, lat, height);
  let eph_88_est = Ephemeris.getPlanet('sun', date_88, lon, lat, height);

  // retrieve apparent longitudes
  const eph_deg_now = eph_now.observed['sun'].apparentLongitudeDd;
  let eph_deg_est = eph_88_est.observed['sun'].apparentLongitudeDd;

  // Optimize date calculation (using 50% approach towards 88 degrees in difference)
  const max_tries = 16;
  let tries = 0;
  let diff = 360 - Math.abs(eph_deg_est - eph_deg_now);
  while (Math.abs(diff) > 0.000001 && tries < max_tries) {
    // Adjust seconds in the 88-degree date
    // Seconds in day => 24 hours div 2 = 12 hours
    date_88.setSeconds(date_88.getSeconds() - (88 - diff) * 12 * 60 * 60);

    // Recalculate sun
    eph_88_est = Ephemeris.getPlanet('sun', date_88, lon, lat, height);
    eph_deg_est = eph_88_est.observed['sun'].apparentLongitudeDd;

    // Calculate diff (diff should be 88 degrees)
    diff = 360 - Math.abs(eph_deg_est - eph_deg_now);

    // Prevent infinite loops
    tries += 1;
  }

  // final 88 deg calculation
  let eph_88 = Ephemeris.getAllPlanets(date_88, lon, lat, height);

  console.log('Personality Birthtime:', nowDate);
  console.log('Design Date:', date_88);

  // extraction of planets of interest
  const planet_names = [
    'sun',
    'moon',
    'earth',
    'mars',
    'venus',
    'mercury',
    'jupiter',
    'saturn',
    'uranus',
    'neptune',
    'pluto',
    'chiron',
    'sirius',
  ];
  return incarnation_cross_object(eph_now, eph_88, planet_names);
};
