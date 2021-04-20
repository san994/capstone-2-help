class Bullet{

constructor(x,y){

    var option={
  
        isStatic : true,
        density : 0.8,
        friction : 0.5,
        restitution : 0
 
     }

 

 this.body = Bodies.rectangle(x,y,10,5,option)
 World.add(world,this.body)

}

display(){

 var pos = this.body.position 

 rectMode(CENTER)
 
 rect(pos.x,pos.y,10,5)
 

}

}