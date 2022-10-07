var position;
var velocity;
// variável que controla a dimensão da objeto
var bdim = 30;


function simulaContato(posObjX, posObjY, distIniX, distIniY){
  var posFimX = (posObjX+distIniX);
  var posIniX = (posObjX-bdim);
  
  var posFimY = (posObjY+distIniY);
  var posIniY = (posObjY-bdim);
  //   sup inferior
  if((position.y >= posIniY) && (position.y <= posFimY)){
    if((position.x >=posIniX) && (position.x <= posFimX)){
      velocity.y *= -1;
      if(position.y < posIniY){
        position.y -= velocity.y;
      }else position.y += velocity.y;
    }
  }
//   lado 
  if((position.x>=posIniX) && (position.x<=posFimX)){
    if((position.y >=posIniY) && (position.y <= posFimY)){
      velocity.x *= -1;
      velocity.y *= -1;
      if(position.x < posIniX){
        position.x -= velocity.x;
      }else position.x += velocity.x;
    }
  }
}

function setup() {
  createCanvas(400, 400);
  smooth();

  // cria o vetor da posição (no centro do canvas)
  position = createVector(100, 160);

  // cria o vetor da velocidade
  velocity = createVector(7, 3);
}

function draw() {
  // desenha o retângulo que demonstra os limites do canvas
  // modifique a linha a seguir para fill(255,10) e veja o resultado
  fill(255);
  rect(1, 1, width - 1, height - 1);
  
  fill(70);
  var recX_1 = 175;
  var recY_1 = 75;
  var tam_1 = 50;
  rect(recX_1,recY_1,tam_1,tam_1);
  simulaContato(recX_1,recY_1,tam_1,tam_1)  
  
  var recX_2 = 75;
  var recY_2 = 250;
  var tam_2 = 50;
  rect(recX_2,recY_2,tam_2,tam_2);
  simulaContato(recX_2,recY_2,tam_2,tam_2)
  
  var recX_3 = 275;
  var recY_3 = 250;
  var tam_3 = 50;
  rect(recX_3,recY_3,tam_3,tam_3);
  simulaContato(recX_3,recY_3,tam_3,tam_3)
  
  position.add(velocity);

  // checa por colisão com os limites do canvas
  if ((position.x + bdim > width) || (position.x < 0)) {
    // multiplicar por -1 significa inverter a direção
    velocity.x *= -1;
  }
  if ((position.y + bdim > height) || (position.y < 0)) {
    velocity.y *= -1;
  }


  // desenha a bola na posição representada pelo vetor position
  stroke(0);
  fill(175);
  rect(position.x, position.y, bdim, bdim);

  // info: mostra os valores de posição e velocidade
  fill(20);
  text('posicao = ' + position, 10, 20);
  text('velocidade = ' + velocity, 10, 35);
}