class Dispencer{

    constructor(x,y){
  
      var options={
  
         isStatic : true
  
      }
  
      this.image = loadImage("images/ashooter.png")
      this.body = Bodies.rectangle(x,y,100,60,options)
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
      imageMode(CENTER)
      //rect(pos.x,pos.y,100,60);
      image(this.image,pos.x+20,pos.y-10,300,150)
      pop()
  
   }
  
  
  }