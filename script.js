

//  .██████╗██╗..██╗██╗███████╗.██████╗.██╗...██╗███╗...███╗██╗
//  ██╔════╝██║..██║██║██╔════╝██╔═══██╗██║...██║████╗.████║██║
//  ██║.....███████║██║█████╗..██║...██║██║...██║██╔████╔██║██║
//  ██║.....██╔══██║██║██╔══╝..██║...██║██║...██║██║╚██╔╝██║██║
//  ╚██████╗██║..██║██║██║.....╚██████╔╝╚██████╔╝██║.╚═╝.██║██║
//  .╚═════╝╚═╝..╚═╝╚═╝╚═╝......╚═════╝..╚═════╝.╚═╝.....╚═╝╚═╝
//  


// Aout 2018 - Bretagne
//


var nbRound = 0,
    scoreCP = 0,
    scorePlayer = 0,
    currentRound = 0,
    body = document.getElementsByTagName('body')[0],
    stringArrayFR = [
      '<span style="color:red">C</span>hi<span style="color:yellow">f</span>o<span style="color:green">u</span>m<span style="color:blue">i</span>',
      "Jouer",
      '<span style="color:orange">C</span>omb<span style="color:red">i</span>en <span style="color:yellow">d</span>e m<span style="color:blue">a</span>nches <span style="color:green">?</span>',
      'Manche <span style="color:orange">',
      'Ordi : <span style="color:red">',
      'Vous : <span style="color:green">',
      "Pierre",
      "Feuille",
      "Ciseaux",
      '<span style="color:green">Victoire</span>',
      '<span style="color:red">Défaite</span>',
      '<span style="color:yellow">Egalité</span>',
      " contre "
    ],
    stringArrayEN = [
      '<span style="color:red">C</span>hi<span style="color:yellow">f</span>o<span style="color:green">u</span>m<span style="color:blue">i</span>',
      "Play",
      '<span style="color:orange">H</span>ow <span style="color:red">m</span>any r<span style="color:yellow">o</span>un<span style="color:blue">d</span>s<span style="color:green">?</span>',
      'Round <span style="color:orange">',
      'Comp : <span style="color:red">',
      'You : <span style="color:green">',
      "Rock",
      "Paper",
      "Cisors",
      '<span style="color:green">Victory</span>',
      '<span style="color:red">Defeat</span>',
      '<span style="color:yellow">Tie</span>',
      " vs "
    ],
    currentStringArray = stringArrayFR,
    lang = "FR";

var menuTitle = document.createElement('div');
menuTitle.innerHTML = window.currentStringArray[0];
menuTitle.className = "title";
body.appendChild(menuTitle);

var playButton = document.createElement('button');
playButton.innerHTML = window.currentStringArray[1];
playButton.className = "playbutton";
playButton.addEventListener('click', function(){
    body.removeChild(body.lastElementChild);
    chifoumi();
});
body.appendChild(playButton);
playButton.focus();

var translation = document.createElement('button');
translation.innerHTML = "EN";
translation.className = "translate";
body.appendChild(translation);

translation.addEventListener('click', translate);

function chifoumi(){
  body.removeChild(body.lastElementChild);
  body.removeChild(body.lastElementChild);

  var mancheQ = document.createElement('div');
  mancheQ.innerHTML = window.currentStringArray[2];
  mancheQ.className = "mancheQ";
  body.appendChild(mancheQ);

  var container = document.createElement('div');
  container.className = "container";
  body.appendChild(container);

  var oneRound = document.createElement('button');
  oneRound.innerHTML = "1";
  oneRound.className = "multipleButton";
  container.appendChild(oneRound);
  oneRound.addEventListener('click', function(){game(1);});

  var threeRound = document.createElement('button');
  threeRound.innerHTML = "3";
  threeRound.className = "multipleButton";
  container.appendChild(threeRound);
  threeRound.addEventListener('click', function(){game(3);});

  var tenRound = document.createElement('button');
  tenRound.innerHTML = "10";
  tenRound.className = "multipleButton";
  container.appendChild(tenRound);
  tenRound.addEventListener('click', function(){game(10);});
}

function game(nbRound){
  window.nbRound = nbRound;
  body.removeChild(body.lastElementChild);
  body.removeChild(body.lastElementChild);
  window.currentRound = 0;
  oneRound(window.currentRound);
}

function oneRound(round){
  if (window.currentRound == window.nbRound) {
    result();
  } else {
    if (round == 0) {
      var roundTitle = document.createElement('div');
      roundTitle.innerHTML = window.currentStringArray[3] + (round + 1) + "</span> :";
      roundTitle.className = "mancheTitle";
      body.appendChild(roundTitle);

      var scoreCP = document.createElement('div');
      scoreCP.innerHTML = window.currentStringArray[4] + window.scoreCP + "</span>";
      scoreCP.className = "score";
      body.appendChild(scoreCP);

      var scorePlayer = document.createElement('div');
      scorePlayer.innerHTML = window.currentStringArray[5] + window.scorePlayer + "</span>";
      scorePlayer.className = "score";
      body.appendChild(scorePlayer);

    } else {
      roundTitle = body.firstElementChild;
      roundTitle.innerHTML = window.currentStringArray[3] + (round + 1) + "</span> :";
      scoreCP = body.firstElementChild.nextElementSibling.nextElementSibling;
      scoreCP.innerHTML = window.currentStringArray[4] + window.scoreCP + "</span>";
      scorePlayer = body.lastElementChild;
      scorePlayer.innerHTML = window.currentStringArray[5] + window.scorePlayer + "</span>";
    }
    var container = document.createElement('div');
    container.className = "container";
    body.appendChild(container);

    var buttonPierre = document.createElement('button');
    buttonPierre.innerHTML = window.currentStringArray[6];
    buttonPierre.className = "multipleButton redHover";
    container.appendChild(buttonPierre);
    buttonPierre.addEventListener('click', function(){fight("P")});

    var buttonFeuille = document.createElement('button');
    buttonFeuille.innerHTML = window.currentStringArray[7];
    buttonFeuille.className = "multipleButton blueHover";
    container.appendChild(buttonFeuille);
    buttonFeuille.addEventListener('click', function(){fight("F")});

    var buttonCiseaux = document.createElement('button');
    buttonCiseaux.innerHTML = window.currentStringArray[8];
    buttonCiseaux.className = "multipleButton greenHover";
    container.appendChild(buttonCiseaux);
    buttonCiseaux.addEventListener('click', function(){fight("C")});
  }
}

function fight(elem){
  body.removeChild(body.lastElementChild);
  res =  Math.floor(Math.random() * Math.floor(3));
  if (!((res == 0 && elem == "P") || (res == 1 && elem == "F") || (res == 2 && elem == "C"))) {
    if (res == 0) {
      if (elem == "F") { window.scorePlayer++; var cpPlay = window.currentStringArray[6], playerPlay = window.currentStringArray[7], resultFight = window.currentStringArray[9];}
      if (elem == "C") { window.scoreCP++; var cpPlay = window.currentStringArray[6], playerPlay = window.currentStringArray[8], resultFight = window.currentStringArray[10];}
    }
    if (res == 1) {
      if (elem == "P") { window.scoreCP++; var cpPlay = window.currentStringArray[7], playerPlay = window.currentStringArray[6], resultFight = window.currentStringArray[10];}
      if (elem == "C") { window.scorePlayer++; var cpPlay = window.currentStringArray[7], playerPlay = window.currentStringArray[8], resultFight = window.currentStringArray[9];}
    }
    if (res == 2) {
      if (elem == "P") { window.scorePlayer++; var cpPlay = window.currentStringArray[8], playerPlay = window.currentStringArray[6], resultFight = window.currentStringArray[9];}
      if (elem == "F") { window.scoreCP++; var cpPlay = window.currentStringArray[8], playerPlay = window.currentStringArray[7], resultFight = window.currentStringArray[10];}
    }
    currentScorePlayer = body.lastElementChild;
    currentScoreCP = body.lastElementChild.previousElementSibling;
    currentScoreCP.innerHTML = window.currentStringArray[4] + window.scoreCP + "</span>";
    currentScorePlayer.innerHTML = window.currentStringArray[5] + window.scorePlayer + "</span>";
  } else {
    if (elem == "P") {  var cpPlay = window.currentStringArray[6], playerPlay = window.currentStringArray[6];}
    if (elem == "F") {  var cpPlay = window.currentStringArray[7], playerPlay = window.currentStringArray[7];}
    if (elem == "C") {  var cpPlay = window.currentStringArray[8], playerPlay = window.currentStringArray[8];}
    var resultFight = window.currentStringArray[11];
  }
  var displayFight = document.createElement('div');
  displayFight.innerHTML = playerPlay + window.currentStringArray[12] + cpPlay + " : " + resultFight;
  displayFight.className = "fight";
  body.appendChild(displayFight);

  var container = document.createElement('div');
  container.className = "container";
  body.appendChild(container);

  var buttonOK = document.createElement('button');
  buttonOK.innerHTML = "Ok";
  buttonOK.className = "okButton";
  container.appendChild(buttonOK);
  buttonOK.focus();

  buttonOK.addEventListener('click', function(){
    window.currentRound++;
    body.removeChild(body.lastElementChild);
    body.removeChild(body.lastElementChild);
    oneRound(window.currentRound);
  });
}

function result(){
  for (var i = 0; i < 3; i++) {
    body.removeChild(body.lastElementChild);
  }

  var resultTitle = document.createElement('div');
  resultTitle.className = "resultTitle";
  if (window.scoreCP == window.scorePlayer){
    resultTitle.innerHTML = window.currentStringArray[11];
  } else if (window.scoreCP < window.scorePlayer){
    resultTitle.innerHTML = window.currentStringArray[9];
  } else if (window.scoreCP > window.scorePlayer){
    resultTitle.innerHTML = window.currentStringArray[10];
  }
  body.appendChild(resultTitle);

  var container = document.createElement('div');
  container.className = "container";
  body.appendChild(container);

  var buttonOK = document.createElement('button');
  buttonOK.innerHTML = "Ok";
  buttonOK.className = "okButton";
  container.appendChild(buttonOK);
  buttonOK.focus();

  buttonOK.addEventListener('click', function(){
    window.nbRound = 0;
    window.scoreCP = 0;
    window.scorePlayer = 0;
    window.currentRound = 0;
    chifoumi();
  });
}

function translate(){
  if (window.lang == "FR"){
    currentStringArray = stringArrayEN;
    window.lang = "EN";
    body.lastElementChild.previousElementSibling.innerHTML = window.currentStringArray[1];
    body.getElementsByClassName('translate')[0].innerHTML = "FR";
  } else {
    currentStringArray = stringArrayFR;
    window.lang = "FR";
    body.lastElementChild.previousElementSibling.innerHTML = window.currentStringArray[1];
    body.getElementsByClassName('translate')[0].innerHTML = "EN";
  }
}
