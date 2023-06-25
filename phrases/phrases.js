//////////////////////////////////////////////
//
// Déclarations liant les variables aux ID's prédéfinies sur la page HTML
// + déclaration d'une liste de phrases prédéfinies
//
//////////////////////////////
let phraseEntre = document.getElementById('phraseEntre')
let phraseSelectionne = document.getElementById('phraseSelectionne')
let msgErreur = document.getElementById('msgErreur')

const LISTE_PHRASES = [
  "Le soleil vient de se lever.",
  "Les chaussettes de l'archiduchesse sont-elles sèchent, archi sèchent ?",
  "Le slogan du magasin Gifi est : Gifi les idées de génie !",
  "Dans la barre de menus Visual Studio, choisissez Outils > Options.",
  "Grâce au clavier que vous utilisez pour écrire cette phrase, vous pouvez écrire un dollar (monnaie américaine) comme ceci : $, ainsi qu'une livre (monnaie anglaise) comme ceci : £.",
  "Comment exprimer que je suis content avec un émoji très simple ? J'écris ceci : \"^^\".",
  "\"càc\" est l'abréviation du terme corps-à-corps.",
  "Mais, que vois-je ? ; une loutre.",
  "Vous pouvez me contacter à cette adresse e-mail : prenom.nom@gmail.com !","Comment dessiner un dollar avec un clavier ? Comme ceci : [_$_]",
  "J'écris un mot entre crochet : [pomme].","J'écris un mot entre accolades : {ordinateur}.","J'écris un mot entre parenthèses : (aéroport).",
  "Oui, l'entièreté de ces phrases ont été écrites à la main, une par une, par quelqu'un qui vous a créé cet exercice afin de vous aider à prendre en main un clavier d'ordinateur ; Et tout cela avec beaucoup d'amour !",
  "Le but de cet exercice n'est pas forcément d'écrire sans faute, mais d'apprendre à utiliser un clavier d'ordinateur ; Mais surtout, de reconnaître ses erreurs. Cela peut paraître difficile, mais vous vous en sortez merveilleusement bien !",
  "Avec les touches [ALT GR] + [à] je peux écrire le caractère spécial arobase : @.",
  "Plus vous aller persévérer, plus ce sera facile. C'est le principe d'une zone de confort. Quand on a peur de l'inconnu, il faut oser sortir, rencontrer des gens différents. Cela vous permettra de vous sentir plus à l'aise avec le temps."
]


//////////////////////////////////////////////
//
// Déclaration d'une phrase aléatoire par un nombre entre 0 et la longueur de la liste de phrases prédéfinies
// Déclaration disant que la phrase sélectionnée aléatoirement qui doit s'afficher dans la page HTML (frontend) est égale à la phrase sélectionnée aléatoirement dans la liste de phrases prédéfinies
// Déclaration disant que la valeur de la phrase sélectionnée aléatoirement est égale à la phrase sélectionnée aléatoirement dans la liste de phrases prédéfinies
//
//////////////////////////////
let phraseAleatoire = Math.floor(Math.random() * LISTE_PHRASES.length)
phraseSelectionne.innerHTML = LISTE_PHRASES[phraseAleatoire]
phraseSelectionne.value = LISTE_PHRASES[phraseAleatoire]



//////////////////////////////////////////////
//
// Lecture d'un événement du formulaire à chaque envoi de donnée (submit), afin de bloquer cet envoi par une fonction d'événement
//
//////////////////////////////
form.addEventListener('submit', function(e) {
  e.preventDefault()
})


//////////////////////////////////////////////
//
// Lire un event du formulaire qui bloque le saut de ligne du textarea quand la touche ENTER est pressée
//
//////////////////////////////
form.addEventListener('keypress', function(e) {
  if (e.code == 'Enter') {
    return e.preventDefault()
  }
})


//////////////////////////////////////////////
//
// Lecture d'un événement du formulaire à chaque touche du clavier levée, utilisant la fonction de vérification de concordance des mots entrés et selectionnés
//
//////////////////////////////
form.addEventListener('keyup', function(e) {
  if (phraseSelectionne.value === phraseEntre.value) {
    msgErreur.innerHTML = 'Correct'
    document.getElementById("msgErreur").style.color = "lightgreen"
  } else {
    msgErreur.innerHTML = 'Incorrect'
    document.getElementById("msgErreur").style.color = "red"
  }

  if (e.code !== 'Enter') {
    return
  }
  
  checkSentence()
})


//////////////////////////////////////////////
//
// Fonction de vérification de concordance des phrases entrés par l'utilisateur et des mots sélectionnés aléatoirement dans une liste de mots prédéfinies
//
//////////////////////////////
function checkSentence() {
  if (phraseSelectionne.value === phraseEntre.value) {
    form.submit()
  }
}


//////////////////////////////////////////////
//
// Focus l'input lorsque la page se recharge, permet d'éviter à l'apprenant de devoir cliquer
//
//////////////////////////////
document.getElementById("phraseEntre").addEventListener("click", () => {
  document.getElementById("phraseEntre").focus()
})
