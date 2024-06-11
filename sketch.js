var path, boySprite, leftBoundary, rightBoundary;
var pathImg, boyImg;
var edges;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage ("path.png");
  //loadAnimation de boy (niño)
  boyImg=loadAnimation ("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake.png");
}

function setup(){
  
  createCanvas(400,400);

   //crear sprite de path (camino) 
  path=createSprite(200, 200);
  //agregar imagen de path
  path.addImage(pathImg);
  //Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
  path.scale = 1.2;
  path.velocityY = 4;
  
  //crear sprite de boy (niño)
  boySprite=createSprite (200, 300, 30, 30);
  //agregar animación para boy
  boySprite.addAnimation ("running", boyImg);
  boySprite.scale = 0.08;

    
  // crear  left Boundary (límite izquierdo)
  leftBoundary = createSprite (0, 0, 100, 800);
  ////establecer visibilidad como false (falso) para límite izquierdo
  leftBoundary.visible = false;
  
  //crear right Boundary (límite derecho)
  rightBoundary = createSprite(410, 0, 100, 800);
  //establecer visibilidad como false (falso) para límite izquierdo
  rightBoundary.visible = false;
  
}
  

  function draw() {
    background("black");
  
   // boy moviéndose en el eje X con el mouse
   boySprite.x = mouseX;

      // colisión de boy con los límites derecho e izquierdo invisibles 
      boySprite.collide(leftBoundary);
      boySprite.collide(rightBoundary);
  

  
    //código para reiniciar el fondo
    if(path.y > height ){
      path.y = 0;
    }
    
    drawSprites();

  
  }
