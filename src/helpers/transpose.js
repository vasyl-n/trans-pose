import {keys, endings1, endings2} from './data';

let allKeysPermutations = [];
const transposeHandler = (inputText, isPlus, number ) => {
  const words = inputText.split('\n').map((el) => {
    return el.split(' ')
  })
  words.forEach((arr) => {
    if(isChordsLine(arr)) {
      arr.forEach((word) => {
        console.log(word)
      })
    }
  })
}

const isChordsLine = (line) => {
  return line.reduce((acc, el) => {
    if( acc === false ) return false;
    return el === '' || allKeysPermutations.includes(el);
  }, true)
}

const makePermutations = () => {
  const result = keys;
  keys.forEach((key) => {
    endings1.forEach((ending1) => {
      result.push(key+ending1)
      endings2.forEach((ending2) => {
        result.push(key+ending2)
        result.push(key+ending1+ending2)
      })
    })
  })
  return result
}

allKeysPermutations = makePermutations();


export {transposeHandler}