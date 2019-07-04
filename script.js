//javascript

// JAVASCRIPT POUR LA PAGE REGLES
function Reg_img1() {
  document.getElementById("image").src="Images/imageregle1.gif";  //ECRIRE ENTRE LES GUILLEMETS LE NOM DU FICHIER image
  document.getElementById("text").innerHTML="<h1>Le déroulement du jeu</h1><p>Le jeu d'échec se joue à deux joueurs qui font évoluer seize pièces chacun, respectivement blanches et noires, sur un échiquier de 64 cases en alternance blanches et noires. Pour parler des adversaires, on dit « les Blancs » et « les Noirs » </br> Au début d’une partie d’échecs, ce sont toujours les blancs qui commencent. Lors d’un tour de jeu, le joueur peut effectuer soit un déplacement, soit une prise soit un coup spécial.</p>";   //ECRIRE ENTRE LES GUILLEMETS LE TEXTE A AFFICHER
}
function Reg_img2() {
  document.getElementById("image").src="Images/imageregle2.gif";  //ECRIRE ENTRE LES GUILLEMETS LE NOM DU FICHIER image
  document.getElementById("text").innerHTML="<h1>Le but du jeu</h1><p>Ces différents déplacements sont proposés aux joueurs pour parvenir à réaliser leur objectif qui est de prendre le roi adverse. Lorsque ce but est atteint, le joueur qui y est parvenu, gagne immédiatement la partie qui prend fin automatiquement.</p>";   //ECRIRE ENTRE LES GUILLEMETS LE TEXTE A AFFICHER
}
function Reg_img3() {
  document.getElementById("image").src="Images/imageregle3.gif";  //ECRIRE ENTRE LES GUILLEMETS LE NOM DU FICHIER image
  document.getElementById("text").innerHTML="<h1>Echec</h1><p>Chaque fois que vous pouvez prendre le roi de votre adversaire à votre prochain coup, vous devez le prévenir en annonçant « échec ». Il doit alors tenter de parer votre échec, lors de son tour de jeu.</p>";   //ECRIRE ENTRE LES GUILLEMETS LE TEXTE A AFFICHER
}
function Reg_img4() {
  document.getElementById("image").src="Images/imageregle4.gif";  //ECRIRE ENTRE LES GUILLEMETS LE NOM DU FICHIER image
  document.getElementById("text").innerHTML="<h1>Echec et mat</h1><p>S’il n’y parvient pas, son roi est alors « échec et mat ». Vous remportez donc la partie.</p>";   //ECRIRE ENTRE LES GUILLEMETS LE TEXTE A AFFICHER
}
function Reg_img5() {
  document.getElementById("image").src="Images/Kasparov-topalov1999.gif";  //ECRIRE ENTRE LES GUILLEMETS LE NOM DU FICHIER image
  document.getElementById("text").innerHTML="<h1>Pat</h1><p>Une partie d’échecs peut également se terminer sur un match nul. Si lors du tour d’un joueur, celui-ci ne peut déplacer aucune de ses pièces et que son roi n’est pas en échec. On dit alors que la partie se termine par un « pat<:br>Ci-contre partie légendaire en 1999 Garry Kasparov (en blanc) contre Veselin Topalov».</p>";   //ECRIRE ENTRE LES GUILLEMETS LE TEXTE A AFFICHER
}

// JAVASCRIPT POUR LA PAGE DEPLACEMENT DES PIECES

function Dep_img1() {
  document.getElementById("image").src="Images/deplacement-pion.jpg";   //ECRIRE ENTRE LES GUILLEMETS LE NOM DU FICHIER image
  document.getElementById("text").innerHTML="Le pion  se déplace en avant sur une case inoccupée en face de lui.</br> A son premier coup, il peut avancer de 2 cases sur la même colonne </br> à condition qu'elle soit inoccupée, puis il avance d'une case.</br> Il ne peut pas prendre la pièce ou le pion qui se trouve face à lui </br> sur la même colonne, mais il prend en diagonale. </br>Il ne recule jamais, et il ne prend pas en arrière.
 ";   //ECRIRE ENTRE LES GUILLEMETS LE TEXTE A AFFICHER
}
function Dep_img2() {
  document.getElementById("image").src="Images/deplacement-cavalier.jpg";   //ECRIRE ENTRE LES GUILLEMETS LE NOM DU FICHIER image
  document.getElementById("text").innerHTML=" Le Cavalier se déplace en faisant un pas de Tour et un pas de Fou en s'éloignant de sa case de départ.</br> Il fait un  L  imaginaire de 3 cases; 2 cases devant, derrière, gauche, droite, puis 1 case de côté;</br> ou 1 case devant, derrière, gauche, droite, puis 2 case de côté.)</br>Il peut se déplacer et prendre en arrière.</br>C'est la seule pièce de l'échiquier, qui peut sauter une autre pièce ou pion.
 ";   //ECRIRE ENTRE LES GUILLEMETS LE TEXTE A AFFICHER
}
function Dep_img3() {
  document.getElementById("image").src="Images/deplacement-Fou.jpg";   //ECRIRE ENTRE LES GUILLEMETS LE NOM DU FICHIER image
  document.getElementById("text").innerHTML="toto";   //ECRIRE ENTRE LES GUILLEMETS LE TEXTE A AFFICHER
}
function Dep_img4() {
  document.getElementById("image").src="Images/deplacement-tour.png";   //ECRIRE ENTRE LES GUILLEMETS LE NOM DU FICHIER image
  document.getElementById("text").innerHTML="toto";   //ECRIRE ENTRE LES GUILLEMETS LE TEXTE A AFFICHER
}
function Dep_img5() {
  document.getElementById("image").src="Images/deplacement-roi.jpg";   //ECRIRE ENTRE LES GUILLEMETS LE NOM DU FICHIER image
  document.getElementById("text").innerHTML="toto";   //ECRIRE ENTRE LES GUILLEMETS LE TEXTE A AFFICHER
}
function Dep_img6() {
  document.getElementById("image").src="Images/deplacement-reine.jpg";   //ECRIRE ENTRE LES GUILLEMETS LE NOM DU FICHIER image
  document.getElementById("text").innerHTML="toto";   //ECRIRE ENTRE LES GUILLEMETS LE TEXTE A AFFICHER
}

