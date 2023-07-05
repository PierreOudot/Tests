import {gameVariables} from 'src/gameVariables.js';

/**
 * 
 * @returns {int}
 */
export function generateIndex() {
    let arrayLength = gameVariables.getGuessPool().length;
    return Math.floor(Math.random()*arrayLength);
}

/**
* @returns {object}
*/
export function setObjectToGuess(){
    let index = generateIndex();
    return gameVariables.getGuessPool()[index];
}

/**
 * @param {string} wordToGuess
 * @returns {Array}
 */
export function wordToCharArray(){
    let word = gameVariables.getObjectToGuess().wordToGuess;
    return gameVariables.wordToGuessCharArray = [...word];
}

 