class Fire{

    constructor(x,y){
  
      var options={
  
         isStatic : true
  
      }
  
      this.image = loadImage("images/fire.png")
      this.body = Bodies.rectangle(x,y,100,60,options)
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
      imageMode(CENTER)
      //rect(pos.x,pos.y,100,60);
      image(this.image,pos.x,pos.y,300,150)
      pop()
  
   }
  
  
  }