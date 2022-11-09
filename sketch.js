var canvas;
  on = false;
  yes = false;
  
  function setup() {
    canvas = createCanvas(700, 420);
    canvas.position(350,150)
  }
  
  function draw() {
    background(255)
    if (on) {
    x = "-Lives in suburban area\n-Goes to private school\n-In tennis, choir, \nand student council\n-Attending University of Iowa\nin the upcoming Fall"
    }else{
    x = "Margaret"
    }
    if (yes){
    y = "-Lives in more urban subdivision\n-Goes to public school near home\n-Wishes to be in art program\nbut doesn't have time \nand much opportunity\n-Plans on working job outside of \nschool to save and move out of \nparent's home and bad area"
    b = 20
    }else{
    y = "Stacy"
    }
    textSize(20)
    fill(0,150,255)
    text(x,50,200)
    text(y,350,200)
    textStyle(BOLD)
    text("Two Teenagers, Same City, Two Lifestyles", 50,100)
    textFont('Georgia')
  }
  function mousePressed(){
    if(mouseX<250 && mouseX>50 && mouseY< 200 && mouseY> 150 ){
      on = !on
    }
    if(mouseX<490 &&mouseX>340 && mouseY< 200 && mouseY>150){
       yes = !yes
      }
    
  }
  