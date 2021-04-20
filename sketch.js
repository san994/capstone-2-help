const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var START = 0,PLAY = 1,LEVEL2 = 2

var gameState = START

var nm

var bullet = []
var arrow = []
var bbullet = []

var p = []
var r = []

var player;

function preload(){

mountainbg = loadImage("images/Mountainbg.jpg");
 
    
}

function setup(){
  canvas =  createCanvas(2000,750)  

   engine = Engine.create()
   world = engine.world

   

    form = new Form()

  

   player = new Player(100,100,40,40);

   //main flour
   platform1 = new Platform(1000,800,1500,150);

   //top flour
   platform2 = new Platform(500,300,150,20);
   platform3 = new Platform(1500,300,130,20);

   // left and right middle flour
   platform4 = new Platform(750,600,130,300);
   platform5 = new Platform(1200,600,150,300);

   // buttom flour
   platform6 = new Platform(1500,650,150,200);
   platform7 = new Platform(500,650,150,200);

    //near main flour 
   platform8 = new Platform(1900,750,200,200);
   platform9 = new Platform(100,750,200,200);

   climber = new Weapon(player.body.position.x,player.body.position.y)

   keyPressed()

}
function draw(){
 

  Engine.update(engine);

  if(gameState === START){
   
    background("lightGreen");

    //camera.x = canvas.width/2

    form.display()

  }else if(gameState === PLAY){

   background(mountainbg);
 
    player.display()

   platform1.display()
   platform2.display()
   platform3.display()
   platform4.display()
   platform5.display()
   platform6.display()
   platform7.display()
   platform8.display()
   platform9.display()
  
   climber.display()

  

  textSize(20)
  fill("lightBlue")
  text("name :-"+nm,player.body.position.x-50,player.body.position.y-20)

  if(player.body.position.x >= 1000){

     gameState = LEVEL2

  }

  }else if(gameState === LEVEL2){

    player.body.position.x = 100

  }

  
}




function arrowSpawn(dis){

  if(frameCount % 60===0){

    arrow.push(new Arrow(dis.body.position.x,dis.body.position.y,10,5))
  
  }
  
  for(var a = 0;a<arrow.length;a++){
  
     arrow[a].display()
  
     arrow[a].body.position.x -=10
  
   }

   for(var d = 0 ;d<arrow.length;d++){
    if(isTouching(player,arrow[d])){
 
       player.colour = "red"
 
    }

   }

}

function BigBullet(){

  if(frameCount % 60===0){

    bbullet.push(new bBullet(fire.body.position.x,fire.body.position.y))

  }

  for(var b = 0;b<bbullet.length;b++){

    bbullet[b].display()

    bbullet[b].body.position.x -=10

  }

  for(var g = 0 ;g<bbullet.length;g++){
    if(isTouching(player,bbullet[g])){
 
       player.colour = "red"
 
    }
  
  }

  }




function bulletSpawn(){

  if(keyCode === 70){

    bullet.push(new Bullet(gun.body.position.x,gun.body.position.y))

   }

  for(var i = 0;i<bullet.length;i+=1){

   bullet[i].display()

   bullet[i].body.position.x +=5

   }

}

function isTouching(object1,object2){

 if((object1.body.position.x-object2.body.position.x) <= (object2.width/2 + object1.width/2)
 &&(object2.body.position.x-object1.body.position.x) <= (object2.width/2 + object1.width/2)
 &&(object1.body.position.y-object2.body.position.y) <= (object2.height/2 + object1.height/2)
 &&(object2.body.position.y-object1.body.position.y) <= (object2.height/2 + object1.height/2)){

   return true

 }else{

   return false

 }

}

function circleTouching(object1,object2){

  if((object1.body.position.x-object2.body.position.x) <= (object2.radius + object1.width/2)
  &&(object2.body.position.x-object1.body.position.x) <= (object2.radius + object1.width/2)
  &&(object1.body.position.y-object2.body.position.y) <= (object2.radius + object1.height/2)
  &&(object2.body.position.y-object1.body.position.y) <= (object2.radius + object1.height/2)){
 
    return true
 
  }else{
 
    return false
 
  }
 
 }

 function keyPressed(){

  if(keyCode === 68){

    Matter.Body.applyForce(player.body,player.body.position,{x:20,y:0})
   // player.body.position.x +=10
  
  }

  if(keyCode === 65){

    Matter.Body.applyForce(player.body,player.body.position,{x:-20,y:0})
    //player.body.position.x -=10
  
  }

  if(keyCode === 32){

    Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-10})
    //player.body.position.y -=10

 }


 }
