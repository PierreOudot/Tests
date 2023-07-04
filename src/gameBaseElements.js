import {guessPool, objectToGuess, wordToGuessCharArray} from 'src/gameVariables.js';

export function generateIndex() {
    let arrayLength = guessPool.length;
    return Math.floor(Math.random()*arrayLength);
}

export function setObjectToGuess(){
    let index = generateIndex();
    return guessPool[index];
}

/**
 * @param {string} wordToGuess
 * @returns {Array}
 */
export function wordToCharArray(wordToGuess){
    return [...wordToGuess];
}

