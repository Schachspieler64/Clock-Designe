function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  ms = millis();
  sec = second();
}

function draw() {
  background(0);
  
  
  let hr =hour();
  let mn = minute();
  let sc = second();
  
  
  let scp = sc/60*360;
  let mnp = mn/60*360;
  let hrp = hr/24*360*2;
  
  /*strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(200,200,300,300)
  */
  console.log(ms);
  let m = millis();




//Console.log((scp-90), "      ", (mnp-90), "      ", (hrp-90));
  if(sc != sec){
    ms = m;
    sec = sc;
  }
  
  noFill();
 strokeWeight(2);
  stroke(255);
  ellipse(200, 200, 320, 320);
  ellipse(200, 200, 240, 240);
  ellipse(200, 200, 160, 160);
  ellipse(200, 200, 80, 80);
  
  let msp = (m-ms)/1000*360;
  
  strokeWeight(40);
  stroke(255, 100, 150);
  fill(255, 100, 150);
  arc(200, 200, 320, 320, hrp-100, hrp-90);
  strokeWeight(30);
  stroke(255, 0, 150);
  fill(255, 0, 150);
  arc(200, 200, 240, 240,  mnp-100, mnp-90);
  strokeWeight(20);
  stroke(0, 100, 150);
  fill(0, 100, 150)
  arc(200, 200, 160, 160, scp -100, scp-90);
  strokeWeight(10);
  stroke(0, 250, 250);
  fill(0, 250, 250);
  arc(200, 200, 80, 80,  msp-100, msp-90);
  
  
  
  var c = color(255)
fill(c);
strokeWeight(0);
//arc(200, 200, 10,10, 360, 360)

  textSize(32);
  text("12", 185, 30)
  text("3", 370, 210)
  text("6", 185, 390)
  text("9", 10, 210)
  
  
}