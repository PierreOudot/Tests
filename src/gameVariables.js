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
    get guessPool(){
        return this.guessPool;
    },

    /**
    * @returns {object}
    */
    get objectToGuess(){
        return this.objectToGuess;
    },

    /**
    * @returns {string[]}
    */
    get wordToGuessCharArray(){
        return this.wordToGuessCharArray;
    },

    /**
    * @param {object[]} objectArray
    */
    set guessPool(objectArray){
        this.guessPool = objectArray;
    },
    
    /**
    * @param {object} object
    */
    set objectToGuess(object){
        this.objectToGuess = object;
    },

    /**
    * @param {string[]} stringArray
    */
    set wordToGuessCharArray(stringArray){
        this.wordToGuessCharArray.splice(
            0, this.wordToGuessCharArray.length, stringArray);
    },
}


