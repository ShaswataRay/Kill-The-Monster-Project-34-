class Hero{
    constructor(x, y, r){
        var options ={
            "frictionAir": 1,
            "density": 1
        }
        this.body = Bodies.circle(x, y, r, options);
       this.radius = r;
       this.image=loadImage("IMAGES/Superhero-01.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("violet");
        imageMode(CENTER);
        image(this.image, 0,0, this.radius + 150, this.radius);
        pop();
    }
}