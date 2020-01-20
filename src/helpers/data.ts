const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const endings1 = ['#', 'b'];
const endings2 = [
  'm', 'm7', '7',
  'dim', 'dim7', 'dim9', 
  'maj','maj7',  
  '7-5', 'm7-5', 
  '6', 'm6',
  '9', 'm9', 
  '11', 'm11', 
  'm7b5',
];

const keysNumsMap = {
  'C': 1,
  'C#': 2,
  'Cb': 12,
  'D': 3,
  'D#': 4,
  'Db': 2,
  'E': 5,
  'E#': 6,
  'Eb': 4,
  'F': 6,
  'F#': 7,
  'Fb': 5,
  'G': 8,
  'G#': 9,
  'Gb': 7,
  'A': 10,
  'A#': 11,
  'Ab': 9,
  'B': 12,
  'B#': 1,
  'Bb': 11,
}

const numsKeysMap = {
  1: 'C',
  2: 'C#',
  3: 'D',
  4: 'Eb',
  5: 'E',
  6: 'F',
  7: 'F#',
  8: 'G',
  9: 'Ab',
  10: 'A',
  11: 'Bb',
  12: 'B'
}

export {keys, endings1, endings2, keysNumsMap, numsKeysMap};
