class Platform{

    constructor(x,y,width,height){
  
      var options={
  
         isStatic : true,

         density  : 1,

         friction : 0.01
  
      }
   
      this.image = loadImage("images/wall.png");
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height =  height
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
      imageMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
      //image(this.image,pos.x+10,pos.y,this.width,this.height)
      pop()
  
   }
  
  
  }