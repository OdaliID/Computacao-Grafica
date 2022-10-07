function Cabeca(x, y) {
    this.x = x;
    this.y = y;
    this.desenha = function() {
      push();
      translate(this.x, this.y);
      rect(-30, 0, 50, 50);
      pop();
    }
  }
  
  function Tronco(x, y) {
    this.x = x;
    this.y = y;
    push();
    translate(this.x, this.y);
    rect(-55, 0, 100, 100);
    pop();
    
  }
  
  function BracoDireito(x, y) {
    this.x = x;
    this.y = y;
    push();
    translate(this.x, this.y);
      rotate(radians(270));
    rect(-75, 40, 40, 90);
    pop();
    
  }
  
  function BracoDireitoBaixo(x, y) {
    this.x = x;
    this.y = y;
    push();
    translate(this.x, this.y);
      rotate(radians(235));
    rect(-140, -20, 40, 90);
    pop();
    
  }
  
  function BracoEsquerdo(x,y){
      this.x = x;
    this.y = y;
    push();
    translate(this.x, this.y);
      rotate(radians(270));
    rect(-75, 260, 40, 90);
    pop();
  }
  
  
  function BracoEsquerdoCima(x,y){
      this.x = x;
    this.y = y;
    push();
    translate(this.x, this.y);
      rotate(radians(240));
    rect(-200, 210, 40, 90);
    pop();
  }
  
  function PernaDireita(x,y){
      this.x = x;
    this.y = y;
    push();
    translate(this.x, this.y);
    rect(-55, 140, 40, 100);
    pop();
  }
  
  function PernaEsquerda(x,y){
      this.x = x;
    this.y = y;
    push();
    translate(this.x, this.y);
    rect(-55, 140, 40, 100);
    pop();
  }
  
  function setup() {
    createCanvas(400, 400);
      cx = width / 2;
      cy = height / 2;
      
      
  }
  
  function keyPressed() {
      
      if (keyCode == '68') {
         BracoDireitoBaixo(0,40);
      }
      else{
          BracoDireito(0,40);
          
      }
      if (keyCode == '69'){
          BracoEsquerdoCima(0,40);
      }
      else{
          BracoEsquerdo(0,40);
      }
      
      
  }
  
  function draw() {
    background(255);
      var c = new Cabeca(cx, 0);
    c.desenha();
      Tronco(cx, 75);
      PernaDireita(cx,50);
      PernaEsquerda(cx+60, 50);
      keyPressed();
      fill(0);
      //ellipse(cx, cy, 5);
    
  }