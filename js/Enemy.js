class Enemy{

    constructor(x,y){
  
      var options={
  
         isStatic : false
  
      }

      this.image = loadImage("images/early man 2.png")

      this.body = Bodies.rectangle(x,y,50,70,options)
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
      imageMode(CENTER)
      //fill("green")
      //rect(pos.x,pos.y,50,70);
      image(this.image,pos.x+15,pos.y,150,150)
      pop()
  
   }
  
  
  }