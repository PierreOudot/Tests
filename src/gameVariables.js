export const gameVariables = {
    guessPool : [],

    objectToGuess : {
        wordToGuess : "",
        riddle: "",
        hint: "",
    },

    wordToGuessCharArray : [],

    /**
    * @returns {object[]}
    */
    getGuessPool(){
        return this.guessPool;
    },

    /**
    * @returns {object}
    */
    getObjectToGuess(){
        return this.objectToGuess;
    },
}


