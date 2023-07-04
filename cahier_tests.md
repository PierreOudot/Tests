# Pendu

## Principe

deviner un mot, à chaque erreur le processus de pendaison avance. Passé n erreurs, le pendu apparait,complet, game over.

##  Cahier de test

### Classe de test 1 :  Mise en place de la partie

nom: Test_Class_StarNewGame

Conditions de mise en place : 
    
    - mocker un array d'objet js contenant le mots à deviner, la question associée et éventuellement un indice du type [{wordToGuess : "toto", question: "question", clue: "clue"},{wordToGuess : "tutu", question: "question2", clue: "clue2"}]
    - initialiser une variable ObjectToGuess destinée à être instanciée avec l'objet à deviner == null

#### test 1
 
nom : index_should_be_in_bounds
id : 1a
Objectif : verfier que l'id généré est compris entre 0 et nombre de mots à deviner-1
Etapes de test : 
    - appel de la fonction generateIndex(mockArray)
    - verifier que 0 <= i < mockArray.length
Résultat attendu : le test passe si 0 <= i < mockArray.length

#### test 2

nom : objectToGuess.wordToGuess_should_be_toto
id : 2a
Objectif : tester la fonction sensée setter l'objet à deviner depuis un array de mots
Etapes de test : 
    - assert objectToGuess == null
    - appel de la fonction  setObjectToGuess(0)
    - verfier que ObjectToGuess.wordToGuess == "toto".
    - restorer objectToGuess à null
Résultat attendu : Si ObjectToTest n'est pas null le test passe'

#### test 3

nom : objectToGuess.wordToGuess_should_be_splited_into_char_array_of_length_4
id : 3a
Objectif : tester la fonction sensée transformer le mot à deviner en tableau de caractères
Etapes de test : 
    - appel de la fonction wordToGuessToCharArray(mocObjectToGuess.wordToGuess)
    - verifier que l'array retourné contient 4 caractères.
Résultat attendu : le test passe si array.length == 4

### Classe de test 2 : comparaison des réponse

nom: Test_Class_Response_Comparison

Conditions de mise en place : 
    -mocker objectToGuess {wordToGuess : "toto", question: "question", clue : "clue"}
    -mocker le tableau de caractères correspondant à wordToGuess ['t','o','t','o']

#### test 1

nom : input_length_1_should_match_a_char_present_in_objectToGuess.wordToGuess
id : 1b
Objectif : tester la fonction sensée comparer le user input aux lettres du mot à deviner
Etapes de test : 
    - verifier que compareInputToCharArray("t") renvoit true.
Résultat attendu : le test passe si compareInputToCharArray renvoit true

#### test 2 

nom : input_length_1_should_not_match_a_char_present_in_objectToGuess.wordToGuess
id : 2b 
Objectif : tester un resultat erroné pour un input d'1 charactère
Etapes de test : 
    - verifier que compareCharInputToCharArray("a") renvoit false.
Résultat attendu : le test passe si compareInputToCharArray renvoit false

#### test 3

nom : input_toto_should_match_wordToGuess
id : 3b
Objectif : tester la fonction de comparaison en cas d'input > 1
Etapes de test : increaseFailCounter
nom : input_tutu_should_not_match_wordToGuess
id : 4b
Objectif : tester la fonction de comparaison en cas d'input > 1
Etapes de test : 
    - verifier que compareWordInputToWordToGuess("tutu") renvoit false.
Résultat attendu : le test passe si compareWordInputToWordToGuess renvoit false

#### test 5

nom : guess_function_should_return_true_with_input_length_0
id : 5b 
Objectif : tester qu'un input '' renvoit true (obtenir un indice)
Etapes de test : 
    - verifier que guess("") renvoit true.
Résultat attendu : le test passe si guess("") renvoit true

### Classe de test 3 : gestion des évènements de jeu

nom: Test_Class_Response_Comparison

Conditions de mise en place : 
    - mocker objectToGuess {wordToGuess : "toto", question: "question", clue : "clue"}
    - mocker le tableau de caractères correspondant à wordToGuess ['t','o','t','o']
    - mocker le tableau des string correspondant au dessin du pendu
    - mocker le compteur d'erreurs failCounter == 0
    - mocker gameOver = false
    - mocker goodGame = false

#### test 1

nom : increaseFailCounter_function_increases_fail_counter
id : 1c
Objectif : verifier que le compteur d'erreur s'incrémente en cas d'erreur
Etapes de test : 
    - assert failCounter == 0
    - appel increaseFailCounter()
    - assert failCounter == 1
    - restore failCounter == 0
Résultat attendu : le test passe si failCounter == 1

#### test 2

nom : setWordToGuessPattern_should_return_['_','_','_','_']
id : 2c
Objectif : verfifier que la fonction setWordToGuessPatern("toto") renvoie un pattern de lettres masquées correspondant au mot à deviner
Etapes de test : 
    - assert setWordToGuessPatern("toto") == ['_','_','_','_']
Résultat attendu : le test passe si setWordToGuessPatern(objectToGuess.wordToGuess) == ['_','_','_','_']

#### test 3

nom : setWordToGuessPattern_should_handle_symbols
id : 3c
Objectif : verifier que la ponctuation n'est pas remplacée par '_'
Etapes de test :
    - - assert setWordToGuessPatern("t'to") == ['_','\'','_','_']
Résultat attendu : le test passe si setWordToGuessPatern("t'to") == ['_','\'','_','_']

#### test 4

nom : setWordToGuessPattern_should_handle_spaces
id : 4c
Objectif : verifier que les espaces ne sont pas remplacés par '_'
Etapes de test :
    - - assert setWordToGuessPatern("t to") == ['_',' ','_','_']
Résultat attendu : le test passe si setWordToGuessPatern("t'to") == ['_',' ','_','_']

#### test 5

nom : mutateWordToGuessPattern_function_should_return_pattern_corrsponding_to_good_answer
id : 5c
Objectif : tester l'évolution de la pattern du mot à deviner en cas de bonne réponse
Etapes de test : 
    - assert pattern == ['_','_','_','_']
    - initialisation d'une variable avec l'appel de mutateWordToGuessPattern('t')
    - assert variable == ['t','_','t','_']
    - restore pattern == ['_','_','_','_']
Résultat attendu : le test passe si variable == ['t','_','t','_']


#### test 6

nom : getHangingState_should_return_appropriate_hanging_state
id : 6c
Objectif : verifier que le dessin de la pendaison corresponde à la valeur de failCounter
Etapes de test : 
    - initialisation d'une variable avec le retour de getHangingState(0)
    - comparer la variable avec ce qui est attendu
Résultat attendu : le test passe si la variable == ce qui est attendu

#### test 7

nom : setGameBoard_should_return_appropriate_game_board
id : 7c
Objectif : tester la concatenation du dessin de la pendaison avec la patterne du mot à deviner
Etapes de test :
    - initialiser une variable avec le retour de setGameBoard(failCounter, input)
    - verifier que la variable == ce qui est attendu
Résultat attendu : le test passe si la variable == ce qui est attendu

### Classe de test 4: gestion de la fin de partie

nom: Test_Class_Response_Comparison

Conditions de mise en place : 

    - mocker variable gameOn = true
    - mocker gameOver = false
    - mocker goodGame = false

nom :
id :
Objectif :
Conditions préalables : 
Etapes de test :
Résultat attendu :

#### test 1

// plusieurs idées pour l'arret de la partie, pourra être supprimé à l'implémentation
nom : isGameOn_should_be_false_if_gameOver_or_goodGame
id : 1d
Objectif : tester qu'une fois les conditions de fin de partie atteinte gameOn = false
Etapes de test :
    - assert gameOn == true
    - isGameOn()
    - assert gameOn == false
    - restore gameOn == true
Résultat attendu : le test passe si gameOn == false

#### test 2

nom : isGameOver_should_be false_if_failCounter_equals_5
id : 2d
Objectif : verifier que 5 erreur entrainent un game over
Etapes de test :
    - assert gameOver == false
    - isGameOver(5)
    - assert gameOver == true
    - restore gameOver == false
Résultat attendu : le test passe si gameOver == true

#### test 3

nom : isGoodGame_should_be true_if_guessedWord_equals_wordToGuess
id : 3d
Objectif : verifier que 5 erreur entrainent un game over
Etapes de test :
    - assert goodGame == false
    - isGoodGame()
    - assert goodGame == true
    - restore goodGame == false
Résultat attendu : le test passe si goodGame == true

#### test 4

nom : setGameBoard_should_return_appropriate_game_board_if_gameOver
id : 4d
Objectif : tester la concatenation du dessin de la pendaison avec la patterne du mot à deviner
Etapes de test :
    - set gameOver == true
    - assert gameOver == true
    - initialiser une variable avec le retour de setGameBoard()
    - assert variable == ce qui est attendu
    - restore gameOver == false
Résultat attendu : le test passe si la variable == ce qui est attendu

#### test 4

nom : setGameBoard_should_return_appropriate_game_board_if_goodGame
id : 4d
Objectif : tester la concatenation du dessin de la pendaison avec la patterne du mot à deviner
Etapes de test :
    - set goodGame == true
    - assert goodGame == true
    - initialiser une variable avec le retour de setGameBoard()
    - assert variable == ce qui est attendu
    - restore goodGame == false
Résultat attendu : le test passe si la variable == ce qui est attendu








                