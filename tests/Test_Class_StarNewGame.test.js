import { afterEach, beforeEach, describe, expect, it, test, vi } from 'vitest';
import {generateIndex, setObjectToGuess, wordToCharArray} from 'src/gameBaseElements.js';
import * as exports from 'src/gameVariables.js';
import { gameVariables } from 'src/gameVariables.js';


const spy = vi.spyOn(Math,'random'); // attention marche pas si fonction à tester ds import normal + import as exports (pour func maison spyOn ne marche qu'avec exports) ->Math.random au lieu de mock le retour de generateIndex
const spy2 = vi.spyOn(gameVariables, 'guessPool');
const spy3 = vi.spyOn(gameVariables, 'objectToGuess');


let mockObjectToGuess = null;

describe('when max guessPoolLength if 2', () => {
    beforeEach(() => {
        spy2.mockClear().mockReturnValue(
            [
                {wordToGuess : "toto", riddle: "riddle", hint: "hint"},
                {wordToGuess: "tutu", riddle: "riddle2", hint: "hint2"}
            ]
        );
    });

    it("index_should_be_in_bounds",() =>{
    const index = generateIndex();
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(2);
    });
});



describe('when genereateIndex returns 0', () => {
    beforeEach(() => {
        spy.mockClear().mockReturnValue(0);
        spy2.mockClear().mockReturnValue(
            [
                {wordToGuess : "toto", riddle: "riddle", hint: "hint"},
                {wordToGuess: "tutu", riddle: "riddle2", hint: "hint2"}
            ]
        );
    });

    it("objectToGuess.wordToGuess_should_be_toto",() =>{
    expect(mockObjectToGuess).toBeNull;
    mockObjectToGuess = setObjectToGuess()
    expect(mockObjectToGuess.wordToGuess).toEqual('toto');
    mockObjectToGuess = null;
    });
});
     
describe('when objectToGuess.wordToGuess is toto', () => {
    beforeEach(() => {
        spy3.mockClear().mockReturnValue(
                {wordToGuess : "toto", riddle: "riddle", hint: "hint"}
        );
    });

    it("objectToGuess.wordToGuess_should_be_splited_into_char_array_of_length_4",() =>{
    let mockWordToChar = wordToCharArray();
    expect(mockWordToChar).toBeInstanceOf(Array);
    expect(mockWordToChar.length).toEqual(4);
    });
});
          
          