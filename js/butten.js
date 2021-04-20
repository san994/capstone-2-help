class Butten{

    constructor(x,y){
  
      var options={
  
         isStatic : false,

         density  : 0.05,

         friction : 0.01
  
      }
   
      this.body = Bodies.rectangle(x,y,options)
      this.width = 50
      this.height =  10
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
      fill("brown")
      rect(pos.x,pos.y,this.width,this.height);
      rect(pos.x,pos.y-5,this.height,this.width);
      pop()
  
   }
  
  
  }