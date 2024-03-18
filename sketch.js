
let sliderR;
let sliderG;
let sliderB;
let words;
let words2;
let input;
let statement;
let listStatements =[];
let selection;



function setup() {
  createCanvas(windowWidth, 1000);
  sliderR = createSlider (0,255);
  sliderR.position(65, 550);
  sliderR.size(150);
  sliderG = createSlider(0,255);
  sliderG.position(225, 550);
  sliderG.size(150);
  sliderB = createSlider(0,255);
  sliderB.position(385, 550);
  sliderB.size(150);
  
  words = createElement('h2', 'CHANGE MY COLOUR :)')
  words.style('color', 'black')
  words.position(150,480)
  
  words2 = createElement( 'h3', 'choose a shape:')
  words2.style('color', 'black')
  words2.position( 180, 50,)

  selection = createSelect();
  selection.position(330, 72);
  selection.option('SQUARE');
  selection.option('TRIANGLE');
  selection.option('CIRCLE');

  input= createInput();
  input.position(200, 650)

  let button = createButton('GO')
  button.position(input.x + input.width, input.y)
  button.mousePressed(typeWords);
}

function typeWords(){
statement = input.value();
input.value(''); //resets input
listStatements.push(statement);
if( listStatements.length > 5){
listStatements.shift();
}
}

function draw() {

  background(220)
   let Rval = sliderR.value();
   let Gval = sliderG.value();
   let Bval = sliderB.value();

   let x = selection.selected();
   if (x === 'SQUARE'){
     noStroke();
     fill(Rval, Gval, Bval);
    rect(200, 200, 200, 200);
   } else if (x === 'TRIANGLE'){
    noStroke();
     fill(Rval, Gval, Bval);
    triangle (200, 400, 300, 200, 400, 400);
   } else if (x === 'CIRCLE'){
    noStroke();
     fill(Rval, Gval, Bval);
    ellipse(300, 300, 250, 250 )
   }
   
   for(x = 0; x < listStatements.length; x++){
    text(listStatements[x],150, 800 + x * 30) // moves words down a line each time
    textSize(30)
    textStyle(BOLDITALIC)

  }  
 
}

   
   
  

 


