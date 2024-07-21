let xAsteroids = [-540, -600, -400, -550, -350];
let yAsteroids = [-10, 100, 320, 215, -200];
let speeds = [1.3, 2, 1.1, 2.4, 1];
let xYoda1=180, yYoda1=170
let xYoda2 = -50, yYoda2 = 150;
let xYoda3= -60, yYoda3 = 150;
let xYoda4 = -50, yYoda4 = 150
let xLightSaber1 = -50, yLightSaber1 = 150;
let xLightSaber2 = -60, yLightSaber2 = 150;
let xLightSaber3 = -50, yLightSaber3 = 150;
let xPram1 = 30, yPram1 = 380;
let xPram2 = 20, yPram2 = 380;
let xPram3 = 30, yPram3 = 380;
let xUFO = [-300, -380, -400];
let yUFO = [-170, 30, 220];
let introScreen=true;
let screen1 = false;
let screen2 = false;
let screen3=false;
let screen4=false;
let screen5=false;
let quizScreen1 = false;
let quizScreen2 = false;
let quizScreen3 = false;
let endScreen = false;
let earth=false;
let mars=false;
let jupiter=false;
let planets;
let intervalSpeed =  [0, 0];
let intervalSpeed2 = [0, 0];
let intervalSpeed3 = [0, 0];
let intervalSpeed4 = [0, 0];
let intervalSpeed5 = [0, 0];
let intervalSpeed6 = [0, 0];
let intervalSpeed7 = [0, 0];
let intervalSpeed8 = [0, 0];
let timer = 0;
let timer2 = 0;

let yodaSpeechArray = ["It is now time to test your knowledge on if else if statements with a mini quiz... \nGood luck!", 
                       "Answer the following 3 questions to see if you can truly master the power of \nknowledge. Hover your mouse over the option you believe is correct!",
                      "Congratulations, you have learned how to use if-else-if statements! May the force be\nwith you!",
                     "Hello, my name is Yoda. I will be teaching \nyou about If Else If Statements. Press on\n\t\t\t\tcontinue to begin this journey!",
                      "I'll guide you through three important planets of our galaxy. Click on the planet buttons\nto make them appear, and continue to see how the if-else-if statements work!",
                      "The first step is the code shown beside Yoda that checks if the buttons for Earth, Mars,\nor Jupiter are clicked with the corresponding boolean condition.",
                      "The second step is calling the function that uses if statements. Without calling the\nfunction, the planets would not appear...Or you can use the force."];
let quizSpeechArray = ["What is the output of the code?",
                      "a) Mustafar",
                      "b) Alderaan",
                      "c) Mandalore",
                      "a) Hostile encounter",
                      "b) Nice encounter",
                      "c) No encounter",
                      "This code will print Dim star",
                      "a) True",
                      "b) False"];

function preload(){
  planets=loadImage("Planets.png");
}


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(40, 28, 80);
  
  if (introScreen==true){

  //stars
  fill(255)
  noStroke();
  circle(random() * width, random() * height, random(1, 5));
  circle(random() * width, random() * height, random(1, 5));

  updateAsteroids();
  //yoda in intro screen
  drawYoda(xYoda1,yYoda1)
  
  //Ufo's moving in intro screen
  
  //title
  fill(177,156,217)
  stroke(255)
  strokeWeight(6)
  textFont("Trebuchet MS")
  textSize(60)
  text("IF ELSE IF STATEMENTS", 100, 110)
  
  strokeWeight(2)
  textSize(20)
  text("With Yoda",335,145)
  
  //start bar
  stroke(0)
  fill(173,216,230)
  strokeWeight(5)
  if (mouseX>321 && mouseX<439 && mouseY>504 && mouseY <547){
    fill(140,185,200)
  }
  rect(320,500,120,50,5)
  noStroke();
  fill(255)
  textSize(20)
  text("START", 353, 532)
    
  }//intro screen ending bracket
  
  //if start button is clicked
  if (screen1==true){
    introScreen=false;
    
    //stars
    fill(255)
    noStroke();
    circle(random() * width, random() * height, random(1, 5));
    circle(random() * width, random() * height, random(1, 5));
    
    updateUFO();
    
    if (intervalSpeed5[1] < yodaSpeechArray[3].length) {
      intervalSpeed5[1] += 0.5;
    }
    //yoda
    drawYoda(xYoda1,yYoda1)
    //textbox
    fill(250)
    rect(185,90,400,80,5)
    fill(0)
    textSize(20)
    text(yodaSpeechArray[3].substring(0, intervalSpeed5[1]),190,110);
    
    //back bar
    stroke(255,0,0)
    fill(0)
    strokeWeight(3)
    if (mouseX>218 && mouseX<340 && mouseY>499 && mouseY <547){
    fill(255,0,0)
      }
    rect(233,500,120,50,5)
    noStroke();
    fill(255)
    textSize(20)
    text("Back", 270, 532)
    
    //Continue bar
    stroke(0,128,0)
    fill(0)
    strokeWeight(3)
    if (mouseX>407 && mouseX<532 && mouseY>499 && mouseY <547){
    fill(0,128,0)
      }
    rect(408,500,120,50,5)
    noStroke();
    fill(255)
    textSize(20)
    text("Continue", 428, 532)
    
    
  }
  //screen 2
  
  if (screen2==true){
    screen1=false;
    
    //stars
    fill(255)
    noStroke();
    circle(random() * width, random() * height, random(1, 5));
    circle(random() * width, random() * height, random(1, 5));
    
    //text block background
    stroke(85, 65, 105)
    fill(100,55,110)
    rect(0,520,800,80)
    
    if (intervalSpeed6[1] < yodaSpeechArray[4].length) {
      intervalSpeed6[1] += 0.5;
      
    }
    noStroke();
    fill(255)
    textSize(20)
    text(yodaSpeechArray[4].substring(0, intervalSpeed6[1]),9,550)
    
    drawYoda(-76,260)
    
     //earth bar
    stroke(0)
    fill(173,216,230)
    strokeWeight(3)
    if (mouseX>300 && mouseX<420 && mouseY>447 && mouseY<492){
    fill(140,185,200)
      }
    rect(300,445,120,50,5)
    noStroke();
    fill(255)
    textSize(20)
    text("EARTH", 330, 476)
    
    //mars bar
     stroke(0)
    fill(173,216,230)
    strokeWeight(3)
    if (mouseX>300 && mouseX<420 && mouseY>385 && mouseY<430){
    fill(140,185,200)
      }
    rect(300,385,120,50,5)
    noStroke();
    fill(255)
    textSize(20)
    text("MARS", 337, 417)
    
    //jupiter bar
     stroke(0)
    fill(173,216,230)
    strokeWeight(3)
    if (mouseX>300 && mouseX<420 && mouseY>325 && mouseY<375 ){
    fill(140,185,200)
      }
    rect(300,325,120,50,5)
    noStroke();
    fill(255)
    textSize(20)
    text("JUPITER", 324, 356)
    
    //if earth button is clicked it will appear
    if (earth==true){
      drawEarth(-267,-165);
    }
    
    //if the jupiter button is clicked it will appear
    if (jupiter==true){
      drawJupiter(0,-165);
    }
    
    //if the mars button is clicked it will appear
    if (mars==true){
      drawMars(267,-165);
    }
    
    //back bar
    stroke(255,0,0)
    fill(0)
    strokeWeight(3)
    if (mouseX>500 && mouseX<620 && mouseY>443 && mouseY<497){
    fill(255,0,0)
      }
    rect(500,445,120,50,5)
    noStroke();
    fill(255)
    textSize(20)
    text("Back", 538, 476)
    
    //continue bar
    stroke(0,128,0)
    fill(0)
    strokeWeight(3)
    if (mouseX>650 && mouseX<770 && mouseY>440 && mouseY<490){
    fill(0,128,0)
      }
    rect(650,445,120,50,5)
    noStroke();
    fill(255)
    textSize(20)
    text("Continue", 668, 476)
    
  }
  
  //screen 3
  if (screen3==true){
    screen2=false;
    
    //stars
    fill(255)
    noStroke();
    circle(random() * width, random() * height, random(1, 5));
    circle(random() * width, random() * height, random(1, 5));
    
    //3 planets appear
    drawEarth(-267,-165);
    drawJupiter(0,-165);
    drawMars(267,-165);
    
    //text block background
    stroke(85, 65, 105)
    fill(100,55,110)
    rect(0,520,800,80)
    
    if (intervalSpeed7[1] < yodaSpeechArray[5].length) {
      intervalSpeed7[1] += 0.5;
    }
      
    noStroke();
    fill(250);
    textSize(20)
    text(yodaSpeechArray[5].substring(0, intervalSpeed7[1]),9,550)
    //yoda
    drawYoda(-76,259)
    
    //image of code
    stroke(100,55,110)
    strokeWeight(4)
    image(planets, 270, 165,510);
    
    //rect 1 to go over earth code
    noFill()
    stroke(50,205,50)
    strokeWeight(2)
    rect(270,163.5,510,90)
    
    //rect 2 to go over mars code
    noFill()
    stroke(255,234,0)
    strokeWeight(2)
    rect(270,256.5,510,88)
    
    //rect 3 to go over jupiter code
    noFill()
    stroke(255,0,12)
    strokeWeight(2)
    rect(270,346,510,90)
  
    
     //back bar
    stroke(255,0,0)
    fill(0)
    strokeWeight(3)
    if (mouseX>500 && mouseX<620 && mouseY>443 && mouseY<497){
    fill(255,0,0)
      }
    rect(500,445,120,50,5)
    noStroke();
    fill(255)
    textSize(20)
    text("Back", 538, 476)
    
    //continue bar
    stroke(0,128,0)
    fill(0)
    strokeWeight(3)
    if (mouseX>650 && mouseX<770 && mouseY>440 && mouseY<490){
    fill(0,128,0)
      }
    rect(650,445,120,50,5)
    noStroke();
    fill(255)
    textSize(20)
    text("Continue", 668, 476)
    
  }
  
  if (screen4==true){
    screen3=false;
    
    //stars
    fill(255)
    noStroke();
    circle(random() * width, random() * height, random(1, 5));
    circle(random() * width, random() * height, random(1, 5));
    
    //yoda
    drawYoda(-76,259)
    
    //planets
    drawEarth(-267,-165);
    drawJupiter(0,-165);
    drawMars(267,-165);
    
    //text block background
    stroke(85, 65, 105)
    fill(100,55,110)
    rect(0,520,800,80)
    
    if (intervalSpeed8[1] < yodaSpeechArray[6].length) {
      intervalSpeed8[1] += 0.5;
    }
    
    noStroke();
    fill(250)
    textSize(20)
    text(yodaSpeechArray[6].substring(0, intervalSpeed8[1]),9,550)
    
    //text of planets being called
    stroke(0)
    strokeWeight(3)
    fill(255)
    text("if (earth==true){\n\t\tdrawEarth(-267,-165);\n}",19,128)
    text("if (jupiter==true){\n\t\tdrawJupiter(0,-165);\n}",300,128)
    text("if (mars==true){\n\t\tdrawMars(267,-165);\n}",565,128)
    
    //rect 1 to go over earth 
    noFill()
    stroke(50,205,50)
    strokeWeight(2)
    rect(5,70,255,145)
    
    //rect 2 to go over jupiter  
    noFill()
    stroke(255,234,0)
    strokeWeight(2)
    rect(270,70,259,145)
    
    //rect 3 to go over mars  
    noFill()
    stroke(255,0,12)
    strokeWeight(2)
    rect(537,70,259,145)
    
    //back bar
    stroke(255,0,0)
    fill(0)
    strokeWeight(3)
    if (mouseX>500 && mouseX<620 && mouseY>443 && mouseY<497){
    fill(255,0,0)
      }
    rect(500,445,120,50,5)
    noStroke();
    fill(255)
    textSize(20)
    text("Back", 538, 476)
    
    //continue bar
    stroke(0,128,0)
    fill(0)
    strokeWeight(3)
    if (mouseX>650 && mouseX<770 && mouseY>440 && mouseY<490){
    fill(0,128,0)
      }
    rect(650,445,120,50,5)
    noStroke();
    fill(255)
    textSize(20)
    text("Continue", 668, 476)
    
  }
  
  if (screen5) {
    timer += 1;
    
    updateAsteroids2();
   

    // Stars
    fill(255);
    noStroke();
    circle(random() * width, random() * height, random(1, 5));
    circle(random() * width, random() * height, random(1, 5));

    drawPram(xPram1, yPram1);
    drawYoda(xYoda2, yYoda2);
    drawLightSaber(xLightSaber1, yLightSaber1);

    if (xYoda2 < 175) {
      xYoda2 += 1;
      xLightSaber1 += 1;
      xPram1 += 1;
    }

    // Text block background
    stroke(85, 65, 105);
    fill(100, 55, 110);
    rect(0, 520, 800, 80);

    noStroke();
    fill(0);
    textSize(20);
    

    // Back button
    stroke(255, 0, 0);
    fill(0);
    strokeWeight(3);
    if (mouseX > 500 && mouseX < 620 && mouseY > 443 && mouseY < 497) {
      fill(255, 0, 0);
    }
    rect(520, 445, 120, 50, 5);
    noStroke();
    fill(255);
    textFont("Trebuchet MS");
    textSize(20);
    text("Back", 558, 476);

    // Continue button
    stroke(0, 128, 0);
    fill(0);
    strokeWeight(3);
    if (mouseX > 650 && mouseX < 770 && mouseY > 440 && mouseY < 490) {
      fill(0, 128, 0);
    }
    rect(670, 445, 120, 50, 5);
    noStroke();
    fill(255);
    textSize(20);
    text("Continue", 690, 476);

    if (timer >= 230) {
      fill(255);
      textSize(20);
      text(yodaSpeechArray[0].substring(0, intervalSpeed[0]), 20, 550);
      if (intervalSpeed[0] < yodaSpeechArray[0].length) {
        intervalSpeed[0] += 0.5;
      }
    }
  }
  if (quizScreen1) {
    screen5 = false;


    // Stars
    fill(255);
    noStroke();
    circle(random() * width, random() * height, random(1, 5));
    circle(random() * width, random() * height, random(1, 5));
    
    // Code box
    
    fill(0)
    rect(540,55,260,350,10)
    noStroke();
    textFont("Trebuchet MS")
    textSize(20)
    fill(255)
    text('planet_size = 12000', 555, 105);
  text('if (planet_size > 15000)\ {', 555, 155);
  text('    print("Mustafar") \n \ }', 565, 175);
  text('else if (planet_size > 8000)\ {', 555, 230);
  text('    print("Alderaan") \n \ }', 556, 250);
  text('else \ {', 555, 330);
  text('  print("Mandalore") \n \}', 555, 355);
    
    // Option box
    
    fill(255)
    rect(30, 30, 380, 130, 20);
    noStroke();
    textSize(20);
    fill(0);
    text(quizSpeechArray[0].substring(0, intervalSpeed[1]), 50, 60);
    text(quizSpeechArray[1].substring(0, intervalSpeed[1]), 50, 100);
    text(quizSpeechArray[2].substring(0, intervalSpeed[1]), 200, 100);
    text(quizSpeechArray[3].substring(0, intervalSpeed[1]), 50, 140);
    
    if (mouseX > 200 && mouseX < 300 && mouseY > 80 && mouseY < 100){
      text("Correct!", 240, 140);
    }
    
    if((mouseX > 50 && mouseX < 160 && mouseY > 80 && mouseY < 180) || (mouseX > 50 && mouseX < 160 && mouseY > 130 && 150)){
      text("Try Again....", 240, 140);
    }
    
    
    // Back button
    stroke(255, 0, 0);
    fill(0);
    strokeWeight(3);
    if (mouseX > 500 && mouseX < 620 && mouseY > 443 && mouseY < 497) {
      fill(255, 0, 0);
    }
    rect(520, 445, 120, 50, 5);
    noStroke();
    fill(255);
    textFont("Trebuchet MS");
    textSize(20);
    text("Back", 558, 476);

    // Continue button
    stroke(0, 128, 0);
    fill(0);
    strokeWeight(3);
    if (mouseX > 650 && mouseX < 770 && mouseY > 440 && mouseY < 490) {
      fill(0, 128, 0);
    }
    rect(670, 445, 120, 50, 5);
    noStroke();
    fill(255);
    textSize(20);
    text("Continue", 690, 476);

    // Text block background
    stroke(85, 65, 105);
    fill(100, 55, 110);
    rect(0, 520, 800, 80);

    noStroke();
    fill(0);
    textSize(20);

    drawPram(xPram2, yPram2);
    drawYoda(xYoda3, yYoda3);
    drawLightSaber(xLightSaber2, yLightSaber2);

    if (intervalSpeed[1] < yodaSpeechArray[1].length) {
      intervalSpeed[1] += 0.5;
    }
    
    
    fill(255);
    noStroke();
    textSize(20);
    text(yodaSpeechArray[1].substring(0, intervalSpeed[1]), 20, 550);
  }
  
  if(quizScreen2){
    quizScreen1 = false;
      

    // Stars
    fill(255);
    noStroke();
    circle(random() * width, random() * height, random(1, 5));
    circle(random() * width, random() * height, random(1, 5));
    
     // Code box
    
    fill(0)
    rect(540,55,260,350,10)
    noStroke();
    textFont("Trebuchet MS")
    textSize(20)
    fill(255)
    text('alienSignal = 7', 555, 105);
    text('if (alienSignal > 8) \{', 555, 155);
    text('    print("Hostile \nencounter") \n \ }', 565, 175);
    text('else if (alienSignal > 5)\ {', 555, 250);
    text('    print("Nice encounter") \n \ }', 556, 280);
    text('else \ {', 555, 330);
    text('  print("No enounter") \n \}', 555, 355);
    
    // Option box
    fill(255)
    rect(30, 30, 380, 130, 20);
    noStroke();
    textSize(20);
    fill(0);
    text(quizSpeechArray[0].substring(0, intervalSpeed2[1]), 50, 60);
    text(quizSpeechArray[4].substring(0, intervalSpeed2[1]), 50, 100);
    text(quizSpeechArray[5].substring(0, intervalSpeed2[1]), 245, 100);
    text(quizSpeechArray[6].substring(0, intervalSpeed2[1]), 50, 140);
    
     if (mouseX > 245 && mouseX < 400 && mouseY > 80 && mouseY < 100){
      text("Correct!", 240, 140);
    }
    
    if((mouseX > 50 && mouseX < 230 && mouseY > 80 && mouseY < 180) || (mouseX > 50 && mouseX < 190 && mouseY > 130 && 150)){
      text("Try Again....", 240, 140);
      
    }
     // Back button
    stroke(255, 0, 0);
    fill(0);
    strokeWeight(3);
    if (mouseX > 500 && mouseX < 620 && mouseY > 443 && mouseY < 497) {
      fill(255, 0, 0);
    }
    rect(520, 445, 120, 50, 5);
    noStroke();
    fill(255);
    textFont("Trebuchet MS");
    textSize(20);
    text("Back", 558, 476);

    // Continue button
    stroke(0, 128, 0);
    fill(0);
    strokeWeight(3);
    if (mouseX > 650 && mouseX < 770 && mouseY > 440 && mouseY < 490) {
      fill(0, 128, 0);
    }
    rect(670, 445, 120, 50, 5);
    noStroke();
    fill(255);
    textSize(20);
    text("Continue", 690, 476);

    // Text block background
    stroke(85, 65, 105);
    fill(100, 55, 110);
    rect(0, 520, 800, 80);
    

    drawPram(xPram2, yPram2);
    drawYoda(xYoda3, yYoda3);
    drawLightSaber(xLightSaber2, yLightSaber2);
    
     if (intervalSpeed2[1] < yodaSpeechArray[1].length) {
      intervalSpeed2[1] += 0.5;
    }
    
    
    fill(255);
    noStroke();
    textSize(20);
    text(yodaSpeechArray[1], 20, 550);

  }
  
  if(quizScreen3){
    quizScreen2 = false;
    
    // Stars
    fill(255);
    noStroke();
    circle(random() * width, random() * height, random(1, 5));
    circle(random() * width, random() * height, random(1, 5));
    
     // Code box
    
    fill(0)
    rect(540,55,260,350,10)
    noStroke();
    textFont("Trebuchet MS")
    textSize(20)
    fill(255)
    text('starBright = 2.5', 555, 105);
    text('if (starBright > 3.0) \{', 555, 155);
    text('    print("Very bright star") \n \ }', 565, 175);
    text('else if (starBright > 1.5)\ {', 555, 250);
    text('    print("Kind of bright star") \n \ }', 540, 280);
    text('else \ {', 555, 330);
    text('  print("Dim Star") \n \}', 555, 355);
    
    // Option box
    fill(255)
    rect(30, 30, 380, 130, 20);
    noStroke();
    textSize(20);
    fill(0);
    
    text(quizSpeechArray[7].substring(0, intervalSpeed3[1]), 50, 60);
    text(quizSpeechArray[8].substring(0, intervalSpeed3[1]), 50, 100);
    text(quizSpeechArray[9].substring(0, intervalSpeed3[1]), 245, 100);
    
    if (mouseX > 245 && mouseX < 320 && mouseY > 80 && mouseY < 100){
      text("Correct!", 150, 140);
    }
    
    if(mouseX > 50 && mouseX < 110 && mouseY > 80 && mouseY < 180){
      text("Try Again....", 150, 140);
      
    }
     // Back button
    stroke(255, 0, 0);
    fill(0);
    strokeWeight(3);
    if (mouseX > 500 && mouseX < 620 && mouseY > 443 && mouseY < 497) {
      fill(255, 0, 0);
    }
    rect(520, 445, 120, 50, 5);
    noStroke();
    fill(255);
    textFont("Trebuchet MS");
    textSize(20);
    text("Back", 558, 476);

    // Continue button
    stroke(0, 128, 0);
    fill(0);
    strokeWeight(3);
    if (mouseX > 650 && mouseX < 770 && mouseY > 440 && mouseY < 490) {
      fill(0, 128, 0);
    }
    rect(670, 445, 120, 50, 5);
    noStroke();
    fill(255);
    textSize(20);
    text("Continue", 690, 476);

    // Text block background
    stroke(85, 65, 105);
    fill(100, 55, 110);
    rect(0, 520, 800, 80);
    

    drawPram(xPram2, yPram2);
    drawYoda(xYoda3, yYoda3);
    drawLightSaber(xLightSaber2, yLightSaber2);
    
     if (intervalSpeed3[1] < yodaSpeechArray[1].length) {
      intervalSpeed3[1] += 1;
    }
    
    
    fill(255);
    noStroke();
    textSize(20);
    text(yodaSpeechArray[1], 20, 550);
  }
  
  if (endScreen) {
    quizScreen3 = false;
    timer2 ++;
    
    updateUFO2();
    

    // Stars
    fill(255);
    noStroke();
    circle(random() * width, random() * height, random(1, 5));
    circle(random() * width, random() * height, random(1, 5));
    
    // Text block background
    stroke(85, 65, 105);
    fill(100, 55, 110);
    rect(0, 520, 800, 80);
    
    drawPram(xPram3, yPram3)
    drawYoda(xYoda4, yYoda4)
    drawLightSaber(xLightSaber3, yLightSaber3)
    
     if (xYoda4 < 175) {
      xYoda4 += 1;
      xLightSaber3 += 1;
      xPram3 += 1;
    }

    if (timer2 >= 230) {
      fill(255);
      textSize(20);
      text(yodaSpeechArray[2].substring(0, intervalSpeed[1]), 20, 550);
      
    }
    // Text block background
    stroke(85, 65, 105);
    fill(100, 55, 110);
    rect(0, 520, 800, 80);

    noStroke();
    fill(0);
    textSize(20);
    

    // Back button
    stroke(255, 0, 0);
    fill(0);
    strokeWeight(3);
    if (mouseX > 500 && mouseX < 620 && mouseY > 443 && mouseY < 497) {
      fill(255, 0, 0);
    }
    rect(520, 445, 120, 50, 5);
    noStroke();
    fill(255);
    textFont("Trebuchet MS");
    textSize(20);
    text("Back", 558, 476);

    // Reset button
    stroke(0, 128, 0);
    fill(0);
    strokeWeight(3);
    if (mouseX > 650 && mouseX < 770 && mouseY > 440 && mouseY < 490) {
      fill(0, 128, 0);
    }
    rect(670, 445, 120, 50, 5);
    noStroke();
    fill(255);
    textSize(20);
    text("Reset", 705, 476);
    
    if (timer2 >= 230) {
      fill(255);
      textSize(20);
      text(yodaSpeechArray[2].substring(0, intervalSpeed4[1]), 20, 550);
      if (intervalSpeed4[1] < yodaSpeechArray[2].length) {
        intervalSpeed4[1] += 0.5;
      }
    }
    
  }
  
  
  
  
  
  
}

//function for asteroids
  function drawAsteroid(xAsteroid, yAsteroid) {
    fill(200);
    ellipse(xAsteroid + 300, yAsteroid + 250, 100);
    fill(100);
    ellipse(xAsteroid + 280, yAsteroid + 230, 30); // Crater 1
    ellipse(xAsteroid + 330, yAsteroid + 240, 20); // Crater 2
    ellipse(xAsteroid + 290, yAsteroid + 270, 20); // Crater 3
    
  }

  function updateAsteroids() {
  for (let i = 0; i < xAsteroids.length; i++) {
    drawAsteroid(xAsteroids[i], yAsteroids[i]);
    xAsteroids[i] += speeds[i];
    
    // Bring back the asteroids if they move off screen
    if (xAsteroids[i] > 700) {
      xAsteroids[i] = -350;
    }
  }
}

//function for asteroids
  function drawAsteroid2(xAsteroid, yAsteroid) {
    fill(193,68,14);
    ellipse(xAsteroid + 300, yAsteroid + 250, 100);
    fill(69,24,4);
    ellipse(xAsteroid + 280, yAsteroid + 230, 30); // Crater 1
    ellipse(xAsteroid + 330, yAsteroid + 240, 20); // Crater 2
    ellipse(xAsteroid + 290, yAsteroid + 270, 20); // Crater 3
    
  }

function updateAsteroids2() {
  for (let i = 0; i < xAsteroids.length; i++) {
    drawAsteroid2(xAsteroids[i], yAsteroids[i]);
    xAsteroids[i] += speeds[i];
    
    // Bring back the asteroids if they move off screen
    if (xAsteroids[i] > 700) {
      xAsteroids[i] = -350;
    }
  }
}
  
  function drawYoda(xYoda,yYoda){
  
  //moves yoda
  let moveYoda = 3 * sin(frameCount * 0.09)
  yYoda += moveYoda;
    
 //face
  fill(166,225,138)
  noStroke();
  ellipse(xYoda+200,yYoda+100,140,130)
  
  //eyes
  //black yees
  fill(0);
  ellipse(xYoda+170,yYoda+105,27,27)
  ellipse(xYoda+230,yYoda+105,27,27)
  
  //white eyes
  fill(255);
  ellipse(xYoda+167,yYoda+102,7,7)
  ellipse(xYoda+162,yYoda+106,3,3)
  ellipse(xYoda+227,yYoda+102,7,7)
  ellipse(xYoda+233,yYoda+106,3,3)
  
  //mouth
  noFill()
  stroke(0);
  strokeWeight(2)
  arc(xYoda+200, yYoda+140, 13, 7, PI, 0);
  
  //ears
  fill(166,225,138)
  noStroke();
  //left ear
  triangle(xYoda+149,yYoda+55,xYoda+137,yYoda+91,xYoda+80,yYoda+69)
  fill(255,192,203);
  triangle(xYoda+143,yYoda+66,xYoda+137,yYoda+80,xYoda+105,yYoda+69)
  //right ear
  fill(166,225,138)
  triangle(xYoda+250,yYoda+55,xYoda+268,yYoda+91,xYoda+320,yYoda+69)
  fill(255,192,203)
  triangle(xYoda+258,yYoda+66,xYoda+261,yYoda+80,xYoda+291,yYoda+69)
  
  //body
  fill(175,128,79)
  rect(xYoda+145,yYoda+185,110,60,10)
  fill(188,158,130)
  rect(xYoda+128,yYoda+150,145,45,5)
  
  //arms
  fill(166,225,138)
  ellipse(xYoda+130,yYoda+188,25,25)
  ellipse(xYoda+270,yYoda+188,25,25)
  
  //feet
  ellipse(xYoda+173,yYoda+249,25,15)
  ellipse(xYoda+222,yYoda+249,25,15)
  
  }

// function for updating the UFOs
function updateUFO() {
  for (let i = 0; i < xUFO.length; i++) {
    drawUFO(xUFO[i], yUFO[i]);
    xUFO[i] += speeds[i];
    
    // Bring back the asteroids if they move off screen
    if (xUFO[i] > 700) {
      xUFO[i] = -350;
    }
  }
}

//function for UFOS
function drawUFO(xUFO, yUFO){
 // Draw the UFO's main body
  fill(150); // Light gray color
  ellipse(xUFO + 300, yUFO + 250, 200, 80); // Main body (ellipse)

  // Draw the UFO's dome
  fill(200); // Lighter gray color
  arc(xUFO + 300, yUFO + 230, 100, 100, PI, 0); // Dome (half ellipse)

  // Draw lights on the UFO
  fill(255, 0, 0); // Red light
  ellipse(xUFO + 240, yUFO + 260, 20, 20); // Left light
  fill(0, 255, 0); // Green light
  ellipse(xUFO + 300, yUFO + 270, 20, 20); // Middle light
  fill(0, 0, 255); // Blue light
  ellipse(xUFO + 360, yUFO + 260, 20, 20); // Right light
}
// function for updating the UFOs
function updateUFO2() {
  for (let i = 0; i < xUFO.length; i++) {
    drawUFO2(xUFO[i], yUFO[i]);
    xUFO[i] += speeds[i];
    
    // Bring back the asteroids if they move off screen
    if (xUFO[i] > 700) {
      xUFO[i] = -350;
    }
  }
}

function drawUFO2(xUFO, yUFO){
 // Draw the UFO's main body
  fill(255); // Light gray color
  ellipse(xUFO + 300, yUFO + 250, 200, 80); // Main body (ellipse)

  // Draw the UFO's dome
  fill(200); // Lighter gray color
  arc(xUFO + 300, yUFO + 230, 100, 100, PI, 0); // Dome (half ellipse)

  // Draw lights on the UFO
  fill(255, 0, 0); // Red light
  ellipse(xUFO + 240, yUFO + 260, 20, 20); // Left light
  fill(0, 255, 0); // Green light
  ellipse(xUFO + 300, yUFO + 270, 20, 20); // Middle light
  fill(0, 0, 255); // Blue light
  ellipse(xUFO + 360, yUFO + 260, 20, 20); // Right light
}

//Function that draws the Lightsaber
function drawLightSaber(xLightSaber, yLightSaber) {
  
  let moveYoda = 3 * sin(frameCount * 0.1)
  yLightSaber += moveYoda;
  
  fill(100);
  rect(xLightSaber + 243, yLightSaber + 165, 60, 10, 5);
  rect(xLightSaber + 240, yLightSaber + 160, 70, 5, 5);
  rect(xLightSaber + 262, yLightSaber + 180, 20, 30, 5);
  rect(xLightSaber + 253, yLightSaber + 175, 40, 5, 5);

  fill(0, 255, 0);
  rect(xLightSaber + 264, yLightSaber + 30, 20, 130, 5);

  noFill();
  stroke(0, 255, 0, 100);
  strokeWeight(8);
  rect(xLightSaber + 254, yLightSaber + 28, 40, 130, 5);

  strokeWeight(1);
}

//Function that draws the pram
function drawPram(xPram1, yPram1) {
  fill(220, 220, 220);
  noStroke();
  arc(xPram1 + 120, yPram1 + 30, 300, 200, PI, TWO_PI);
  arc(xPram1 + 120, yPram1 + 30, 300, 200, 0, PI, OPEN);

  fill(80);
  arc(xPram1 + 120, yPram1 + 30, 250, 150, PI, TWO_PI);

  fill(150, 150, 150);
  rect(xPram1 + 45, yPram1 + 10, 60, 15, 3);
  fill(255, 204, 0);
  rect(xPram1 + 50, yPram1 + 15, 10, 5, 1);
  rect(xPram1 + 65, yPram1 + 15, 10, 5, 1);
  rect(xPram1 + 80, yPram1 + 15, 10, 5, 1);

  fill(180, 180, 180);
  ellipse(xPram1 + 200, yPram1 + 30, 30, 30);
  fill(255, 204, 0);
  triangle(xPram1 + 190, yPram1 + 30, xPram1 + 210, yPram1 + 30, xPram1 + 200, yPram1 + 20);

  fill(180, 180, 180);
  rect(xPram1 + 70, yPram1 + 80, 100, 10);
  rect(xPram1 + 90, yPram1 + 90, 60, 10);

  fill(0, 0, 0, 50);
  arc(xPram1 + 120, yPram1 + 30, 300, 200, PI, TWO_PI);
  fill(255, 255, 255, 50);
  arc(xPram1 + 120, yPram1 + 10, 250, 100, PI, TWO_PI);
}

//function for earth
  function drawEarth(planetX,planetY){
  
  //move earth
  let movePlanet = 1 * sin(frameCount * 0.1)
  planetX += movePlanet;
  planetY += movePlanet;
    
  fill(40,122,184)
  stroke(30,110,170);
  strokeWeight(5)
  ellipse(planetX+400,planetY+300,250,250)
  noStroke();
  fill(0,128,0)
  ellipse(planetX+420,planetY+203,75,50)
  ellipse(planetX+390,planetY+390,90,45)
  ellipse(planetX+310,planetY+280,50,40)
  ellipse(planetX+490,planetY+300,70,40)
  ellipse(planetX+400,planetY+300,40,40)
  ellipse(planetX+320,planetY+340,40,40)
  ellipse(planetX+480,planetY+360,20,20)
  ellipse(planetX+355,planetY+235,30,20)
}

//function for jupiter
  function drawJupiter(planetX,planetY){
    
  //move jupiter 
  let movePlanet = 1 * sin(frameCount * 0.1)
  planetX += movePlanet;
  planetY -= movePlanet;
    
  fill(216,202,157)
  stroke(210,190,145);
  strokeWeight(5)
  ellipse(planetX+400,planetY+300,250,250)
  noStroke();
  fill(227,220,203)
  ellipse(planetX+420,planetY+203,75,50)
  ellipse(planetX+390,planetY+390,90,45)
  ellipse(planetX+310,planetY+280,50,40)
  ellipse(planetX+490,planetY+300,70,40)
  ellipse(planetX+400,planetY+300,40,40)
  ellipse(planetX+320,planetY+340,40,40)
  ellipse(planetX+480,planetY+360,20,20)
  ellipse(planetX+355,planetY+235,30,20)
  }

//function for mars
  function drawMars(planetX,planetY){
    
  //move mars
  let movePlanet = 1 * sin(frameCount * 0.115)
  planetX += movePlanet;
  planetY += movePlanet;
  
  fill(193,68,14)
  stroke(180,58,7);
  strokeWeight(5)
  ellipse(planetX+400,planetY+300,250,250)
  noStroke();
  fill(69,24,4)
  ellipse(planetX+420,planetY+203,75,50)
  ellipse(planetX+390,planetY+390,90,45)
  ellipse(planetX+310,planetY+280,50,40)
  ellipse(planetX+490,planetY+300,70,40)
  ellipse(planetX+400,planetY+300,40,40)
  ellipse(planetX+320,planetY+340,40,40)
  ellipse(planetX+480,planetY+360,20,20)
  ellipse(planetX+355,planetY+235,30,20)
  }


  function mouseClicked(){
    //start clicked
    if (mouseX>321 && mouseX<439 && mouseY>504 && mouseY <547){
      screen1 = true;
    }
    //back clicked (on screen 1)
    else if (mouseX>218 && mouseX<340 && mouseY>499 && mouseY <547 & introScreen==false & screen1 == true){
      screen1 = false;
      introScreen = true;
    }
    //continue clicked (goes to screen 2)
    else if (mouseX>405 && mouseX<530 && mouseY>501 && mouseY<549 & introScreen==false && screen1 == true){
      screen1=false;
      screen2=true;
    }
    
    //earth button clicked
    if (mouseX>300 && mouseX<420 && mouseY>447 && mouseY<492 && screen2==true){
      earth = true;
    }
    //mars button clicked
    else if (mouseX>300 && mouseX<420 && mouseY>385 && mouseY<430 && screen2==true){
      mars = true;
    }
    //jupiter button clicked
    else if (mouseX>300 && mouseX<420 && mouseY>325 && mouseY<375 && screen2==true){
      jupiter = true;
    }
    
    //back button clicked on screen 2 
    if (mouseX>500 && mouseX<620 && mouseY>443 && mouseY<497 && screen2==true){
      screen2=false;
      screen1=true;
      earth = false;
      mars = false
      jupiter = false;
    }
    //continue button clicked on screen 2 ( goes to screen 3 )
    else if (mouseX>650 && mouseX<770 && mouseY>440 && mouseY<490 && screen2==true){
      screen2=false;
      screen3=true;
    }
    //back button clicked on screen 3 (goes to screen 2)
    else if (mouseX>500 && mouseX<620 && mouseY>443 && mouseY<497 && screen3==true){
      screen2=true;
      screen3=false;
    }
    //continue button clicked on screen 3 (goes to screen 4)
    else if (mouseX>650 && mouseX<770 && mouseY>440 && mouseY<490 && screen3==true){
      screen3=false;
      screen4=true;
    }
    //back button clicked on screen 4 (goes back to screen 3)
    else if (mouseX>500 && mouseX<620 && mouseY>443 && mouseY<497 && screen4==true){
      screen3=true;
      screen4=false;
    }
    //continue button clicked on screen 4 (goes to screen 5)
    else if (mouseX>650 && mouseX<770 && mouseY>440 && mouseY<490 && screen4==true){
      screen4=false;
      screen5=true;
    }
    
    //back button clicked on screen 5 (goes back to screen 4);
   else if (mouseX>500 && mouseX<620 && mouseY>443 && mouseY<497 && screen5==true){
      screen4=true;
      screen5=false;
   }
    //continue button clicked on screen 5 (goes to quizScreen1)
    else if (mouseX > 650 && mouseX < 770 && mouseY > 440 && mouseY < 490 && screen5 == true)  {
    screen5 = false;
    quizScreen1 = true;
  }
    //back button clicked on quizScreen1 (goes back to screen 5)
    else if (mouseX > 500 && mouseX < 620 && mouseY > 443 && mouseY < 497 && quizScreen1 == true) {
    screen5 = true;
    quizScreen1 = false;
    
  }
    //continue button clicked on quiz screen 1 (goes to quiz screen2)
   else if (mouseX > 650 && mouseX < 770 && mouseY > 440 && mouseY < 490 && quizScreen1 == true) {
    quizScreen1 = false;
    quizScreen2 = true; 
  }
  
    //back button clicked on quizScreen2 (goes back to quiz screen 1)
  else if (mouseX > 500 && mouseX < 620 && mouseY > 443 && mouseY < 497 && quizScreen2 == true) {
    quizScreen1 = true;
    quizScreen2 = false;
}
    //continue button clicked on quiz screen 2 (goes to quiz screen3)
  else if (mouseX > 650 && mouseX < 770 && mouseY > 440 && mouseY < 490 && quizScreen2 == true){
    quizScreen2 = false;
    quizScreen3 = true;
  }
  
    //back button clicked on quizScreen3 (goes back to quiz screen 2)
  else if (mouseX > 500 && mouseX < 620 && mouseY > 443 && mouseY < 497 && quizScreen3 == true) {
    quizScreen2 = true;
    quizScreen3 = false;
}
    
  //continue button clicked on quiz screen 1 (goes to quiz screen2)
  else if (mouseX > 650 && mouseX < 770 && mouseY > 440 && mouseY < 490 && quizScreen3 == true){
    quizScreen3 = false;
    endScreen = true;
  }
  
    //back button clicked on end screen (goes back to quizScreen 3)
  else if (mouseX > 500 && mouseX < 620 && mouseY > 443 && mouseY < 497 && endScreen == true) {
    quizScreen3 = true;
    endScreen = false;
  }
  
    //back button clicked on end screen (goes back to intro screen)
  else if (mouseX > 650 && mouseX < 770 && mouseY > 440 && mouseY < 490 && endScreen == true){
    endScreen = false;
    introScreen = true;
  }
  }
  
  
