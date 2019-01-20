import {keys, endings1, endings2, keysNumsMap, numsKeysMap} from './data';

let NUMBER;

let allKeysPermutations = [];
const transposeHandler = (inputText, number ) => {
  if ( number === 0 ) return inputText;
  NUMBER = number;
  const words = inputText.split('\n').map((el) => {
    return el.split(' ')
  })
  return words.map((arr) => {
    if(isChordsLine(arr)) {
      return replaceChords(arr)
    }
    return arr.join(' ')
  }).join('\n')
}

const replaceChords = (arr) => {
  return arr.map((el) => {
    if( el === '') {
      return el;
    } else {
      return replaceChord(el);
    }
  }).join(' ');
}

const replaceChord = (chord) => {
  let part1;
  let part2;
  if ( chord[1] === '#' || chord[1] === 'b') {
    part1 = chord.slice(0, 2);
    part2 = chord.slice(2);
  } else {
    part1 = chord[0];
    part2 = chord.slice(1);
  }
  part1 = transpose(part1);
  return part1 + part2;
}

const transpose = (el) => {
  var num = keysNumsMap[el];
  var finalNum = getFinalNum(num);
  return numsKeysMap[finalNum];
}

const getFinalNum = (num) => {
  let result = num + NUMBER;
  if ( result > 12 ) {
    return result - 12;
  }
  if ( result < 1 ) {
    return 12 - result;
  }
  return result;
}

const isChordsLine = (line) => {
  return line.reduce((acc, el) => {
    if( acc === false ) return false;
    return el === '' || allKeysPermutations.includes(el);
  }, true);
}

const makePermutations = () => {
  const result = keys;
  keys.forEach((key) => {
    endings1.forEach((ending1) => {
      result.push(key+ending1);
      endings2.forEach((ending2) => {
        result.push(key+ending2);
        result.push(key+ending1+ending2);
      })
    })
  })
  return result;
}

allKeysPermutations = makePermutations();


export {transposeHandler}