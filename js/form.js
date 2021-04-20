class Form{

constructor(){

this.input = createInput("name")
this.button = createButton("play")

}

display(){

var  title = createElement("h2")
title.html("THE HONEST TREASURE")
title.position(950,300)


this.input.position(1000,400)

this.button.position(1000,500)
this.button.style("height","30px")
this.button.style("width","150px")
this.button.style("background","green")

this.button.mousePressed(()=>{

this.input.hide()
this.button.hide()


nm = this.input.value()

gameState = PLAY



})

}




}