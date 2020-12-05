var rand;
var word;
var canvasHeight;
var x = 100;
var input;
var text1;
var outputText = [];
var string1;
var string2;
var turn = 5;
var plantButton, starButton, seasButton;
var bImage;
//var categories = {
//  plants: ["bamboo","coconut","tulsi","banana"],
//  stars: ["Proxima Centauri", "Sirius", "K218", "Sun"],
//  seas : ["Arabian","Caspian","Red","Black"]
//}
//var gameState = "Choose";
//
//function preload(){
//  bImage = loadImage("download.jpg");
//}

function setup() {

  canvasHeight = displayHeight - 150;

  createCanvas(displayWidth, canvasHeight);

//  plantButton = createButton("Plants");
//  starButton = createButton("Stars");
//  seasButton = createButton("Seas");
//
//  plantButton.position(200,200);
//  plantButton.size(100,50);
//  plantButton.style("background-color", "green");
//  starButton.position(320,200);
//  starButton.style("background-color","orange")
//  starButton.size(100,50);
//  seasButton.position(440,200);
//  seasButton.style("background-color", "blue");
//  seasButton.size(100,50);
//
//  //Plants
//  plantButton.mousePressed(function (){
//  starButton.hide();
//  seasButton.hide();
//  gameState = "plants";
//  rand = Math.round(random(0,3));
//  console.log(rand);
  switch(rand){
    case 0: word = "maths";
    break;
    case 1: word = "physics";
    break;
    case 2: word = "chemistry";
    break;
    case 3: word = "biology";
    break;
    default: word = "geography";
    break;
  }

  for(var i = 0; i < word.length; i++){
    x = x + 100;
  
    text1 = createInput();
    text1.position(x,canvasHeight/2);
    text1.size(70,70);
  
    text1.input(myEvent);
    
  } 
 // });

  //Star
// starButton.mousePressed(function (){
//   plantButton.hide();
//   seasButton.hide();
//   gameState = "star";
//   rand = Math.round(random(0,3));
//   console.log(rand);
//   switch(rand){
//     case 0: word = categories.stars[0];
//     break;
//     case 1: word = categories.stars[1];
//     break;
//     case 2: word = categories.stars[2];
//     break;
//     case 3: word  = categories.stars[3];
//     break;
//     default: word = categories.stars[0];
//     break;
//   }
// 
//   for(var i = 0; i < word.length; i++){
//     x = x + 100;
//   
//     text1 = createInput();
//     text1.position(x,canvasHeight/2);
//     text1.size(70,70);
//   
//     text1.input(myEvent);
//     
//   } 
//   });
//
//   seasButton.mousePressed(function (){
//     plantButton.hide();
//     starButton.hide();
//     gameState = "sea";
//     rand = Math.round(random(0,3));
//     console.log(rand);
//     switch(rand){
//       case 0: word = categories.seas[0];
//       break;
//       case 1: word = categories.seas[1];
//       break;
//       case 2: word = categories.seas[2];
//       break;
//       case 3: word = categories.seas[3];
//       break;
//       default: word = categories.seas[0];
//       break;
//     }
//   
//     for(var i = 0; i < word.length; i++){
//       x = x + 100;
//     
//       text1 = createInput();
//       text1.position(x,canvasHeight/2);
//       text1.size(70,70);
//     
//       text1.input(myEvent);
//       
//     } 
//     });
}

//function draw() {
//  background(200);
//
//  fill("red");
//  textSize(36);
//  strokeWeight(12);
//
//  if(gameState === "Choose"){
//    text("Please choose the category you are interested in",displayWidth/2 - 200,100);
//  }
//
//  if(gameState != "Choose"){
//
//    text("After typing press enter to confirm", displayWidth/2, 100);
//    text("The turns left for you is/are: " + Math.floor(turn), 200,200);
//  }
//
//
//  //Checking the word's status incessantly
//if(word === string2 && gameState != "Choose" && gameState != "Done"){
//  if(keyCode === 13){
//  swal({
//    title:"You won! You were great!"
//  })
//  gameState = "Done";
//}
//}
//// Check if the word matches with the string
//if(keyCode === 13 && word != string2 && turn > 0){
//  turn -= 0.5;
//  keyCode = null;
//}
//
//if(turn === 0 && gameState!= "Choose" && gameState != "Done"){
//  swal({
//    title:"You lost! Better luck next time"
//  })
//  gameState = "Done";
//}
//hints();
//  drawSprites();
//}

function myEvent(){

  
  if(this.value().length<2){
    outputText.push(this.value().trim());
    console.log(this.value().length);
  }
  
  string1 = outputText.toString();
  string2 = string1.replace(/,/g,"");

  console.log(string2);
}
//
//function hints(){
//  if(turn === 1){
//  switch(word){
//    case "bamboo": text("Hint: A plant that is eaten by a famous animal from China",200,500);
//    break;
//    case "coconut": text("Hint: A tree found in coastal areas that is similar to palm tree",200,500);
//    break;
//    case "tulsi": text("Hint: A herb that is considered a godess in India",200,500);
//    break;
//    case "banana": text("Hint: A rich source of vitamin B",200,500);
//    break;
//    case "Proxima Centauri": text("Hint: The closest star to the Sun",200,500);
//    break;
//    case "Sirius": text("Hint: The pole star",200,500);
//    break;
//    case "K218": text("Hint: The star around which revolves the K218B",200,500);
//    break;
//    case "Sun": text("Hint: Earth revolves around this star",200,500);
//    break;
//    case "Arabian": text("Hint: The sea that touches Mumbai",200,500);
//    break;
//    case "Caspian": text("Hint: The sea that is near Azerbaijan",200,500);
//    break;
//    case "Red": text("Hint: Suez canal");
//    break;
//    case "Black": text("Hint: Near Turkey");
//    break;
//  }
//}
//}