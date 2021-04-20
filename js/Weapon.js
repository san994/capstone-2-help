class Weapon{


constructor(x,y){

  var option={
  
    isStatic :false,
    density : 0,
    friction : 0,
    restitution : 0

 }

  this.body = Bodies.rectangle(x,y,10,50,option);

  World.add(world,this.body)

}

display(){

 var pos = this.body.position
 
 rectMode(CENTER)
 fill("black")
 rect(pos.x,pos.y,10,50);
 

}



}