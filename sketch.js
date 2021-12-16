// definir variáveis:
var dino, dinoImg, dinoAnima;
var chao;

// carregar imagens:
function preload() {
  dinoImg = loadImage("trex1.png");
  dinoAnima = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}

// configurar e criar personagens:
function setup() {
  createCanvas(600, 200);
  dino = createSprite(50, 150, 20, 40);
  //dino.addImage(dinoImg);
  dino.addAnimation("dino_corre",dinoAnima);
  dino.scale = 0.6;

  chao = createSprite(120, 190, 150, 20);
}

// Desenhar os personagens:
function draw() {
  background("white");
  textSize(20);
  text(mouseX+","+mouseY, mouseX, mouseY);
  if(keyDown("space")){
    dino.velocityY = -10; 
  }
  dino.velocityY = dino.velocityY + 0.8;
  //dino.collide(chao);

  drawSprites();
}
