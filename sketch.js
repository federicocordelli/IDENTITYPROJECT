//BRAND IDENTITY PROJECT - FEDERICO CORDELLI - POLIMI - 2022/23
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//BRANDED ELEMENTS
//fonts
let SuisseIntl;
let SuisseWorks;
let SuisseIntlMono;

//Brand color variables
let brandBlack = "#140F0F"
let brandWhite = "#F5F0E6"
let brandBlue = "#0000FF"
let brandMint = "#96F0B4"
let brandLila = "#7D8CFF"

//logos
let logoReductedMint;
let logoReductedLila;
let logoCompleteMint;
let logoCompleteLila;



//------------------------------------------------------------------------------
//investigated values
let awareness = 0;
let activity = 0;
let coherence = 0;
let selfproduction = 0;

//Final colors variables
//awareness color
let r1;
let g1;
let b1;

//activity color
let r2;
let g2;
let b2;

//coherence color
let r3;
let g3;
let b3;

//selfproduction color
let r4;
let g4;
let b4;

//slider HSB
let slider;

//radio color cromoavatar
// let radio;

//sphere
let obj;
let objSaved;
let sphereRadiusx2;

//------------------------------------------------------------------------------
//buttons
//------------------------------------------------------------------------------
//download cromo avatar button
var screenButton;

// start button
var startButton;

// next button
var nextButton;

//button colors variables
let buttonColor;
let buttonStrokeColor;
let buttonTextColor;

// legenda link variables
let legendaAW;
let legendaColor = "#140F0F";
let legendaText = " ";

// about link variables
let about;
let aboutColor = "#140F0F";
let aboutText = " ";

//------------------------------------------------------------------------------
//utilities---------------------------------------------------------------------
//------------------------------------------------------------------------------

//avanzamento
//------------------------------------------------------------------------------
//avanzamento pagine
let pageNumber = 0;

//avanzamento domande-----------------------------------------------------------
// avanzamento domande
let nxtNumber = 0;
//domande
let quest = " ";

//------------------------------------------------------------------------------
// scroll
let scroll = 0;
let scroll2 = 0;


// ANIMAZIONI
// animazioni pageNumber 1 - entrata domande quesitonario-----------------------
// aw animations values
let startAwWidth1of1 = 0;
let awWidth1of1 = -2000;

let startAwWidth2of1 = 0;
let awWidth2of1 = -2000;

let startAwWidth3of1 = 0;
let awWidth3of1 = -2000;

// at animations values
let startAtHeight1of1 = 0;
let atHeight1of1 = -2000;

let startAtHeight2of1 = 0;
let atHeight2of1 = -2000;

let startAtHeight3of1 = 0;
let atHeight3of1 = -2000;

// co animations values
let startCoWidth1of1 = 0;
let coWidth1of1 = 2700;

let startCoWidth2of1 = 0;
let coWidth2of1 = 2700;

let startCoWidth3of1 = 0;
let coWidth3of1 = 2700;

// sp animations values
let startSpHeight1of1 = 0;
let spHeight1of1 = 2000;

let startSpHeight2of1 = 0;
let spHeight2of1 = 2000;

let startSpHeight3of1 = 0;
let spHeight3of1 = 2000;

// -----------------------------------------------------------------------------
// animazione pageNumber0 - caricamento home
let loadingHome = 0;
let startLoadingHome = 0;

// -----------------------------------------------------------------------------
// animazione pageNumber0 - scroll glitch
let scrollText = 0;
let startScrollText = 0;

// -----------------------------------------------------------------------------
// animazione pageNumber4 - caricamento profilazione
let loadingProfiling = 0;
let startLoadingProfiling = 0;


// -----------------------------------------------------------------------------
// colori risposte--------------------------------------------------------------
// colore risposta 1
let ansColor1 = "#F5F0E6";
// colore risposta 2
let ansColor2 = "#96F0B4";
// colore risposta 3
let ansColor3 = "#140F0F";
// colore risposta 4
let ansColor4 = "#96F0B4";
// colore risposta 5
let ansColor5 = "#F5F0E6";

// risposta selezionata 1
let selectedStroke1 = 0;
// risposta selezionata 2
let selectedStroke2 = 0;
// risposta selezionata 3
let selectedStroke3 = 0;
// risposta selezionata 4
let selectedStroke4 = 0;
// risposta selezionata 5
let selectedStroke5 = 0;

// blocco risposta selezionata
let answerBlock = 0;

//------------------------------------------------------------------------------
//mappa

let map;



function preload() {
//preload fonts
SuisseIntl = loadFont('addons/SuisseIntl-Book.otf');
SuisseWorks = loadFont('addons/SuisseWorks-Medium.otf');
SuisseIntlMono = loadFont('addons/SuisseIntlMono-Regular.otf');

//preload logos
logoReductedMint = loadImage('addons/IP_logoridotto_mint.png');
logoReductedLila= loadImage('addons/IP_logoridotto_lilla.png');
logoCompleteMint= loadImage('addons/IP_logocompleto_mint.png');
logoCompleteLila= loadImage('addons/IP_logocompleto_lilla.png');

//preloaded map
map = loadImage('addons/01.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //noSmooth();
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// PAGE NUMBER 0 - QUESTIONARIO
//------------------------------------------------------------------------------
  //buttons
//------------------------------------------------------------------------------
  //next button
startButton = createButton('START');
startButton.addClass("nextButton");
startButton.mouseClicked(startQuestion);


// PAGE NUMBER 1 - QUESTIONARIO
//------------------------------------------------------------------------------
  //buttons
//------------------------------------------------------------------------------
  //next button
nextButton = createButton('NEXT');
nextButton.addClass("nextButton");
nextButton.mouseClicked(nextQuestion);




//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// PAGE NUMBER 5 - PROFILAZIONE
//------------------------------------------------------------------------------
  //buttons
//------------------------------------------------------------------------------
  //download cromo avatar button
screenButton = createButton('DOWNLOAD CROMO AVATAR');
screenButton.addClass("screenButton");
screenButton.mouseClicked(downloadCromoAvatar);

//slider HSB
slider = createSlider(-180,180,0);
slider.addClass("slider");
slider.mouseClicked(objRedraw);

// //radio cromoavatar
// push();
// radio = createRadio();
// radio.option(9.88);
// radio.option(70);
// textAlign(CENTER);
//  fill(255, 0, 0);
//  pop();

//sphere container
obj = createGraphics(400,400,WEBGL);

//------------------------------------------------------------------------------
// legenda
// legenda AW
legendaAW = createP("AW");
legendaAW.addClass("legenda");
legendaAW.mouseOver(changeLegendaColorAW);
legendaAW.mouseOut(changeLegendaColorBisAW);

// legenda AT
legendaAT = createP("AT");
legendaAT.addClass("legenda");
legendaAT.mouseOver(changeLegendaColorAT);
legendaAT.mouseOut(changeLegendaColorBisAT);

// legenda CO
legendaCO = createP("CO");
legendaCO.addClass("legenda");
legendaCO.mouseOver(changeLegendaColorCO);
legendaCO.mouseOut(changeLegendaColorBisCO);

// legenda SP
legendaSP = createP("SP");
legendaSP.addClass("legenda");
legendaSP.mouseOver(changeLegendaColorSP);
legendaSP.mouseOut(changeLegendaColorBisSP);

// about
about = createP("ABOUT");
about.addClass("about");
about.mouseOver(changeAboutColor);
about.mouseOut(changeAboutColorBis);

}

function draw() {
  background(brandBlack);



if (pageNumber === 0){
  //LAYOUT
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------

  //box
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  //box rect
  push();
  fill(brandBlue);
  stroke(brandBlack);
  strokeWeight(10);
  rect((-width/2),(-height/2),width,(height/5));
  pop();

// animazione caricamento dati
if(loadingHome < width) {
  startLoadingHome = 1;
  if (startLoadingHome === 1){
    loadingHome = loadingHome + 5;

    push();
    fill(brandBlack);
    noStroke();
    rect((-width/2),(-height/2),width,height);
    pop();

    push();
    fill(brandBlue);
    stroke(brandBlack);
    strokeWeight(10);
    rect((-width/2),(-height/2),loadingHome,(height/5));
    pop();

    push();
    fill(brandBlue);
    noStroke();
    rect((-width/2),(-height/2),loadingHome,height);
    pop();

    push();
    rotateY(millis() / 1000);
    stroke(brandWhite);
    noFill();
    sphere(windowHeight/8);
    pop();

    //box text
    push();
    textAlign(CENTER,CENTER);
    fill(brandWhite);
    noStroke();
    textFont(SuisseIntl);
    textSize(35);
    text("[LOADING HOME]",0,(-height/5)*2);
    pop();

  }
} else if (loadingHome >= width){
  push();
  noStroke();
  fill(brandBlue);
  rect(-width/2,-height/2,width,height);
  pop();

  push();
  rotateY(millis() / 1000);
  stroke(brandWhite);
  noFill();
  sphere(windowHeight/8);
  pop();

  //box logo
  push();
  imageMode(CENTER);
  image(logoReductedMint,(width/16)*7,(-height/5)*2,height/9,height/9);
  pop();

  //scroll text glitch
if(startScrollText===0){

if (scrollText<=255){
scrollText=scrollText+5;

}else if(scrollText>255){
  startScrollText=1;
}
} else if(startScrollText===1){
    scrollText = scrollText-5;
    if (scrollText===0){
    startScrollText=0;
  }
}

push();
noStroke();
fill(149,239,179,scrollText);
textAlign(CENTER,CENTER);
textFont(SuisseIntlMono);
textSize(30);
text("SCROLL",0,(-height/5));
pop();
  //----------------------------------------------------------------------------
  //start button position
startButton.position((width/2)-260, (height/5)*3.7);

// About
about.position(20,(height/2)+15);

push();
fill(aboutColor);
textAlign(LEFT,TOP);
textFont(SuisseIntl);
textSize(16);
text(aboutText,(-width/2)+15,(height/2)-155);
pop();

push();
noStroke();
fill(brandMint);
rect(-width/2,(height/2)-30,(width*scroll)/(10*height),30);
pop();

 if(scroll<0){
   //box text
   push();
   textAlign(CENTER,CENTER);
   fill(brandWhite);
   noStroke();
   textFont(SuisseIntl);
   textSize(35);
   text("BENVENUTO NELL'IDENTITY PROJECT! :)",0,(-height/5)*2);
   pop();

   scroll===1;
 }else if (scroll >= 0 && scroll <=height) {
   //box text
   push();
   textAlign(CENTER,CENTER);
   fill(brandWhite);
   noStroke();
   textFont(SuisseIntl);
   textSize(35);
   text("BENVENUTO NELL'IDENTITY PROJECT! :)",0,(-height/5)*2);
   pop();
 } else if(scroll > height && scroll <= 2*height) {
   //box text
   push();
   textAlign(CENTER,CENTER);
   fill(brandWhite);
   noStroke();
   textFont(SuisseIntl);
   textSize(35);
   text("L'IDENTITY PROJECT È UN'ESPERIENZA DIGITALE, \nUN QUESTIONARIO IN CUI IL TEMA SEI TU!",0,(-height/5)*2);
   pop();
 } else if(scroll > 2*height && scroll <= 3*height) {
   //box text
   push();
   textAlign(CENTER,CENTER);
   fill(brandWhite);
   noStroke();
   textFont(SuisseIntl);
   textSize(35);
   text("DOVRAI RISPONDERE A 12 DOMANDE, CHE PROFILERANNO \nLA TUA CAPACITÀ DI FARE PERSONAL BRANDING",0,(-height/5)*2);
   pop();
 } else if(scroll > 3*height && scroll <= 4*height) {
   //box text
   push();
   textAlign(CENTER,CENTER);
   fill(brandWhite);
   noStroke();
   textFont(SuisseIntl);
   textSize(35);
   text("LA TUA ABILITÀ NEL RACCONTARTI VERRÀ VALUTATA \nIN BASE A 4 DIFFERENTI PARAMETRI:",0,(-height/5)*2);
   pop();
 } else if(scroll > 4*height && scroll <= 5*height) {
   //box text
   push();
   textAlign(CENTER,CENTER);
   fill(brandWhite);
   noStroke();
   textFont(SuisseIntl);
   textSize(35);
   text("CONSAPEVOLEZZA (AW), COERENZA (CO), \nATTIVITÀ (AT) E ORIGINALITÀ (SP)",0,(-height/5)*2);
   pop();
 } else if(scroll > 5*height && scroll <= 6*height) {
   //box text
   push();
   textAlign(CENTER,CENTER);
   fill(brandWhite);
   noStroke();
   textFont(SuisseIntl);
   textSize(35);
   text("A FINE DELL'ESPERIENZA LE TUE RISPOSTE \nDARANNO VITA AL TUO CROMOAVATAR",0,(-height/5)*2);
   pop();
 } else if(scroll > 6*height && scroll <= 7*height) {
   //box text
   push();
   textAlign(CENTER,CENTER);
   fill(brandWhite);
   noStroke();
   textFont(SuisseIntl);
   textSize(35);
   text("OVVERO UNA SFERA FORMATA DA QUATTRO COLORI \nLA CUI INTENSITÀ RAPPRESENTA IL VALORE DELLE TUE RISPOSTE",0,(-height/5)*2);
   pop();
 } else if(scroll > 7*height && scroll <= 8*height) {
   //box text
   push();
   textAlign(CENTER,CENTER);
   fill(brandWhite);
   noStroke();
   textFont(SuisseIntl);
   textSize(35);
   text("PUOI SCARICARTI IL TUO CROMOAVATAR, \nE PUOI UTILIZZARLO COME PERSONALISSIMA IMMAGINE DI PROFILO!",0,(-height/5)*2);
   pop();
 } else if(scroll > 8*height && scroll <= 9*height) {
   //box text
   push();
   textAlign(CENTER,CENTER);
   fill(brandWhite);
   noStroke();
   textFont(SuisseIntl);
   textSize(35);
   text("INOLTRE PUOI CONFRONTARE IL TUO CROMOAVATAR \nCON QUELLO DEGLI ALTRI UTENTI",0,(-height/5)*2);
   pop();
 } else if(scroll > 9*height) {
   //box text
   push();
   textAlign(CENTER,CENTER);
   fill(brandWhite);
   noStroke();
   textFont(SuisseIntl);
   textSize(35);
   text("COSA ASPETTI? CLICCA START E SCOPRI \nQUANTO SEI DESIGNER DI TE STESSO/A!",0,(-height/5)*2);
   pop();
 }

}

} else if (pageNumber === 1) {

  //----------------------------------------------------------------------------
startButton.hide();
about.hide();

  //----------------------------------------------------------------------------
  //next button position
nextButton.position((width/2)-240, (height/5)*3.7);

//------------------------------------------------------------------------------
// awareness domanda 1----------------------------------------------------------
//------------------------------------------------------------------------------
  if (nxtNumber === 0) {
 //---------------------------------AW "PAGE"-----------------------------------
 //-----------------------------------------------------------------------------
 //-----------------------------------------------------------------------------
 //-----------------------------------------------------------------------------
    quest = "QUANTO STAI ATTENTO/A ALL'IMMAGINE CHE DAI SUI SOCIAL?";


// inizio animazione entrata
if (awWidth1of1<(width/5)*1.5) {
  //aw1of1 rect
  startAwWidth1of1 = 1;
  if(startAwWidth1of1===1) {
    awWidth1of1 = awWidth1of1 + 35;

  push();
  fill(ansColor5);
  noStroke();
  // strokeWeight(10);
  rect(awWidth1of1,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor4);
  noStroke();
  // strokeWeight(10);
  rect(awWidth1of1-width/5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor3);
  noStroke();
  // strokeWeight(10);
  rect(awWidth1of1-(width/5)*2,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  noStroke();
  // strokeWeight(10);
  rect(awWidth1of1-(width/5)*3,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor1);
  noStroke();
  // strokeWeight(10);
  rect(awWidth1of1-(width/5)*4,(-height/5)*1.5,width/5,(height/5)*4);
  pop();
  }
// fine animazione entrata
} else if(awWidth1of1 = (width/5)*1.5) {
  push();
  fill(ansColor5);
  stroke(brandBlue);
  strokeWeight(selectedStroke5);
  rect((width/5)*1.5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor4);
  stroke(brandBlue);
  strokeWeight(selectedStroke4);
  rect((width/5)*0.5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor3);
  stroke(brandBlue);
  strokeWeight(selectedStroke3);
  rect((width/5)*(-0.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  stroke(brandBlue);
  strokeWeight(selectedStroke2);
  rect((width/5)*(-1.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor1);
  stroke(brandBlue);
  strokeWeight(selectedStroke1);
  rect((width/5)*(-2.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

// valori risposte
  push();
  textAlign(CENTER,CENTER);
  fill(brandBlack);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("1",(-width/5)*2,0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlue);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("2",(-width/5),0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandWhite);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("3",0,0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlack);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("4",(width/5),0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlue);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("5",(width/5)*2,0);
  pop();

// cambio colore in hover
  if (mouseX >= (width/5)*4 && mouseY > height/5) {
ansColor5 = brandLila;
ansColor4 = brandMint;
ansColor3 = brandBlack;
ansColor2 = brandMint;
ansColor1 = brandWhite;

}else if (mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandLila;
  ansColor3 = brandBlack;
  ansColor2 = brandMint;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandLila;
  ansColor2 = brandMint;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandBlack;
  ansColor2 = brandLila;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandBlack;
  ansColor2 = brandMint;
  ansColor1 = brandLila;
}

}

//------------------------------------------------------------------------------
// awareness domanda 2----------------------------------------------------------
//------------------------------------------------------------------------------

} else if(nxtNumber === 1) {

quest = "QUANTO TI RITIENI CAPACE DI RAPPRESENTARTI SUI SOCIAL?";


// inizio animazione entrata
if (awWidth2of1<(width/5)*1.5) {
  //aw1of1 rect
  startAwWidth2of1 = 1;
  if(startAwWidth2of1===1) {
    awWidth2of1 = awWidth2of1 + 35;

  push();
  fill(ansColor5);
  noStroke();
  // strokeWeight(10);
  rect(awWidth2of1,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor4);
  noStroke();
  // strokeWeight(10);
  rect(awWidth2of1-width/5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor3);
  noStroke();
  // strokeWeight(10);
  rect(awWidth2of1-(width/5)*2,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  noStroke();
  // strokeWeight(10);
  rect(awWidth2of1-(width/5)*3,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor1);
  noStroke();
  // strokeWeight(10);
  rect(awWidth2of1-(width/5)*4,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

// ---------------vecchi rettangoli-------------------
  push();
  fill(ansColor5);
  stroke(brandBlue);
  strokeWeight(selectedStroke5);
  rect(((width/5)*1.5)+awWidth2of1+2000,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor4);
  stroke(brandBlue);
  strokeWeight(selectedStroke4);
  rect(((width/5)*0.5)+awWidth2of1+2000,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor3);
  stroke(brandBlue);
  strokeWeight(selectedStroke3);
  rect(((width/5)*(-0.5))+awWidth2of1+2000,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  stroke(brandBlue);
  strokeWeight(selectedStroke2);
  rect(((width/5)*(-1.5))+awWidth2of1+2000,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor1);
  stroke(brandBlue);
  strokeWeight(selectedStroke1);
  rect(((width/5)*(-2.5))+awWidth2of1+2000,(-height/5)*1.5,width/5,(height/5)*4);
  pop();
  }
// fine animazione entrata
} else if(awWidth1of1 = (width/5)*1.5) {
  push();
  fill(ansColor5);
  stroke(brandBlue);
  strokeWeight(selectedStroke5);
  rect((width/5)*1.5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor4);
  stroke(brandBlue);
  strokeWeight(selectedStroke4);
  rect((width/5)*0.5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor3);
  stroke(brandBlue);
  strokeWeight(selectedStroke3);
  rect((width/5)*(-0.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  stroke(brandBlue);
  strokeWeight(selectedStroke2);
  rect((width/5)*(-1.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor1);
  stroke(brandBlue);
  strokeWeight(selectedStroke1);
  rect((width/5)*(-2.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

// valori risposte
  push();
  textAlign(CENTER,CENTER);
  fill(brandBlack);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("1",(-width/5)*2,0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlue);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("2",(-width/5),0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandWhite);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("3",0,0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlack);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("4",(width/5),0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlue);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("5",(width/5)*2,0);
  pop();

// cambio colore in hover
  if (mouseX >= (width/5)*4 && mouseY > height/5) {
ansColor5 = brandLila;
ansColor4 = brandMint;
ansColor3 = brandBlack;
ansColor2 = brandMint;
ansColor1 = brandWhite;

}else if (mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandLila;
  ansColor3 = brandBlack;
  ansColor2 = brandMint;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandLila;
  ansColor2 = brandMint;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandBlack;
  ansColor2 = brandLila;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandBlack;
  ansColor2 = brandMint;
  ansColor1 = brandLila;
}

}
//------------------------------------------------------------------------------
// awareness domanda 3----------------------------------------------------------
//------------------------------------------------------------------------------
} else if(nxtNumber === 2) {

quest = "QUANTO SEI SODDISFATTO/A DELL'IMMAGINE CHE DAI DI TE SUI SOCIAL?";


// inizio animazione entrata
if (awWidth3of1<(width/5)*1.5) {
  //aw1of1 rect
  startAwWidth3of1 = 1;
  if(startAwWidth3of1===1) {
    awWidth3of1 = awWidth3of1 + 35;

  push();
  fill(ansColor5);
  noStroke();
  // strokeWeight(10);
  rect(awWidth3of1,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor4);
  noStroke();
  // strokeWeight(10);
  rect(awWidth3of1-width/5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor3);
  noStroke();
  // strokeWeight(10);
  rect(awWidth3of1-(width/5)*2,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  noStroke();
  // strokeWeight(10);
  rect(awWidth3of1-(width/5)*3,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor1);
  noStroke();
  // strokeWeight(10);
  rect(awWidth3of1-(width/5)*4,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

// ---------------vecchi rettangoli-------------------
  push();
  fill(ansColor5);
  stroke(brandBlue);
  strokeWeight(selectedStroke5);
  rect(((width/5)*1.5)+awWidth3of1+2000,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor4);
  stroke(brandBlue);
  strokeWeight(selectedStroke4);
  rect(((width/5)*0.5)+awWidth3of1+2000,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor3);
  stroke(brandBlue);
  strokeWeight(selectedStroke3);
  rect(((width/5)*(-0.5))+awWidth3of1+2000,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  stroke(brandBlue);
  strokeWeight(selectedStroke2);
  rect(((width/5)*(-1.5))+awWidth3of1+2000,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor1);
  stroke(brandBlue);
  strokeWeight(selectedStroke1);
  rect(((width/5)*(-2.5))+awWidth3of1+2000,(-height/5)*1.5,width/5,(height/5)*4);
  pop();
  }
// fine animazione entrata
} else if(awWidth3of1 = (width/5)*1.5) {
  push();
  fill(ansColor5);
  stroke(brandBlue);
  strokeWeight(selectedStroke5);
  rect((width/5)*1.5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor4);
  stroke(brandBlue);
  strokeWeight(selectedStroke4);
  rect((width/5)*0.5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor3);
  stroke(brandBlue);
  strokeWeight(selectedStroke3);
  rect((width/5)*(-0.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  stroke(brandBlue);
  strokeWeight(selectedStroke2);
  rect((width/5)*(-1.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor1);
  stroke(brandBlue);
  strokeWeight(selectedStroke1);
  rect((width/5)*(-2.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

// valori risposte
  push();
  textAlign(CENTER,CENTER);
  fill(brandBlack);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("1",(-width/5)*2,0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlue);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("2",(-width/5),0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandWhite);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("3",0,0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlack);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("4",(width/5),0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlue);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("5",(width/5)*2,0);
  pop();

// cambio colore in hover
  if (mouseX >= (width/5)*4 && mouseY > height/5) {
ansColor5 = brandLila;
ansColor4 = brandMint;
ansColor3 = brandBlack;
ansColor2 = brandMint;
ansColor1 = brandWhite;

}else if (mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandLila;
  ansColor3 = brandBlack;
  ansColor2 = brandMint;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandLila;
  ansColor2 = brandMint;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandBlack;
  ansColor2 = brandLila;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandBlack;
  ansColor2 = brandMint;
  ansColor1 = brandLila;
}

}

} else if (nxtNumber === 3) {
//---------------------------------AT "PAGE"-----------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
quest = "CON CHE FREQUENZA PUBBLICHI SUI SOCIAL?";

// inizio animazione entrata
if (atHeight1of1<((-height/5)*1.5)) {
  //at1of1 rect
  startAtHeight1of1 = 1;
  if(startAtHeight1of1===1) {
    atHeight1of1 = atHeight1of1 + 25;

// vecchi rettangoli
    push();
    fill(ansColor5);
    stroke(brandBlue);
    strokeWeight(selectedStroke5);
    rect(((width/5)*1.5),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor4);
    stroke(brandBlue);
    strokeWeight(selectedStroke4);
    rect(((width/5)*0.5),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor3);
    stroke(brandBlue);
    strokeWeight(selectedStroke3);
    rect(((width/5)*(-0.5)),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor2);
    stroke(brandBlue);
    strokeWeight(selectedStroke2);
    rect(((width/5)*(-1.5)),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor1);
    stroke(brandBlue);
    strokeWeight(selectedStroke1);
    rect(((width/5)*(-2.5)),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

// rettangoli che scendono
    push();
    noStroke();
    fill(ansColor2);
    rect((width/5)*(-2.5),atHeight1of1,width/5,(height/5)*4);
    pop();

    push();
    noStroke();
    fill(ansColor1);
    rect((width/5)*(-1.5),atHeight1of1,width/5,(height/5)*4);
    pop();

    push();
    noStroke();
    fill(ansColor4);
    rect((width/5)*(-0.5),atHeight1of1,width/5,(height/5)*4);
    pop();

    push();
    noStroke();
    fill(ansColor5);
    rect((width/5)*(0.5),atHeight1of1,width/5,(height/5)*4);
    pop();

    push();
    noStroke();
    fill(ansColor3);
    rect((width/5)*(1.5),atHeight1of1,width/5,(height/5)*4);
    pop();


    }
    // fine animazione
  } else if(atHeight1of1=((-height/5)*1.5)){
    push();
    fill(ansColor3);
    stroke(brandBlue);
    strokeWeight(selectedStroke5);
    rect((width/5)*1.5,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor5);
    stroke(brandBlue);
    strokeWeight(selectedStroke4);
    rect((width/5)*0.5,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor4);
    stroke(brandBlue);
    strokeWeight(selectedStroke3);
    rect((width/5)*(-0.5),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor1);
    stroke(brandBlue);
    strokeWeight(selectedStroke2);
    rect((width/5)*(-1.5),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor2);
    stroke(brandBlue);
    strokeWeight(selectedStroke1);
    rect((width/5)*(-2.5),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    // valori risposte
      push();
      textAlign(CENTER,CENTER);
      fill(brandBlack);
      noStroke();
      textFont(SuisseWorks);
      textSize(200);
      text("1",(-width/5)*2,0);
      pop();

      push();
      textAlign(CENTER,CENTER);
      fill(brandBlue);
      noStroke();
      textFont(SuisseWorks);
      textSize(200);
      text("2",(-width/5),0);
      pop();

      push();
      textAlign(CENTER,CENTER);
      fill(brandBlack);
      noStroke();
      textFont(SuisseWorks);
      textSize(200);
      text("3",0,0);
      pop();

      push();
      textAlign(CENTER,CENTER);
      fill(brandBlue);
      noStroke();
      textFont(SuisseWorks);
      textSize(200);
      text("4",(width/5),0);
      pop();

      push();
      textAlign(CENTER,CENTER);
      fill(brandMint);
      noStroke();
      textFont(SuisseWorks);
      textSize(200);
      text("5",(width/5)*2,0);
      pop();


    // cambio colore in hover
      if (mouseX >= (width/5)*4 && mouseY > height/5) {
    ansColor3 = brandLila;
    ansColor5 = brandWhite;
    ansColor4 = brandMint;
    ansColor1 = brandWhite;
    ansColor2 = brandMint;

    }else if (mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
      ansColor3 = brandBlack;
      ansColor5 = brandLila;
      ansColor4 = brandMint;
      ansColor1 = brandWhite;
      ansColor2 = brandMint;
    } else if (mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
      ansColor3 = brandBlack;
      ansColor5 = brandWhite;
      ansColor4 = brandLila;
      ansColor1 = brandWhite;
      ansColor2 = brandMint;
    } else if (mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
      ansColor3 = brandBlack;
      ansColor5 = brandWhite;
      ansColor4 = brandMint;
      ansColor1 = brandLila;
      ansColor2 = brandMint;
    } else if (mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
      ansColor3 = brandBlack;
      ansColor5 = brandWhite;
      ansColor4 = brandMint;
      ansColor1 = brandWhite;
      ansColor2 = brandLila;
    }




  }


} else if (nxtNumber===4) {
  quest = "QUANTO STAI ATTENTO/A A CIÒ CHE PUBBLICHI?";

  // inizio animazione entrata
  if (atHeight2of1<((-height/5)*1.5)) {
    //at1of1 rect
    startAtHeight2of1 = 1;
    if(startAtHeight2of1===1) {
      atHeight2of1 = atHeight2of1 + 25;

  // vecchi rettangoli
      push();
      fill(ansColor3);
      stroke(brandBlue);
      strokeWeight(selectedStroke5);
      rect(((width/5)*1.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor5);
      stroke(brandBlue);
      strokeWeight(selectedStroke4);
      rect(((width/5)*0.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor4);
      stroke(brandBlue);
      strokeWeight(selectedStroke3);
      rect(((width/5)*(-0.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor1);
      stroke(brandBlue);
      strokeWeight(selectedStroke2);
      rect(((width/5)*(-1.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor2);
      stroke(brandBlue);
      strokeWeight(selectedStroke1);
      rect(((width/5)*(-2.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

  // rettangoli che scendono
      push();
      noStroke();
      fill(ansColor1);
      rect((width/5)*(-2.5),atHeight2of1,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor2);
      rect((width/5)*(-1.5),atHeight2of1,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor3);
      rect((width/5)*(-0.5),atHeight2of1,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor4);
      rect((width/5)*(0.5),atHeight2of1,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor5);
      rect((width/5)*(1.5),atHeight2of1,width/5,(height/5)*4);
      pop();


      }
      // fine animazione
    } else if(atHeight2of1=((-height/5)*1.5)){
      push();
      fill(ansColor5);
      stroke(brandBlue);
      strokeWeight(selectedStroke5);
      rect((width/5)*1.5,(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor4);
      stroke(brandBlue);
      strokeWeight(selectedStroke4);
      rect((width/5)*0.5,(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor3);
      stroke(brandBlue);
      strokeWeight(selectedStroke3);
      rect((width/5)*(-0.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor2);
      stroke(brandBlue);
      strokeWeight(selectedStroke2);
      rect((width/5)*(-1.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor1);
      stroke(brandBlue);
      strokeWeight(selectedStroke1);
      rect((width/5)*(-2.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      // valori risposte
        push();
        textAlign(CENTER,CENTER);
        fill(brandBlack);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("1",(-width/5)*2,0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlue);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("2",(-width/5),0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandWhite);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("3",0,0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlack);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("4",(width/5),0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlue);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("5",(width/5)*2,0);
        pop();


      // cambio colore in hover
        if (mouseX >= (width/5)*4 && mouseY > height/5) {
          ansColor5 = brandLila;
          ansColor4 = brandMint;
          ansColor3 = brandBlack;
          ansColor2 = brandMint;
          ansColor1 = brandWhite;

      }else if (mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
        ansColor5 = brandWhite;
        ansColor4 = brandLila;
        ansColor3 = brandBlack;
        ansColor2 = brandMint;
        ansColor1 = brandWhite;
      } else if (mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
        ansColor5 = brandWhite;
        ansColor4 = brandMint;
        ansColor3 = brandLila;
        ansColor2 = brandMint;
        ansColor1 = brandWhite;
      } else if (mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
        ansColor5 = brandWhite;
        ansColor4 = brandMint;
        ansColor3 = brandBlack;
        ansColor2 = brandLila;
        ansColor1 = brandWhite;
      } else if (mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
        ansColor5 = brandWhite;
        ansColor4 = brandMint;
        ansColor3 = brandBlack;
        ansColor2 = brandMint;
        ansColor1 = brandLila;
      }




    }

} else if (nxtNumber===5){
  quest = "IN CHE PERCENTUALE FOTOGRAFI PER PUBBLICARE SUI SOCIAL?";

  // inizio animazione entrata
  if (atHeight3of1<((-height/5)*1.5)) {
    //at1of1 rect
    startAtHeight3of1 = 1;
    if(startAtHeight3of1===1) {
      atHeight3of1 = atHeight3of1 + 25;

  // vecchi rettangoli
      push();
      fill(ansColor5);
      stroke(brandBlue);
      strokeWeight(selectedStroke5);
      rect(((width/5)*1.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor4);
      stroke(brandBlue);
      strokeWeight(selectedStroke4);
      rect(((width/5)*0.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor3);
      stroke(brandBlue);
      strokeWeight(selectedStroke3);
      rect(((width/5)*(-0.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor2);
      stroke(brandBlue);
      strokeWeight(selectedStroke2);
      rect(((width/5)*(-1.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor1);
      stroke(brandBlue);
      strokeWeight(selectedStroke1);
      rect(((width/5)*(-2.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

  // rettangoli che scendono
      push();
      noStroke();
      fill(ansColor2);
      rect((width/5)*(-2.5),atHeight3of1,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor1);
      rect((width/5)*(-1.5),atHeight3of1,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor4);
      rect((width/5)*(-0.5),atHeight3of1,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor5);
      rect((width/5)*(0.5),atHeight3of1,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor3);
      rect((width/5)*(1.5),atHeight3of1,width/5,(height/5)*4);
      pop();


      }
      // fine animazione
    } else if(atHeight3of1=((-height/5)*1.5)){
      push();
      fill(ansColor3);
      stroke(brandBlue);
      strokeWeight(selectedStroke5);
      rect((width/5)*1.5,(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor5);
      stroke(brandBlue);
      strokeWeight(selectedStroke4);
      rect((width/5)*0.5,(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor4);
      stroke(brandBlue);
      strokeWeight(selectedStroke3);
      rect((width/5)*(-0.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor1);
      stroke(brandBlue);
      strokeWeight(selectedStroke2);
      rect((width/5)*(-1.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor2);
      stroke(brandBlue);
      strokeWeight(selectedStroke1);
      rect((width/5)*(-2.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      // valori risposte
        push();
        textAlign(CENTER,CENTER);
        fill(brandBlack);
        noStroke();
        textFont(SuisseWorks);
        textSize(50);
        text("0-20%",(-width/5)*2,0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlue);
        noStroke();
        textFont(SuisseWorks);
        textSize(50);
        text("20-40%",(-width/5),0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlack);
        noStroke();
        textFont(SuisseWorks);
        textSize(50);
        text("40-60%",0,0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlue);
        noStroke();
        textFont(SuisseWorks);
        textSize(50);
        text("60-80%",(width/5),0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandMint);
        noStroke();
        textFont(SuisseWorks);
        textSize(50);
        text("80-100%",(width/5)*2,0);
        pop();


      // cambio colore in hover
        if (mouseX >= (width/5)*4 && mouseY > height/5) {
      ansColor3 = brandLila;
      ansColor5 = brandWhite;
      ansColor4 = brandMint;
      ansColor1 = brandWhite;
      ansColor2 = brandMint;

      }else if (mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandLila;
        ansColor4 = brandMint;
        ansColor1 = brandWhite;
        ansColor2 = brandMint;
      } else if (mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandWhite;
        ansColor4 = brandLila;
        ansColor1 = brandWhite;
        ansColor2 = brandMint;
      } else if (mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandWhite;
        ansColor4 = brandMint;
        ansColor1 = brandLila;
        ansColor2 = brandMint;
      } else if (mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandWhite;
        ansColor4 = brandMint;
        ansColor1 = brandWhite;
        ansColor2 = brandLila;
      }




    }


} else if ( nxtNumber=== 6){
 //---------------------------------CO "PAGE"-----------------------------------
 //-----------------------------------------------------------------------------
 //-----------------------------------------------------------------------------
 //-----------------------------------------------------------------------------

quest = "QUANTO TI SENTI RAPPRESENTATO/A DALL'IMMAGINE DI PROFILO?"

// inizio animazione entrata
if (coWidth1of1>(width/5)*1.5) {
  //aw1of1 rect
  startCoWidth1of1 = 1;
  if(startCoWidth1of1===1) {
    coWidth1of1 = coWidth1of1 - 35;

  push();
  fill(ansColor5);
  noStroke();
  // strokeWeight(10);
  rect(coWidth1of1,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor4);
  noStroke();
  // strokeWeight(10);
  rect(coWidth1of1-width/5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor3);
  noStroke();
  // strokeWeight(10);
  rect(coWidth1of1-(width/5)*2,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  noStroke();
  // strokeWeight(10);
  rect(coWidth1of1-(width/5)*3,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor1);
  noStroke();
  // strokeWeight(10);
  rect(coWidth1of1-(width/5)*4,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

// ---------------vecchi rettangoli-------------------
  push();
  fill(ansColor3);
  stroke(brandBlue);
  strokeWeight(selectedStroke5);
  rect(((width/5)*1.5)+coWidth1of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor5);
  stroke(brandBlue);
  strokeWeight(selectedStroke4);
  rect(((width/5)*0.5)+coWidth1of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor4);
  stroke(brandBlue);
  strokeWeight(selectedStroke3);
  rect(((width/5)*(-0.5))+coWidth1of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor1);
  stroke(brandBlue);
  strokeWeight(selectedStroke2);
  rect(((width/5)*(-1.5))+coWidth1of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  stroke(brandBlue);
  strokeWeight(selectedStroke1);
  rect(((width/5)*(-2.5))+coWidth1of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
  pop();
  }
// fine animazione entrata
} else if(coWidth1of1 = (width/5)*1.5) {
  push();
  fill(ansColor5);
  stroke(brandBlue);
  strokeWeight(selectedStroke5);
  rect((width/5)*1.5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor4);
  stroke(brandBlue);
  strokeWeight(selectedStroke4);
  rect((width/5)*0.5,(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor3);
  stroke(brandBlue);
  strokeWeight(selectedStroke3);
  rect((width/5)*(-0.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  stroke(brandBlue);
  strokeWeight(selectedStroke2);
  rect((width/5)*(-1.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

  push();
  fill(ansColor1);
  stroke(brandBlue);
  strokeWeight(selectedStroke1);
  rect((width/5)*(-2.5),(-height/5)*1.5,width/5,(height/5)*4);
  pop();

// valori risposte
  push();
  textAlign(CENTER,CENTER);
  fill(brandBlack);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("1",(-width/5)*2,0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlue);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("2",(-width/5),0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandWhite);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("3",0,0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlack);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("4",(width/5),0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  fill(brandBlue);
  noStroke();
  textFont(SuisseWorks);
  textSize(200);
  text("5",(width/5)*2,0);
  pop();

// cambio colore in hover
  if (mouseX >= (width/5)*4 && mouseY > height/5) {
ansColor5 = brandLila;
ansColor4 = brandMint;
ansColor3 = brandBlack;
ansColor2 = brandMint;
ansColor1 = brandWhite;

}else if (mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandLila;
  ansColor3 = brandBlack;
  ansColor2 = brandMint;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandLila;
  ansColor2 = brandMint;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandBlack;
  ansColor2 = brandLila;
  ansColor1 = brandWhite;
} else if (mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
  ansColor5 = brandWhite;
  ansColor4 = brandMint;
  ansColor3 = brandBlack;
  ansColor2 = brandMint;
  ansColor1 = brandLila;
}

}


} else if(nxtNumber === 7) {

  quest = "QUANTO SONO COERENTI I TUOI POST TRA LORO?"

  // inizio animazione entrata
  if (coWidth2of1>(width/5)*1.5) {
    //aw1of1 rect
    startCoWidth2of1 = 1;
    if(startCoWidth2of1===1) {
      coWidth2of1 = coWidth2of1 - 35;

    push();
    fill(ansColor5);
    noStroke();
    // strokeWeight(10);
    rect(coWidth2of1,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor4);
    noStroke();
    // strokeWeight(10);
    rect(coWidth2of1-width/5,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor3);
    noStroke();
    // strokeWeight(10);
    rect(coWidth2of1-(width/5)*2,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor2);
    noStroke();
    // strokeWeight(10);
    rect(coWidth2of1-(width/5)*3,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor1);
    noStroke();
    // strokeWeight(10);
    rect(coWidth2of1-(width/5)*4,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

  // ---------------vecchi rettangoli-------------------
    push();
    fill(ansColor5);
    stroke(brandBlue);
    strokeWeight(selectedStroke5);
    rect(((width/5)*1.5)+coWidth2of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor4);
    stroke(brandBlue);
    strokeWeight(selectedStroke4);
    rect(((width/5)*0.5)+coWidth2of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor3);
    stroke(brandBlue);
    strokeWeight(selectedStroke3);
    rect(((width/5)*(-0.5))+coWidth2of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor2);
    stroke(brandBlue);
    strokeWeight(selectedStroke2);
    rect(((width/5)*(-1.5))+coWidth2of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor1);
    stroke(brandBlue);
    strokeWeight(selectedStroke1);
    rect(((width/5)*(-2.5))+coWidth2of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
    pop();
    }
  // fine animazione entrata
} else if(coWidth2of1 = (width/5)*1.5) {
    push();
    fill(ansColor5);
    stroke(brandBlue);
    strokeWeight(selectedStroke5);
    rect((width/5)*1.5,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor4);
    stroke(brandBlue);
    strokeWeight(selectedStroke4);
    rect((width/5)*0.5,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor3);
    stroke(brandBlue);
    strokeWeight(selectedStroke3);
    rect((width/5)*(-0.5),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor2);
    stroke(brandBlue);
    strokeWeight(selectedStroke2);
    rect((width/5)*(-1.5),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor1);
    stroke(brandBlue);
    strokeWeight(selectedStroke1);
    rect((width/5)*(-2.5),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

  // valori risposte
    push();
    textAlign(CENTER,CENTER);
    fill(brandBlack);
    noStroke();
    textFont(SuisseWorks);
    textSize(200);
    text("1",(-width/5)*2,0);
    pop();

    push();
    textAlign(CENTER,CENTER);
    fill(brandBlue);
    noStroke();
    textFont(SuisseWorks);
    textSize(200);
    text("2",(-width/5),0);
    pop();

    push();
    textAlign(CENTER,CENTER);
    fill(brandWhite);
    noStroke();
    textFont(SuisseWorks);
    textSize(200);
    text("3",0,0);
    pop();

    push();
    textAlign(CENTER,CENTER);
    fill(brandBlack);
    noStroke();
    textFont(SuisseWorks);
    textSize(200);
    text("4",(width/5),0);
    pop();

    push();
    textAlign(CENTER,CENTER);
    fill(brandBlue);
    noStroke();
    textFont(SuisseWorks);
    textSize(200);
    text("5",(width/5)*2,0);
    pop();

  // cambio colore in hover
    if (mouseX >= (width/5)*4 && mouseY > height/5) {
  ansColor5 = brandLila;
  ansColor4 = brandMint;
  ansColor3 = brandBlack;
  ansColor2 = brandMint;
  ansColor1 = brandWhite;

  }else if (mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
    ansColor5 = brandWhite;
    ansColor4 = brandLila;
    ansColor3 = brandBlack;
    ansColor2 = brandMint;
    ansColor1 = brandWhite;
  } else if (mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
    ansColor5 = brandWhite;
    ansColor4 = brandMint;
    ansColor3 = brandLila;
    ansColor2 = brandMint;
    ansColor1 = brandWhite;
  } else if (mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
    ansColor5 = brandWhite;
    ansColor4 = brandMint;
    ansColor3 = brandBlack;
    ansColor2 = brandLila;
    ansColor1 = brandWhite;
  } else if (mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
    ansColor5 = brandWhite;
    ansColor4 = brandMint;
    ansColor3 = brandBlack;
    ansColor2 = brandMint;
    ansColor1 = brandLila;
  }

  }


} else if(nxtNumber === 8) {

  quest = "IN CHE PERCENTUALE SONO COERENTI I POST CON LA TUA PERSONALITÀ?"

  // inizio animazione entrata
  if (coWidth3of1>(width/5)*1.5) {
    //aw1of1 rect
    startCoWidth3of1 = 1;
    if(startCoWidth3of1===1) {
      coWidth3of1 = coWidth3of1 - 35;

    push();
    fill(ansColor5);
    noStroke();
    // strokeWeight(10);
    rect(coWidth3of1,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor4);
    noStroke();
    // strokeWeight(10);
    rect(coWidth3of1-width/5,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor3);
    noStroke();
    // strokeWeight(10);
    rect(coWidth3of1-(width/5)*2,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor2);
    noStroke();
    // strokeWeight(10);
    rect(coWidth3of1-(width/5)*3,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor1);
    noStroke();
    // strokeWeight(10);
    rect(coWidth3of1-(width/5)*4,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

  // ---------------vecchi rettangoli-------------------
    push();
    fill(ansColor5);
    stroke(brandBlue);
    strokeWeight(selectedStroke5);
    rect(((width/5)*1.5)+coWidth3of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor4);
    stroke(brandBlue);
    strokeWeight(selectedStroke4);
    rect(((width/5)*0.5)+coWidth3of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor3);
    stroke(brandBlue);
    strokeWeight(selectedStroke3);
    rect(((width/5)*(-0.5))+coWidth3of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor2);
    stroke(brandBlue);
    strokeWeight(selectedStroke2);
    rect(((width/5)*(-1.5))+coWidth3of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor1);
    stroke(brandBlue);
    strokeWeight(selectedStroke1);
    rect(((width/5)*(-2.5))+coWidth3of1-2700,(-height/5)*1.5,width/5,(height/5)*4);
    pop();
    }
  // fine animazione entrata
} else if(coWidth3of1 = (width/5)*1.5) {
    push();
    fill(ansColor5);
    stroke(brandBlue);
    strokeWeight(selectedStroke5);
    rect((width/5)*1.5,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor4);
    stroke(brandBlue);
    strokeWeight(selectedStroke4);
    rect((width/5)*0.5,(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor3);
    stroke(brandBlue);
    strokeWeight(selectedStroke3);
    rect((width/5)*(-0.5),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor2);
    stroke(brandBlue);
    strokeWeight(selectedStroke2);
    rect((width/5)*(-1.5),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

    push();
    fill(ansColor1);
    stroke(brandBlue);
    strokeWeight(selectedStroke1);
    rect((width/5)*(-2.5),(-height/5)*1.5,width/5,(height/5)*4);
    pop();

  // valori risposte
    push();
    textAlign(CENTER,CENTER);
    fill(brandBlack);
    noStroke();
    textFont(SuisseWorks);
    textSize(50);
    text("0-20%",(-width/5)*2,0);
    pop();

    push();
    textAlign(CENTER,CENTER);
    fill(brandBlue);
    noStroke();
    textFont(SuisseWorks);
    textSize(50);
    text("20-40%",(-width/5),0);
    pop();

    push();
    textAlign(CENTER,CENTER);
    fill(brandWhite);
    noStroke();
    textFont(SuisseWorks);
    textSize(50);
    text("40-60%",0,0);
    pop();

    push();
    textAlign(CENTER,CENTER);
    fill(brandBlack);
    noStroke();
    textFont(SuisseWorks);
    textSize(50);
    text("60-80%",(width/5),0);
    pop();

    push();
    textAlign(CENTER,CENTER);
    fill(brandBlue);
    noStroke();
    textFont(SuisseWorks);
    textSize(50);
    text("80-100%",(width/5)*2,0);
    pop();

  // cambio colore in hover
    if (mouseX >= (width/5)*4 && mouseY > height/5) {
  ansColor5 = brandLila;
  ansColor4 = brandMint;
  ansColor3 = brandBlack;
  ansColor2 = brandMint;
  ansColor1 = brandWhite;

  }else if (mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
    ansColor5 = brandWhite;
    ansColor4 = brandLila;
    ansColor3 = brandBlack;
    ansColor2 = brandMint;
    ansColor1 = brandWhite;
  } else if (mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
    ansColor5 = brandWhite;
    ansColor4 = brandMint;
    ansColor3 = brandLila;
    ansColor2 = brandMint;
    ansColor1 = brandWhite;
  } else if (mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
    ansColor5 = brandWhite;
    ansColor4 = brandMint;
    ansColor3 = brandBlack;
    ansColor2 = brandLila;
    ansColor1 = brandWhite;
  } else if (mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
    ansColor5 = brandWhite;
    ansColor4 = brandMint;
    ansColor3 = brandBlack;
    ansColor2 = brandMint;
    ansColor1 = brandLila;
  }

  }


} else if (nxtNumber===9) {
  //---------------------------------SP "PAGE"-----------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  quest = "IN CHE PERCENTUALE PUBBLICHI CONTENUTI AUTOPRODOTTI?";

  // inizio animazione entrata
  if (spHeight1of1>((-height/5)*1.5)) {
    //at1of1 rect
    startSpHeight1of1 = 1;
    if(startSpHeight1of1===1) {
      spHeight1of1 = spHeight1of1 - 25;

  // vecchi rettangoli
      push();
      fill(ansColor5);
      stroke(brandBlue);
      strokeWeight(selectedStroke5);
      rect(((width/5)*1.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor4);
      stroke(brandBlue);
      strokeWeight(selectedStroke4);
      rect(((width/5)*0.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor3);
      stroke(brandBlue);
      strokeWeight(selectedStroke3);
      rect(((width/5)*(-0.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor2);
      stroke(brandBlue);
      strokeWeight(selectedStroke2);
      rect(((width/5)*(-1.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor1);
      stroke(brandBlue);
      strokeWeight(selectedStroke1);
      rect(((width/5)*(-2.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

  // rettangoli che salgono
      push();
      noStroke();
      fill(ansColor2);
      rect((width/5)*(-2.5),spHeight1of1+20,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor1);
      rect((width/5)*(-1.5),spHeight1of1+20,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor4);
      rect((width/5)*(-0.5),spHeight1of1+20,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor5);
      rect((width/5)*(0.5),spHeight1of1+20,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor3);
      rect((width/5)*(1.5),spHeight1of1+20,width/5,(height/5)*4);
      pop();


      }
      // fine animazione
    } else if(spHeight1of1=((-height/5)*1.5)){
      push();
      fill(ansColor3);
      stroke(brandBlue);
      strokeWeight(selectedStroke5);
      rect((width/5)*1.5,(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor5);
      stroke(brandBlue);
      strokeWeight(selectedStroke4);
      rect((width/5)*0.5,(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor4);
      stroke(brandBlue);
      strokeWeight(selectedStroke3);
      rect((width/5)*(-0.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor1);
      stroke(brandBlue);
      strokeWeight(selectedStroke2);
      rect((width/5)*(-1.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor2);
      stroke(brandBlue);
      strokeWeight(selectedStroke1);
      rect((width/5)*(-2.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      // valori risposte
        push();
        textAlign(CENTER,CENTER);
        fill(brandBlack);
        noStroke();
        textFont(SuisseWorks);
        textSize(50);
        text("0-20%",(-width/5)*2,0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlue);
        noStroke();
        textFont(SuisseWorks);
        textSize(50);
        text("20-40%",(-width/5),0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlack);
        noStroke();
        textFont(SuisseWorks);
        textSize(50);
        text("40-60%",0,0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlue);
        noStroke();
        textFont(SuisseWorks);
        textSize(50);
        text("60-80%",(width/5),0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandMint);
        noStroke();
        textFont(SuisseWorks);
        textSize(50);
        text("80-100%",(width/5)*2,0);
        pop();


      // cambio colore in hover
        if (mouseX >= (width/5)*4 && mouseY > height/5) {
      ansColor3 = brandLila;
      ansColor5 = brandWhite;
      ansColor4 = brandMint;
      ansColor1 = brandWhite;
      ansColor2 = brandMint;

      }else if (mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandLila;
        ansColor4 = brandMint;
        ansColor1 = brandWhite;
        ansColor2 = brandMint;
      } else if (mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandWhite;
        ansColor4 = brandLila;
        ansColor1 = brandWhite;
        ansColor2 = brandMint;
      } else if (mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandWhite;
        ansColor4 = brandMint;
        ansColor1 = brandLila;
        ansColor2 = brandMint;
      } else if (mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandWhite;
        ansColor4 = brandMint;
        ansColor1 = brandWhite;
        ansColor2 = brandLila;
      }







  }
} else if (nxtNumber===10) {
  quest = "HAI MAI SEGUITO CONSIGLI PER PROGETTARE LA TUA IDENTITÀ DIGITALE?";

  // inizio animazione entrata
  if (spHeight2of1>((-height/5)*1.5)) {
    //at1of1 rect
    startSpHeight2of1 = 1;
    if(startSpHeight2of1===1) {
      spHeight2of1 = spHeight2of1 - 25;

  // vecchi rettangoli
      push();
      fill(ansColor3);
      noStroke();
      rect(((width/5)*1.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor5);
      noStroke();
      rect(((width/5)*0.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor4);
      noStroke();
      rect(((width/5)*(-0.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor1);
      noStroke();
      rect(((width/5)*(-1.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor2);
      noStroke();
      rect(((width/5)*(-2.5)),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

  // rettangoli che salgono
      push();
      noStroke();
      fill(ansColor1);
      rect(-width/2,spHeight2of1+20,width/2,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor2);
      rect(0,spHeight2of1+20,width/2,(height/5)*4);
      pop();




      }
      // fine animazione
    } else if(atHeight2of1=((-height/5)*1.5)){
      push();
      fill(ansColor1);
      stroke(brandBlue);
      strokeWeight(selectedStroke1);
      rect(-width/2,(-height/5)*1.5,width/2,(height/5)*4);
      pop();

      push();
      fill(ansColor2);
      stroke(brandBlue);
      strokeWeight(selectedStroke2);
      rect(0,(-height/5)*1.5,width/2,(height/5)*4);
      pop();

      // valori risposte
        push();
        textAlign(CENTER,CENTER);
        fill(brandBlue);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("SI",(-width/4),0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandMint);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("NO",(width/4),0);
        pop();

      // cambio colore in hover
        if (mouseX > (width/2)) {

          ansColor2 = brandLila;
          ansColor1 = brandWhite;

      }else if (mouseX <= (width/2)){

        ansColor2 = brandBlack;
        ansColor1 = brandLila;
      }




    }

} else if (nxtNumber===11) {
  quest = "QUANTO TI IMPEGNI QUANDO FOTOGRAFI?";

  // inizio animazione entrata
  if (spHeight3of1>((-height/5)*1.5)) {
    //at1of1 rect
    startSpHeight3of1 = 1;
    if(startSpHeight3of1===1) {
      spHeight3of1 = spHeight3of1 - 25;

  // vecchi rettangoli
  push();
  fill(ansColor1);
  noStroke();
  rect(-width/2,(-height/5)*1.5,width/2,(height/5)*4);
  pop();

  push();
  fill(ansColor2);
  noStroke();
  rect(0,(-height/5)*1.5,width/2,(height/5)*4);
  pop();

  // rettangoli che salgono
      push();
      noStroke();
      fill(ansColor2);
      rect((width/5)*(-2.5),spHeight3of1+20,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor1);
      rect((width/5)*(-1.5),spHeight3of1+20,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor4);
      rect((width/5)*(-0.5),spHeight3of1+20,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor5);
      rect((width/5)*(0.5),spHeight3of1+20,width/5,(height/5)*4);
      pop();

      push();
      noStroke();
      fill(ansColor3);
      rect((width/5)*(1.5),spHeight3of1+20,width/5,(height/5)*4);
      pop();


      }
      // fine animazione
    } else if(spHeight3of1=((-height/5)*1.5)){
      push();
      fill(ansColor3);
      stroke(brandBlue);
      strokeWeight(selectedStroke5);
      rect((width/5)*1.5,(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor5);
      stroke(brandBlue);
      strokeWeight(selectedStroke4);
      rect((width/5)*0.5,(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor4);
      stroke(brandBlue);
      strokeWeight(selectedStroke3);
      rect((width/5)*(-0.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor1);
      stroke(brandBlue);
      strokeWeight(selectedStroke2);
      rect((width/5)*(-1.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      push();
      fill(ansColor2);
      stroke(brandBlue);
      strokeWeight(selectedStroke1);
      rect((width/5)*(-2.5),(-height/5)*1.5,width/5,(height/5)*4);
      pop();

      // valori risposte
        push();
        textAlign(CENTER,CENTER);
        fill(brandBlack);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("1",(-width/5)*2,0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlue);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("2",(-width/5),0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlack);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("3",0,0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandBlue);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("4",(width/5),0);
        pop();

        push();
        textAlign(CENTER,CENTER);
        fill(brandMint);
        noStroke();
        textFont(SuisseWorks);
        textSize(200);
        text("5",(width/5)*2,0);
        pop();


      // cambio colore in hover
        if (mouseX >= (width/5)*4 && mouseY > height/5) {
      ansColor3 = brandLila;
      ansColor5 = brandWhite;
      ansColor4 = brandMint;
      ansColor1 = brandWhite;
      ansColor2 = brandMint;

      }else if (mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandLila;
        ansColor4 = brandMint;
        ansColor1 = brandWhite;
        ansColor2 = brandMint;
      } else if (mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandWhite;
        ansColor4 = brandLila;
        ansColor1 = brandWhite;
        ansColor2 = brandMint;
      } else if (mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandWhite;
        ansColor4 = brandMint;
        ansColor1 = brandLila;
        ansColor2 = brandMint;
      } else if (mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
        ansColor3 = brandBlack;
        ansColor5 = brandWhite;
        ansColor4 = brandMint;
        ansColor1 = brandWhite;
        ansColor2 = brandLila;
      }







  }
}


//LAYOUT
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//box
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//box rect
push();
fill(brandBlue);
stroke(brandBlack);
strokeWeight(10);
rect((-width/2),(-height/2),width,(height/5));
pop();

//box logo
push();
imageMode(CENTER);
image(logoReductedMint,(width/16)*7,(-height/5)*2,height/9,height/9);
pop();

//box text
push();
textAlign(CENTER,CENTER);
fill(brandWhite);
noStroke();
textFont(SuisseIntl);
textSize(35);
text(quest,0,(-height/5)*2);
pop();


} else if (pageNumber===4){

  // hide old elements
  nextButton.hide();

  //LAYOUT
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------

  //box
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  //box rect
  push();
  fill(brandBlue);
  stroke(brandBlack);
  strokeWeight(10);
  rect((-width/2),(-height/2),width,(height/5));
  pop();

// animazione caricamento dati
if(loadingProfiling < width) {
  startLoadingProfiling = 1;
  if (startLoadingProfiling === 1){
    loadingProfiling = loadingProfiling + 5;

    push();
    fill(brandBlue);
    noStroke();
    rect((-width/2),(-height/2),width,height);
    pop();

    push();
    fill(brandBlack);
    stroke(brandBlue);
    strokeWeight(10);
    rect((-width/2),(-height/2),loadingProfiling,(height/5));
    pop();

    push();
    fill(brandBlack);
    noStroke();
    rect((-width/2),(-height/2),loadingProfiling,height);
    pop();

    push();
    rotateY(millis() / 1000);
    stroke(brandWhite);
    noFill();
    sphere(windowHeight/8);
    pop();

  }
} else if (loadingProfiling >= width){
  pageNumber=5;
}

  //box logo
  push();
  imageMode(CENTER);
  image(logoReductedMint,(width/16)*7,(-height/5)*2,height/9,height/9);
  pop();

  //box text
  push();
  textAlign(CENTER,CENTER);
  fill(brandWhite);
  noStroke();
  textFont(SuisseIntl);
  textSize(35);
  text("[analisi risposte]",0,(-height/5)*2);
  pop();
} else if (pageNumber === 5) {
  //---------------------------------LAST "PAGE"---------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------



  //rgb values
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------

// //slider HSB
slider.position((width/2)-60, (height/2)+240);
slider.style("width","120px");
let valSlider = slider.value();

//Radio Cromoavatar
// radio.style('width', '60px');
// radio.position((width/2)-60, (height/2)+220);
// let valRadio = radio.value();


    //AWARENESS
  if (awareness >= 0 && awareness <=3) {
  r1 = 170.1+valSlider;
  g1 = 20;
  b1 = 20;
  } else if (awareness >= 4 && awareness <=6) {
  r1 = 170.1+valSlider;
  g1 = 40;
  b1 = 40;
  } else if (awareness >= 7 && awareness <=9) {
  r1 = 170.1+valSlider;
  g1 = 60;
  b1 = 60;
  } else if (awareness >= 10 && awareness <=12) {
  r1 = 170.1+valSlider;
  g1 = 80;
  b1 = 80;
  } else if (awareness >= 13 && awareness <=15) {
  r1 = 170.1+valSlider;
  g1 = 100;
  b1 = 100;
  }

  //ACTIVITY
if (activity >= 0 && activity <=3) {
r2 = 250.1+valSlider;
g2 = 20;
b2 = 20;
} else if (activity >= 4 && activity <=6) {
r2 = 250.1+valSlider;
g2 = 40;
b2 = 40;
} else if (activity >= 7 && activity <=9) {
r2 = 250.1+valSlider;
g2 = 60;
b2 = 60;
} else if (activity >= 10 && activity <=12) {
r2 = 250.1+valSlider;
g2 = 80;
b2 = 80;
} else if (activity >= 13 && activity <=15) {
r2 = 250.1+valSlider;
g2 = 100;
b2 = 100;
}

//COHERENCE
if (coherence >= 0 && coherence <=3) {
r3 = 18.12+valSlider;
g3 = 20;
b3 = 20;
} else if (coherence >= 4 && coherence <=6) {
r3 = 18.12+valSlider;
g3 = 40;
b3 = 40;
} else if (coherence >= 7 && coherence <=9) {
r3 = 18.12+valSlider;
g3 = 60;
b3 = 60;
} else if (coherence >= 10 && coherence <=12) {
r3 = 18.12+valSlider;
g3 = 80;
b3 = 80;
} else if (coherence >= 13 && coherence <=15) {
r3 = 18.12+valSlider;
g3 = 100;
b3 = 100;
}

//SELF PRODUCTION
if (selfproduction >= 0 && selfproduction <=3) {
r4 = 320+valSlider;
g4 = 20;
b4 = 20;
} else if (selfproduction >= 4 && selfproduction <=6) {
r4 = 320+valSlider;
g4 = 40;
b4 = 40;
} else if (selfproduction >= 7 && selfproduction <=9) {
r4 = 320+valSlider;
g4 = 60;
b4 = 60;
} else if (selfproduction >= 10 && selfproduction <=12) {
r4 = 320+valSlider;
g4 = 80;
b4 = 80;
} else if (selfproduction >= 13 && selfproduction <=15) {
r4 = 320+valSlider;
g4 = 100;
b4 = 100;
}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//lights and sphere
  let locX1 = -width/2;
  let locY1 = -height/2;

  let locX2 = -width/2;
  let locY2 = height/2;

  let locX3 = width/2;
  let locY3 = height/2;

  let locX4 = width/2;
  let locY4 = -height/2;


  sphereRadiusx2 = windowHeight/8;
push();
obj.colorMode(HSB);
obj.reset();
  obj.background(brandBlack);
  obj.noStroke();
  obj.pointLight(r1, g1, b1, locX1, locY1, height/3);
  obj.pointLight(r2, g2, b2, locX2, locY2, height/3);
  obj.pointLight(r3, g3, b3, locX3, locY3, height/3);
  obj.pointLight(r4,g4,b4, locX4, locY4, height/3);
  obj.sphere(sphereRadiusx2);


  //text to be saved
  push();
  obj.textAlign(CENTER,CENTER);
  obj.textFont(SuisseIntlMono);
  obj.fill(brandMint);
  obj.textSize(12);
  obj.text("SUMMARY: AW: "+awareness+"/15 AT: "+activity+"/15 CO: "+coherence+"/15 SP: "+selfproduction+"/15",0, 150);
  pop();

  objSaved = image(obj, -200, -200);
pop();
//score values
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
let designScore= awareness+activity+coherence+selfproduction;
let selfDesign;

if (designScore<=15) {
  selfDesign = "C'È ANCORA MOLTO DA FARE";
} else if (designScore>15 && designScore<=30) {
  selfDesign = "SEI SULLA GIUSTA STRADA";
} else if (designScore>30 && designScore<=45) {
  selfDesign = "C'È DEL DESIGN IN TE";
} else if (designScore>45 && designScore<=60) {
  selfDesign = "SAPEVI DI ESSERE UN DESIGNER?";
}

//LAYOUT
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------




//variables and resaults
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//single colors (sphere)
//---------------------------------------------------------------------------
//Awareness color value
push();
colorMode(HSB);
noStroke();
fill(r1,g1,b1);
circle(-height/4,-height/8,height/14);
pop();

//activity color value
push();
colorMode(HSB);
noStroke();
fill(r2,g2,b2);
circle(-height/4,height/8,height/14);
pop();

//coherence color value
push();
colorMode(HSB);
noStroke();
fill(r4,g4,b4);
circle(height/4,-height/8,height/14);
pop();

//self production color value
push();
colorMode(HSB);
noStroke();
fill(r3,g3,b3);
circle(height/4,height/8,height/14);
pop();

//color text (color values)
//awareness text
push();
textAlign(RIGHT,CENTER);
textFont(SuisseIntl);
fill(brandMint);
textSize(24);
text("AT: "+activity+"/15",(-height/4)-height/14,height/8);
pop();

//activity text
push();
textAlign(RIGHT,CENTER);
textFont(SuisseIntl);
fill(brandMint);
textSize(24);
text("AW: "+awareness+"/15",(-height/4)-height/14,-height/8);
pop();

//coherence text
push();
textAlign(LEFT,CENTER);
textFont(SuisseIntl);
fill(brandMint);
textSize(24);
text("CO: "+coherence+"/15",(height/4)+height/14,height/8);
pop();

//self production text
push();
textAlign(LEFT,CENTER);
textFont(SuisseIntl);
fill(brandMint);
textSize(24);
text("SP: "+selfproduction+"/15",(height/4)+height/14,-height/8);
pop();

//------------------------------------------------------------------------------
//legenda

//covering summary saved
push();
noStroke();
fill(brandBlack);
rect(-190,140,380,50);
pop();

//legenda title text
push();
textAlign(LEFT,TOP);
textFont(SuisseIntlMono);
fill(brandLila);
textSize(20);
text("LEGENDA",(-width/2)+15,0);
pop();

// legenda AW text
legendaAW.position(15,(height/2)+15);
legendaAT.position(60,(height/2)+15);
legendaCO.position(105,(height/2)+15);
legendaSP.position(150,(height/2)+15);

push();
fill(legendaColor);
textAlign(LEFT,TOP);
textFont(SuisseIntl);
textSize(16);
text(legendaText,(-width/2)+15,(height/2)-185);
pop();


//Single colors (summary)
//---------------------------------------------------------------------------
//awareness color value
push();
colorMode(HSB);
noStroke();
fill(r1,g1,b1);
square((width/2)-(height/22)-15,(height/2)-(height/22)-15,height/22);
pop();

//activity color value
push();
colorMode(HSB);
noStroke();
fill(r2,g2,b2);
square((width/2)-(height/22)-15,(height/2)-((height/22)*2)-20,height/22);
pop();

//coherence color value
push();
colorMode(HSB);
noStroke();
fill(r3,g3,b3);
square((width/2)-(height/22)-15,(height/2)-((height/22)*3)-30,height/22);
pop();

//self production color value
push();
colorMode(HSB);
noStroke();
fill(r4,g4,b4);
square((width/2)-(height/22)-15,(height/2)-((height/22)*4)-45,height/22);
pop();

//summary text - design score
push();
textAlign(RIGHT,TOP);
textFont(SuisseIntlMono);
fill(brandLila);
textSize(20);
text("DESIGN SCORE: "+designScore+"/60",(width/2)-15,(-height/5)*1.3);
fill(brandMint);
text("["+selfDesign+"]",(width/2)-15,(-height/5)*1.16);
pop();

//summary text - precisazinoe
push();
textAlign(LEFT,TOP);
textFont(SuisseIntlMono);
fill(brandWhite);
textSize(12);
text("*I VALORI DEI PARAMETRI \nAW-AT-CO-SP SONO ESPRESSI IN 15ESIMI",(-width/2)+15,(-height/5)*1.3);
pop();

//summary text - summary
push();
textAlign(RIGHT,CENTER);
textFont(SuisseIntlMono);
fill(brandMint);
textSize(16);
text("SUMMARY: AW: "+awareness+" AT: "+activity+" CO: "+coherence+" SP: "+selfproduction,(width/2)-(height/22)-30,(height/2)-25);
pop();

//summary text - scroll advice
push();
textAlign(CENTER,CENTER);
textFont(SuisseIntlMono);
fill(brandLila);
textSize(16);
text("SCROLL = IDENTITY MAP",0,(height/2)-25);
pop();

//slider definition
push();
textAlign(CENTER,CENTER);
textFont(SuisseIntlMono);
fill(brandLila);
textSize(16);
text("COLOR CHANGER",0,220);
pop();


  //----------------------------------------------------------------------------
  //download cromo avatar button
screenButton.position((width/2)-200, (height/5)*4);


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// IDENTITY MAP ----------------------------------------------------------------

if(scroll2>0 && scroll2<= height){
screenButton.hide();
legendaAW.hide();
legendaAT.hide();
legendaCO.hide();
legendaSP.hide();
slider.hide();

push();
noStroke();
fill(brandWhite);
rect(-width/2,-height/2,width,scroll2);
pop();

image(map,-width/2,((-height/2)*3)+scroll2,width, (width/16)*9);

} else if(scroll2>height){
  push();
  noStroke();
  fill(brandWhite);
  rect(-width/2,-height/2,width,height);
  image(map,-width/2,-height/2,width, (width/16)*9);

} else if(scroll2<=0){
  //box
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  //box rect
  push();
  fill(brandBlack);
  stroke(brandBlue);
  strokeWeight(10);
  rect((-width/2),(-height/2),width,(height/5));
  pop();

  //box text
  push();
  textAlign(CENTER,CENTER);
  fill(brandWhite);
  noStroke();
  textFont(SuisseIntl);
  textSize(50);
  text("RISULTATO:",0,(-height/5)*2);
  pop();

  //box logo
  push();
  imageMode(CENTER);
  image(logoReductedMint,(width/16)*7,(-height/5)*2,height/9,height/9);
  pop();



  screenButton.show();
  legendaAW.show();
  legendaAT.show();
  legendaCO.show();
  legendaSP.show();
  slider.show();

}

}

console.log(scrollText);


}

// mouse actions
function mouseClicked() {

  if (pageNumber >= 1 && pageNumber<5) {

    if (nxtNumber >=0 && nxtNumber<10) {
// blocco risposta
  if (answerBlock === 0) {

    if (mouseX >= (width/5)*4 && mouseY > height/5) {
      selectedStroke5=15;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=1;

    }else if(mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=15;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=1;
    }else if(mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=15;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=1;
    }else if(mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=15;
      selectedStroke1=0;
      answerBlock=1;
    }else if(mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=15;
      answerBlock=1;
    }
// sblocco risposta
  } else if(answerBlock===1){

    if (mouseX >= (width/5)*4 && mouseY > height/5) {
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=0;

    }else if(mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=0;
    }else if(mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=0;
    }else if(mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=0;
    }else if(mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=0;
    }

  }

} else if (nxtNumber === 10) {
  if (answerBlock=== 0){
    if (mouseX <= width/2){
      selectedStroke1=15;
      selectedStroke2=0;
      answerBlock = 1;
    }else if (mouseX > width/2){
      selectedStroke1=0;
      selectedStroke2=15;
      answerBlock = 1;
    }
  } else if (answerBlock === 1){
    if (mouseX<= width/2){
      selectedStroke1=0;
      selectedStroke2=0;
      answerBlock = 0;
    }else if (mouseX>width/2){
      selectedStroke1=0;
      selectedStroke2=0;
      answerBlock = 0;
    }
  }
} else if (nxtNumber > 10){

// blocco risposta
  if (answerBlock === 0) {

    if (mouseX >= (width/5)*4 && mouseY > height/5) {
      selectedStroke5=15;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=1;

    }else if(mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=15;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=1;
    }else if(mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=15;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=1;
    }else if(mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=15;
      selectedStroke1=0;
      answerBlock=1;
    }else if(mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=15;
      answerBlock=1;
    }
// sblocco risposta
  } else if(answerBlock===1){

    if (mouseX >= (width/5)*4 && mouseY > height/5) {
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=0;

    }else if(mouseX < (width/5)*4 && mouseX >= (width/5)*3 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=0;
    }else if(mouseX < (width/5)*3 && mouseX >= (width/5)*2 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=0;
    }else if(mouseX < (width/5)*2 && mouseX >= (width/5)*1 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=0;
    }else if(mouseX < (width/5)*1 && mouseX >= 0 && mouseY > height/5){
      selectedStroke5=0;
      selectedStroke4=0;
      selectedStroke3=0;
      selectedStroke2=0;
      selectedStroke1=0;
      answerBlock=0;
    }

  }
}

  }


}

//------------------------------------------------------------------------------
// page Number 5, legenda functions
function changeLegendaColorAW(){
  legendaColor = "#F5F0E6";

  legendaText = "il valore AW [awareness] \nindica quanto sei consapevole \ndi star comunicando, in ogni \ntua interazione, digital e non. \nLa consapevolezza sta alla base \ndi ogni buon progetto, \ncompreso quello della tua identità";
}

function changeLegendaColorBisAW(){
  legendaColor = "#000000";

  legendaText = " ";
}

function changeLegendaColorAT(){
  legendaColor = "#F5F0E6";

  legendaText = "il valore AT [activity] \nIndica la frequenza di pubblicazione \ndi artefatti visivi. \nUna frequenza elevata non sempre \ncorrisponde ad una comunicazione \nefficace, anche se di per sé \naumenta le interazioni o comunque \nle loro probabilità. ";
}

function changeLegendaColorBisAT(){
  legendaColor = "#000000";

  legendaText = " ";
}

function changeLegendaColorCO(){
  legendaColor = "#F5F0E6";

  legendaText = "il valore CO [coherence] \nindica la coerenza tra \nle tue espressioni comunicative. \nUna buona coerenza aiuta \nla riconoscibilità e l’affidabilità \ndi un’identità visiva ";
}

function changeLegendaColorBisCO(){
  legendaColor = "#000000";

  legendaText = " ";
}

function changeLegendaColorSP(){
  legendaColor = "#F5F0E6";

  legendaText = "il valore SP [self production] \nindica l’originalità \ndelle tue produzioni visive. \nUna produzione originale permette \nuna maggiore riconosciblità, \nma non necessariamente un aumento \ndelle interazioni con il pubblico";
}

function changeLegendaColorBisSP(){
  legendaColor = "#000000";

  legendaText = " ";
}

// page Number 0 ABOUT
function changeAboutColor(){
  aboutColor = "#F5F0E6";

  aboutText = "Progetto di Tesi di Laurea Magistrale \nPolitecnico di Milano, A.A. 2021-2022 \nProgetto di Federico Cordelli \nrelatore prof. Francesco Ermanno Guida";
}

function changeAboutColorBis(){
  aboutColor = "#0000FF";

  aboutText = " ";
}


// buttons functions
function downloadCromoAvatar() {

  save(obj, "Cromo Avatar_IP.jpg");

}

function nextQuestion() {

 if (pageNumber >= 1 && pageNumber <5){

// risposta aw1-----------------------------------------------------------------
   if (nxtNumber===0){

     if(answerBlock===1){

       if(selectedStroke1=== 15){
         awareness = awareness+1;
         nxtNumber = 1;

       } else if(selectedStroke2===15){
         awareness = awareness +2;
         nxtNumber = 1;

       } else if(selectedStroke3===15){
         awareness = awareness +3;
         nxtNumber = 1;

       } else if(selectedStroke4===15){
         awareness = awareness +4;
         nxtNumber = 1;

       } else if(selectedStroke5===15){
         awareness = awareness +5;
         nxtNumber = 1;
       }
     }// risposta aw2-----------------------------------------------------------
   } else if (nxtNumber === 1) {
     if(answerBlock===1){

       if(selectedStroke1=== 15){
         awareness = awareness+1;
         nxtNumber = 2;

       } else if(selectedStroke2===15){
         awareness = awareness +2;
         nxtNumber = 2;

       } else if(selectedStroke3===15){
         awareness = awareness +3;
         nxtNumber = 2;

       } else if(selectedStroke4===15){
         awareness = awareness +4;
         nxtNumber = 2;

       } else if(selectedStroke5===15){
         awareness = awareness +5;
         nxtNumber = 2;
       }
     } // risposta aw3----------------------------------------------------------
   } else if(nxtNumber=== 2) {
     if(answerBlock===1){

       if(selectedStroke1=== 15){
         awareness = awareness+1;
         nxtNumber = 3;

       } else if(selectedStroke2===15){
         awareness = awareness +2;
         nxtNumber = 3;

       } else if(selectedStroke3===15){
         awareness = awareness +3;
         nxtNumber = 3;

       } else if(selectedStroke4===15){
         awareness = awareness +4;
         nxtNumber = 3;

       } else if(selectedStroke5===15){
         awareness = awareness +5;
         nxtNumber = 3;
       }
     }
   } else if(nxtNumber=== 3) {
     if(answerBlock===1){

       if(selectedStroke1=== 15){
         activity = activity+1;
         nxtNumber = 4;

       } else if(selectedStroke2===15){
         activity = activity +2;
         nxtNumber = 4;

       } else if(selectedStroke3===15){
         activity = activity +3;
         nxtNumber = 4;

       } else if(selectedStroke4===15){
         activity = activity +4;
         nxtNumber = 4;

       } else if(selectedStroke5===15){
         activity = activity +5;
         nxtNumber = 4;
       }
     }
   } else if(nxtNumber=== 4) {
     if(answerBlock===1){

       if(selectedStroke1=== 15){
         activity = activity+1;
         nxtNumber = 5;

       } else if(selectedStroke2===15){
         activity = activity +2;
         nxtNumber = 5;

       } else if(selectedStroke3===15){
         activity = activity +3;
         nxtNumber = 5;

       } else if(selectedStroke4===15){
         activity = activity +4;
         nxtNumber = 5;

       } else if(selectedStroke5===15){
         activity = activity +5;
         nxtNumber = 5;
       }
     }
   } else if(nxtNumber=== 5) {
     if(answerBlock===1){

       if(selectedStroke1=== 15){
         activity = activity+1;
         nxtNumber = 6;

       } else if(selectedStroke2===15){
         activity = activity +2;
         nxtNumber = 6;

       } else if(selectedStroke3===15){
         activity = activity +3;
         nxtNumber = 6;

       } else if(selectedStroke4===15){
         activity = activity +4;
         nxtNumber = 6;

       } else if(selectedStroke5===15){
         activity = activity +5;
         nxtNumber = 6;
       }
     }
   } else if(nxtNumber=== 6) {
     if(answerBlock===1){

       if(selectedStroke1=== 15){
         coherence = coherence+1;
         nxtNumber = 7;

       } else if(selectedStroke2===15){
         coherence = coherence +2;
         nxtNumber = 7;

       } else if(selectedStroke3===15){
         coherence = coherence +3;
         nxtNumber = 7;

       } else if(selectedStroke4===15){
         coherence = coherence +4;
         nxtNumber = 7;

       } else if(selectedStroke5===15){
         coherence = coherence +5;
         nxtNumber = 7;
       }
     }
   } else if(nxtNumber=== 7) {
     if(answerBlock===1){

       if(selectedStroke1=== 15){
         coherence = coherence+1;
         nxtNumber = 8;

       } else if(selectedStroke2===15){
         coherence = coherence +2;
         nxtNumber = 8;

       } else if(selectedStroke3===15){
         coherence = coherence +3;
         nxtNumber = 8;

       } else if(selectedStroke4===15){
         coherence = coherence +4;
         nxtNumber = 8;

       } else if(selectedStroke5===15){
         coherence = coherence +5;
         nxtNumber = 8;
       }
     }
   } else if(nxtNumber=== 8) {
     if(answerBlock===1){

       if(selectedStroke1=== 15){
         coherence = coherence+1;
         nxtNumber = 9;

       } else if(selectedStroke2===15){
         coherence = coherence +2;
         nxtNumber = 9;

       } else if(selectedStroke3===15){
         coherence = coherence +3;
         nxtNumber = 9;

       } else if(selectedStroke4===15){
         coherence = coherence +4;
         nxtNumber = 9;

       } else if(selectedStroke5===15){
         coherence = coherence +5;
         nxtNumber = 9;
       }
     }
   } else if(nxtNumber=== 9) {
     if(answerBlock===1){

       if(selectedStroke1=== 15){
         selfproduction = selfproduction+1;
         nxtNumber = 10;

       } else if(selectedStroke2===15){
         selfproduction = selfproduction +2;
         nxtNumber = 10;

       } else if(selectedStroke3===15){
         selfproduction = selfproduction +3;
         nxtNumber = 10;

       } else if(selectedStroke4===15){
         selfproduction = selfproduction +4;
         nxtNumber = 10;

       } else if(selectedStroke5===15){
         selfproduction = selfproduction +5;
         nxtNumber = 10;
       }
     }
   } else if(nxtNumber=== 10) {
     if(answerBlock===1){

       if(selectedStroke1=== 15){
         if (selfproduction<3){
         selfproduction = selfproduction+1;
         nxtNumber = 11;
       } else if(selfproduction === 3){
         selfproduction = selfproduction+2;
         nxtNumber = 11;
       } else if(selfproduction>3){
         selfproduction = selfproduction+2;
         nxtNumber = 11;
       }
       } else if(selectedStroke2===15){
         if (selfproduction<3){
         selfproduction = selfproduction+3;
         nxtNumber = 11;
       } else if(selfproduction === 3){
         selfproduction = selfproduction+4;
         nxtNumber = 11;
       } else if(selfproduction>3){
         selfproduction = selfproduction+5;
         nxtNumber = 11;
       }

       }
     }
   } else if (nxtNumber === 11){
     if(answerBlock===1){

       if(selectedStroke1=== 15){
         selfproduction = selfproduction+1;
         nxtNumber = 12;
         pageNumber = 4;

       } else if(selectedStroke2===15){
         selfproduction = selfproduction +2;
         nxtNumber = 12;
         pageNumber = 4;

       } else if(selectedStroke3===15){
         selfproduction = selfproduction +3;
         nxtNumber = 12;
         pageNumber = 4;

       } else if(selectedStroke4===15){
         selfproduction = selfproduction +4;
         nxtNumber = 12;
         pageNumber = 4;

       } else if(selectedStroke5===15){
         selfproduction = selfproduction +5;
         nxtNumber = 12;
         pageNumber = 4;
       }
     }
   }
 }

}

function startQuestion(){
pageNumber===pageNumber++;
answerBlock=1;
}

// scroll function
function mouseWheel(event) {
  print(event.delta);

  scroll += event.delta;

  if (pageNumber===5){
    scroll2 += event.delta;

  }
}

//obj redraw
function objRedraw(){
// obj.redraw(100);
//obj.reset();
}

// resizibility
function windowResized() {
  resizeCanvas(windowWidth,windowHeight, WEBGL);
  return false;
  obj.reset();

}
