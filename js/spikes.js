class Spikes{

    constructor(x,y){
  
      var options={
  
         isStatic : false,

         density  : 1,

         friction : 0.01
  
      }
   
      this.body = Bodies.rectangle(x,y,30,30,options)
      this.width = 30
      this.height = 30
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
      fill("brown")
      rect(pos.x,pos.y,this.width,this.height);
      pop()
  
   }
  
  
  }