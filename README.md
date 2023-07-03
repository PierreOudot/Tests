# Tests

## Découverte des tests

### Selon-vous, qu’est-ce un test ?

:::info
Un test correspondent à un bloc de code permettant de verifier qu'une méthode, ou un fonctionnalité, à bien le comportement attendu.
:::

### À quoi servent les tests ?

:::info
Les test permettent de verifier le fonctionnement de méthode, de fonctionnalité...et de veiller que l'existant rempli toujours sont rôle lors de l'ajout de nouvelle fonctionnalités, évolution du langage...
:::

###  a-t-il plusieurs types de tests ? Si oui, quelle est leur différence ?

:::info
Test unitaire: permet de verifier le fonctionnement d'une méthode, indépendamant de sont contexte d'exécution.

Test d'intégration: permet de verifier une fonctionnalité, l'éxecution d'un ensemble de méthode (scénario d'éxécution). 

Test systeme: tester que toutes les fonctionnalités fonctionnent ensemble, que l'éxuction du programme est normal (niveau de test, correspond aux spécifications)

Test de sécurité: 

Test  d'acceptation: client (correspond au besoin)
Tests fonctionnels : font partie des tests d'acceptation. Vérifient que le produit fournit précisement ce qui est attendu, que tous les usecases sont couvert (ne pas attendre les Ta pour implémenter-> verifier tôt).

AB testing: test de deux versions du code
:::


### Intuitivement, à quelles bonnes pratiques de conception de tests, vous pouvez penser ?

:::info
- les tests doivent bien se baser sur le produit de l'éxecution d'une méthode/ fonctionnalité (on ne mock pas le résultat).
- tests doivent être simple -> 1 test = 1 use case.  
- Mettre en place conjointement une assertion de fonctionnement (que le code produit ce qui est attendu) et un cas d'échec (le code ne produit pas ce qui est attendu).
- automatiser, tests == rapide, de préférence sur le poste de dev.
- nommage précis
- stable dans le temps
- éxécution indépendante
:::

### À l’inverse, et toujours sans vous aider d’internet, qu’est-ce qui pourrait être une mauvaise pratique de conception de test ?

:::info
- utiliser des try catch,
- reposer sur services externes
- 

:::

## Les différents type de test ISO-25010

:::info
iso 25010 == modèl qualité, sur 5 points (== caractéristiques) + normes qualité produit sur 8 points ()
:::

### TDD (Test Driven Development)

Méthode de développement -> on commence par écrire les test avant le code pour une méthode / feature  donnée.

Schéma du "red-green-refactor": 
- on écrit le test et on verifie qu'il plante: le code correspondant n'éxiste pas, si le test passe c'est qu'il est mal écrit et donc pas fiable.
- on écrit le code correspondant,seulement ce qui est nécessaire (1 seule assertion à la fois), jusqu'à ce que le test passe.
- une fois que le test passe ("vert"): on peut réfactorer le code correspondant.

