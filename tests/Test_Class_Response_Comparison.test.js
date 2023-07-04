import { afterEach, beforeEach, describe, expect, it, test, vi } from 'vitest';
import {compareInputCharToCharArray, setObjectToGuess, wordToCharArray} from 'src/responseHandler.js';

const mockObjectToGuess = {wordToGuess: "toto", question: "question", clue: "clue"};
const mockWordToGuessCharArray = ["t","o","t","o"];
var mockResponse;

test("input_length_1_should_match_a_char_present_in_objectToGuess.wordToGuess", () => {

});

