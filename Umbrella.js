class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png")
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        this.batmanImage = loadImage("bat/Best-01.png")
    }
    remove(){
        var pos = this.umbrella.position;
        World.remove(world,this.umbrella);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        if(frameCount >= 200)
        image(this.batmanImage,pos.x,pos.y-50,150,230)
       else
            image(this.image,pos.x,pos.y-70,300,300);
        
    }
}
