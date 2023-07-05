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
export function setWordToCharArray(){
    console.log(gameVariables.objectToGuess());
    console.log(gameVariables.objectToGuess().wordToGuess);
    let word = gameVariables.objectToGuess().wordToGuess;
    console.log(word);
    let wordArray = [...word]
    console.log(wordArray);
    gameVariables.wordToGuessCharArray = wordArray;
    return wordArray;
   
    
}

 