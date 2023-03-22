function preload() {
  pc=loadAnimation ("1 crri.png","2 crri.png","3 crri.png","4 crri.png","5 crri.png"," 6 crri.png")
  m1=loadImage ("DE.jpg")
  m2=loadImage ("EM.jpg")
  m3=loadImage ("MD.jpg")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  var Sm1 = createSprite(windowWidth/2, windowHeight -150, 50 , 50);
  Sm1.scale = 1.05
  Sm1.addImage(m1)

  var Sm2 = createSprite(windowWidth/2, windowHeight -444, 50 , 50);
  Sm2.scale = 1.05
  Sm2.addImage(m2)

  var Sm3 = createSprite(windowWidth/2, windowHeight -737, 50 , 50);
  Sm3.scale = 1.05
  Sm3.addImage(m3)

  var Spc = createSprite(500, 297, 50, 50)
  Spc.addAnimation("Pc_crri",pc)
  Spc.scale= 0.6


}

function draw() {
  background(255,255,255);  
  drawSprites();
}
