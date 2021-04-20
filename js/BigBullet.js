class bBullet{

    constructor(x,y){
    
        var option={
      
            isStatic : true,
            density : 0,
            friction : 0,
            restitution : 0
     
         }
    
     
     this.image = loadImage("images/Bbullet.png")
     this.body = Bodies.rectangle(x,y,50,20,option)
     World.add(world,this.body)
    
    }
    
    display(){
    
     var pos = this.body.position 
    
     rectMode(CENTER)
     imageMode(CENTER);
     //rect(pos.x,pos.y,50,20)
     image(this.image,pos.x+10,pos.y+10,150,150)
    
    }
    
    }