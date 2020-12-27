class Paper {
    constructor (x, y, radius){
        var options={
            isStatic:false,
            restitution :0.3,
            friction:0.5,
            density : 1.2
        }
        this.body=Bodies.circle (x, y, radius/2, options)
        World.add(world,this.body)
        this.radius=radius
        this.image=loadImage("paper.png")
    }
display (){
    fill("pink");
    imageMode(CENTER)
    image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius) 

}
}