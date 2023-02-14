module.exports = {
  planet_symbol: {
    sun: '☉',
    earth: '⊗',
    moon: '☾',
    mars: '♂',
    venus: '♀',
    mercury: '☿',
    jupiter: '♃',
    saturn: '♄',
    neptune: '♆',
    uranus: '♅',
  },

  planet_symbol_font: {
    sun: 'A',
    earth: 'O',
    moon: 'B',
    mars: 'E',
    venus: 'D',
    mercury: 'C',
    jupiter: 'F',
    saturn: 'G',
    neptune: 'I',
    uranus: 'H',
  },

  element_array: ['🜁', '🜂', '🜄', '🜃'],

  trigram_array: ['☰', '☴', '☲', '☶', '☱', '☵', '☳', '☷'],

  binary_to_binary: {
    1: 'yang',
    0: 'yin',
  },

  trigram_to_english: {
    '☰': 'Heaven',
    '☴': 'Wind',
    '☲': 'Fire',
    '☶': 'Mountain',
    '☱': 'Lake',
    '☵': 'Water',
    '☳': 'Thunder',
    '☷': 'Earth',
  },

  trigram_to_icon: {
    '☰': '⭐️',
    '☱': '🌊',
    '☲': '🔥',
    '☳': '⚡️',
    '☴': '💨',
    '☵': '💧',
    '☶': '⛰',
    '☷': '🌍',
  },

  binary_to_trigram: {
    111: '☰',
    '011': '☱',
    101: '☲',
    '001': '☳',
    110: '☴',
    '010': '☵',
    100: '☶',
    '000': '☷',
  },

  trigram_to_binary: {
    '☰': '111',
    '☱': '011',
    '☲': '101',
    '☳': '001',
    '☴': '110',
    '☵': '010',
    '☶': '100',
    '☷': '000',
  },

  trigram_to_icon: {
    '☰': {
      collection: 'fontisto',
      name: 'skyatlas',
    },
    '☱': {
      collection: 'fontawesome5',
      name: 'water',
    },
    '☲': {
      collection: 'fontisto',
      name: 'blood-drop',
    },
    '☳': {
      collection: 'fontisto',
      name: 'lightning',
    },
    '☴': {
      collection: 'fontisto',
      name: 'wind',
    },
    '☵': {
      collection: 'fontisto',
      name: 'fire',
    },
    '☶': {
      collection: 'fontawesome5',
      name: 'mountain',
    },
    '☷': {
      collection: 'fontisto',
      name: 'earth',
    },
  },

  digram: {
    '🜁': '⚌',
    '🜂': '⚍',
    '🜄': '⚎',
    '🜃': '⚏',
  },

  // digram: {
  // 	"🜁": "⚏",
  // 	"🜂": "⚍",
  // 	"🜄": "⚎",
  // 	"🜃": "⚌",
  // },

  bielement_to_treeoflife: {
    '🜁': {
      // Y
      '🜁': '1',
      '🜂': '3',
      '🜄': '2',
      '🜃': [4, 5, 6],
    },
    '🜂': {
      // H
      '🜁': '6',
      '🜂': '5',
      '🜄': '4',
      '🜃': [7, 8, 9],
    },
    '🜄': {
      // V
      '🜁': '9',
      '🜂': '8',
      '🜄': '7',
      '🜃': ['air', 'fire', 'water', 'earth'],
    },
    '🜃': {
      // H
      '🜁': 'air',
      '🜂': 'fire',
      '🜄': 'water',
      '🜃': 'earth',
    },
  },

  // planet_q_colors: {
  // 	"moon": "#FF00FF",
  // 	"mercury": "#fa7b00",
  // 	"venus": "#15a124",
  // 	"sun": "#f9e50a",
  // 	"earth" : "#6d4f3c",
  // 	"mars": "#ef1a0c",
  // 	"jupiter": "#2968c7",
  // 	"saturn:": "#000000"
  // },

  planet_q_colors: {
    moon: '#848BD7',
    mercury: '#fa7b00',
    venus: '#15a124',
    sun: '#f9e50a',
    earth: '#aaa8',
    mars: '#ef1a0c',
    jupiter: '#2968c7',
    saturn: '#BBB',
  },

  // from_binary: {
  // 	'00': '🜁',
  // 	'01': '🜂',
  // 	'10': '🜄',
  // 	'11': '🜃',
  // },

  // to_binary: {
  // 	'🜁': '00',
  // 	'🜂': '01',
  // 	'🜄': '10',
  // 	'🜃': '11'
  // },

  from_binary_to_number: {
    // inner elemental wheel goes: earth - water - air - fire
    4: {11: 2, '01': 3, 10: 1, '00': 0},
    16: {11: 3, '01': 2, 10: 1, '00': 0},
    64: {11: 3, '01': 2, 10: 1, '00': 0},
  },

  from_binary_to_element_sequence: {
    11: 0, // air
    '01': 1, // fire
    10: 2, // water
    '00': 3, // earth
  },

  from_binary_to_element_symbols: {
    11: '🜁', // air
    '01': '🜂', // fire
    10: '🜄', // water
    '00': '🜃', // earth
  },

  from_binary: {
    11: '🜁',
    '01': '🜂',
    10: '🜄',
    '00': '🜃',
  },

  to_binary: {
    '🜁': '11',
    '🜂': '01',
    '🜄': '10',
    '🜃': '00',
  },

  from_symbol: {
    '🜁': 'air',
    '🜂': 'fire',
    '🜄': 'water',
    '🜃': 'earth',
  },

  to_symbol: {
    air: '🜁',
    fire: '🜂',
    water: '🜄',
    earth: '🜃',
  },

  colors: {
    akasha: '#6028BD',
    fire: '#C9280C',
    air: '#C29F17',
    earth: '#55A349',
    water: '#0E61B0',
  },

  colors_b: {
    akasha: '#6028BD',
    fire: '#E64730',
    air: '#DEC157',
    earth: '#3BBF3F',
    water: '#2782CC',
  },

  colors_basic: {
    air: '#ffab04',
    water: '#0464ff',
    fire: '#fc2003',
    earth: '#67fa61',
  },

  colors_basic_symbol: {
    '🜁': '#C29F17',
    '🜄': '#0E61B0',
    '🜂': '#C9280C',
    '🜃': '#55A349',
  },

  compl_colors: {
    air: 'fcce03',
    water: 'fb9b00',
    fire: '08ffc1',
    earth: 'ff29cd',
  },

  pieces: {
    4: {
      0: '🜃',
      1: '🜄',
      2: '🜁',
      3: '🜂',
      // 0: '🜁',
      // 1: '🜄',
      // 2: '🜃',
      // 3: '🜂',
    },
    16: {
      0: '🜃',
      1: '🜄',
      2: '🜂',
      3: '🜁',
      // 0: '🜁',
      // 1: '🜄',
      // 2: '🜂',
      // 3: '🜃',
    },
    64: {
      0: '🜃',
      1: '🜄',
      2: '🜂',
      3: '🜁',
      // 0: '🜁',
      // 1: '🜄',
      // 2: '🜂',
      // 3: '🜃',
    },
    12: {
      0: '♈︎',
      1: '♉︎',
      2: '♊︎',
      3: '♋︎',
      4: '♌︎',
      5: '♍︎',
      6: '♎︎',
      7: '♏︎',
      8: '♐︎',
      9: '♑︎',
      10: '♒︎',
      11: '♓︎',
    },
  },
};
