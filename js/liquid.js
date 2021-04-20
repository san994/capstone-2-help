class Liquid{

    constructor(x,y,width,height){
  
      var options={
  
         isStatic : false,

         density  : 1,

         friction : 0.01
  
      }
   
     
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height =  height
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
     
      rect(pos.x,pos.y,this.width,this.height);
     
      pop()
  
   }
  
  
  }