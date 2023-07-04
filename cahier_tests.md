# Pendu

## Principe

deviner un mot, à chaque erreur le processus de pendaison avance. Passé un n erreurs, le pendu apparait, game over.

##  Cahier de test

nom :
id :
Objectif :
Conditions préalables : 
Etapes de test :
Résultat attendu :



### Classe de test 1 :  Mise en place de la partie

nom: Test_Class_StarNewGame

Conditions de mise en place : 
    
    - mocker un array d'objet js contenant le mots à deviner, la question associée et éventuellement un indice du type [{wordToGuess : "toto", question: "question", clue: "clue"},...]
    - initialiser une variable ObjectToGuess destinée à être instanciée avec l'objet contenu dans le map
    - mocker un index i

#### test 1
 
nom : index_should_be_in_bounds
id : 1a
Objectif : verfier que l'id généré est compris entre 0 et nombre de mots à deviner-1
Etapes de test : - appel de la fonction generateIndex(mockArray)
                - verifier que 0 <= i < mockArray.length
Résultat attendu : le test passe si 0 <= i < mockArray.length

#### test 2

nom : objectToGuess.wordToGuess_should_be_toto
id : 2a
Objectif : tester la fonction sensée setter l'objet à deviner depuis un array de mots
Etapes de test :- appel de la fonction  setObjectToGuess()
                - verfier que ObjectToGuess.wordToGuess == "toto".
Résultat attendu : Si ObjectToTest n'est pas null le test passe'

#### test 3

nom : objectToGuess.wordToGuess_should_be_splited_into_char_array_of_length_4
id : 3a
Objectif : tester la fonction sensée transformer le mot à deviner en tableau de caractères
Etapes de test : - appel de la fonction wordToGuessToCharArray(mocObjectToGuess.wordToGuess)
                - verifier que l'array retourné contient 4 caractères.
Résultat attendu : le test passe si array.length == 4

### Classe de test 2 : comparaison des réponse

nom: Test_Class_Response_Comparison

Conditions de mise en place : 
    -mocker objectToGuess {wordToGuess : "toto", question: "question", clue : "clue"}
    -mocker le tableau de caractère correspondant à wordToGuess ['t','o','t','o']

#### test 1

nom : input_length_1_should_match_a_char_present_in_objectToGuess.wordToGuess
id : 1b
Objectif : tester la fonction sensée comparer le user input aux lettres du mot à deviner
Etapes de test : - verifier que compareInputToCharArray("t") renvoit true.
Résultat attendu : le test passe si compareInputToCharArray renvoit true

#### test 2 

nom : input_length_1_should_not_match_a_char_present_in_objectToGuess.wordToGuess
id : 2b 
Objectif : tester un resultat erroné pour un input d'1 charactère
Etapes de test : - verifier que compareCharInputToCharArray("a") renvoit false.
Résultat attendu : le test passe si compareInputToCharArray renvoit false

#### test 3

nom : input_toto_should_match_wordToGuess
id : 3b
Objectif : tester la fonction de comparaison en cas d'input > 1
Etapes de test : - verifier que compareWordInputToWordToGuess("toto") renvoit true.
Résultat attendu : le test passe si compareWordInputToWordToGuess renvoit true

#### test 4

nom : input_toto_should_match_wordToGuess
id : 4b
Objectif : tester la fonction de comparaison en cas d'input > 1
Etapes de test : - verifier que compareWordInputToWordToGuess("tutu") renvoit false.
Résultat attendu : le test passe si compareWordInputToWordToGuess renvoit false







                