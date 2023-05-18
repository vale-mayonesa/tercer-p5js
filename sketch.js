let anchoRect = 100;
let altoRect = 20;
let x = 410;
let y = 200;
let velX = 2;
let velY = 2;
let dirX = 1;
let dirY = 1;

let cont = 0;
let idaVuelta = true;

function setup() {
  createCanvas(700, 500);
  angleMode(DEGREES);
}

function draw() {
  background("#8BC34A");

  //sombra quad amarillo//
  push();
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      translate(-300, 250);
    }
  }
  fill("#636E2F");
  noStroke();
  quad(310, 30, 460, 30, 660, 240, 510, 240);

  //quad amarillo//
  fill("#E4F3A0");
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      translate(6, -35);
      fill(random(0, 255), random(0, 255), random(0, 255));
    }
  }
  noStroke();
  quad(300, 40, 450, 40, 650, 250, 500, 250);
  pop();

  //rectangulo naranja1//
  push();
  translate(546, 137);
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      translate(-380, 250);
      rotate(frameCount * 2.4);
    }
  }
  rectMode(CENTER);
  noStroke();
  fill("#F29033");
  rect(0, 0, 250, 25);
  pop();

  //CUADRADO LOKO//
  push();
  rectMode(CENTER);
  noFill();
  stroke("#9B32F7");
  strokeWeight(3);

  if (idaVuelta) {
    for (var i = 4; i < 288 - cont; i += 12) {
      rect(280, 200, i, i);
    }
  } else {
    for (var i = 288; i > 0 + cont; i -= 12) rect(280, 200, i, i);
  }
  cont++;
  if (288 - cont < 0) {
    cont = 0;
    idaVuelta = !idaVuelta;
  }
  pop();

  //rectangulo naranja2//
  push();
  translate(140, 139);
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      translate(205, -5);
    }
  }
  noStroke();
  fill("#F29033");
  rect(0, 0, 170, 25);
  pop();

  //rectangulo fucsia1//
  push();
  translate(245, 200);
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      translate(216, 37);
    }
  }
  noStroke();
  fill("#F32188");
  rect(0, 0, 100, 20);
  pop();

  //quad azul//
  push;
  fill(23, 0, 255, 85);
  noStroke();
  quad(186, 107, 310, 107, 600, 400, 476, 400);
  //sombra del quad azul//
  fill("#243E5A");
  noStroke();
  quad(310, 107, 325, 107, 599, 383, 599, 399);

  //rectangulo fucsia2//
  push();
  x += velX * dirX;
  y += velY * dirY;
  translate(x, y);

  noStroke();
  fill("#F32188");
  rect(0, 0, anchoRect, altoRect);

  if (x > width - anchoRect || x < anchoRect) {
    dirX = -dirX;
  }
  if (y > height - altoRect || y < altoRect) {
    dirY = -dirY;
  }
  pop();

  console.log(`X: ${mouseX}, Y: ${mouseY}`);
}
