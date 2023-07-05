import {gameVariables} from 'src/gameVariables.js';

/**
 * 
 * @returns {int}
 */
export function generateIndex() {
    let arrayLength = gameVariables.guessPool().length;
    return Math.floor(Math.random()*arrayLength);
}

/**
* @returns {object}
*/
export function setObjectToGuess(){
    let index = generateIndex();
    return gameVariables.guessPool()[index];
}

/**
 * @param {string} wordToGuess
 * @returns {Array}
 */
export function wordToCharArray(){
    let word = gameVariables.objectToGuess().wordToGuess;
    let wordArray = [...word]
    
    return wordArray;
   
    
}

 