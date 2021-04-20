class Arrow{

    constructor(x,y,width,height){
    
        var option={
      
            isStatic : true,
            density : 0,
            friction : 0,
            restitution : 0
     
         }
    
     
     this.image = loadImage("images/arrow.png")
     this.body = Bodies.rectangle(x,y,width,height,option)
     this.width = width
     this.height =  height
     World.add(world,this.body)
    
    }
    
    display(){
    
     var pos = this.body.position 
    
     rectMode(CENTER)
     imageMode(CENTER);
     rect(pos.x,pos.y,this.width,this.height)
     image(this.image,pos.x,pos.y+10,100,100)
    
    }
    
    }