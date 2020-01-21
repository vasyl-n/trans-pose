import {keysNumsMap, numsKeysMap} from './data';

let NUMBER;
const SEPARATORS = ['', '|', '(', ')']

const transposeHandler = (inputText, number ) => {
  if ( number === 0 ) return inputText;
  NUMBER = number;
  const words = inputText.split('\n').map((el) => {
    return el.split(' ');
  })
  return words.map((arr) => {
    if(replaceChords(arr).indexOf('undefined') < 0) {
      return replaceChords(arr)
    }
    return arr.join(' ')
  }).join('\n')
}

const replaceChords = (arr) => {
  return arr.map((el) => {
    if(SEPARATORS.includes(el)) {
      return el;
    } else {
      const separator = SEPARATORS.reduce((acc, separator) => {
        if (acc[0] >= 0) {return acc;}
        acc[0] = separator !== '' ? el.indexOf(separator) : acc[0];
        acc[1] = separator !== '' ? separator : acc[1];
        return acc;
      }, [-1, '']);
      // console.log(separator, el)
      if (separator[0] >= 0) {
        let arr = el.split('');
        arr.splice(separator[0], 1);
        let noChar = arr.join('')
        const replaced = replaceChord(noChar);
        let arr1 = replaced.split('');
        arr1.splice(separator[0], 0, separator[1]);
        const withSeparator = arr1.join('');
        return withSeparator
      } else {
        return replaceChord(el);
      }
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
    return 12 + result;
  }
  return result;
}




export {transposeHandler}