var sz = 5

function setup() {
  createCanvas(400, 400);
  background(220);
  fill(0,255,0)
  rect(25,50,30,30)
  fill('red')
  rect(25,100,30,30)
  fill('blue')
  rect(25,150,30,30)
  fill('yellow')
  rect(25,200,30,30)
  fill('white')
  rect(25,250,30,30)
  fill('black')
  rect(25,300,30,30)
  textSize(14)
  text('Press "u" to up strokeweight', 20, 390)
  text('Press "d" to decrease strokeweight', 20, 370)
  text('Press "s" to stabilize strokeweight', 20, 350)
  text('Press "e" to change to eraser', 20, 30)
}

function draw() {
  
  strokeWeight(sz);
  if(key == 'u') sz = sz + 0.1;
  if(key == 'd') sz = sz - 0.1;
  if(key == 's') sz = sz;
  if(key == 'e') stroke(220)
  
  {
  
  } 
  {if(mouseX>25 && mouseX<55 && mouseY>50 && mouseY<100 && mouseIsPressed)
  stroke(0,255,0)}
  
  {if(mouseX>25 && mouseX<55 && mouseY>100 && mouseY<130 && mouseIsPressed)
  stroke('red')}
  {if(mouseX>25 && mouseX<55 && mouseY>150 && mouseY<180 && mouseIsPressed)  
  stroke('blue')}
  
  {if(mouseX>25 && mouseX<55 && mouseY>200 && mouseY<230 && mouseIsPressed)
    stroke('yellow')}
  {if(mouseX>25 && mouseX<55 && mouseY>250 && mouseY<280 && mouseIsPressed)
    stroke('white')}
  {if(mouseX>25 && mouseX<55 && mouseY>300 && mouseY<330 && mouseIsPressed)
    stroke('black')}
  
  {
    if(mouseX>0 && mouseX<60 && mouseY>0 && mouseY<400 && mouseIsPressed)
      strokeWeight(0)
    if(mouseX>61 && mouseX<400 && mouseY>0 && mouseY<45 && mouseIsPressed)
      strokeWeight(0)
    if(mouseX>61 && mouseX<400 && mouseY>330 && mouseY<400 && mouseIsPressed)
      strokeWeight(0)
    
    
  }
  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
      
    
  }
  

}