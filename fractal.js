var diameter;
var lastDiameter;
var numberOfCircles = 1;
var lastNumberOfCircles = 1;
var iterations = 6;
var cellShade;
var shade;

function setup(){
  
  // createCanvas(900,900);
  createCanvas(windowWidth,windowHeight);

  stroke(255, 70);
  // fill(0, 50);
  fill(0);
  diameter = width;

  //ellipseMode(CENTER);

  //println(diameter);

  ellipse(diameter*.5, height*.5, diameter, diameter);
  
  lastDiameter = width;
  lastNumberOfCircles = 1;
  // fill(0);
}

function draw(){
  
  diameter = lastDiameter*.5;
  numberOfCircles = lastNumberOfCircles * 2;
  
  if (lastDiameter <= 1 ){ 
    
    
    stop();
  }
  else {

    var thisPos = diameter*.5;
   
    for (var i= 0; i < numberOfCircles; i++){
      
       // noFill();

       cellShade = diameter*.25;
       shade = thisPos*.5;

       // fill(0, 255-cellShade);
       fill(cellShade,75-i,shade,50);


       // stroke(255-i, shade, 255-cellShade); 
       stroke(shade, 255-i, 255-cellShade);
       // stroke(cellShade, 255-i, 255-cellShade); //, cellshade-255, cellShade);
      
       ellipse(thisPos, height*.5, diameter, diameter);
       ellipse(width*.5, thisPos, diameter, diameter);
       //ellipse(width/2, thisPos, diameter, diameter);
       // println("ellipse pos" + thisPos);
       
      thisPos = thisPos + diameter;
    }
    
    lastDiameter = diameter;
   lastNumberOfCircles = numberOfCircles;
  }
  
  

smooth();
  
}