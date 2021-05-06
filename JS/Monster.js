class Monster{
    constructor(x, y, r){
        var options ={
            "density": 5
        }
        this.radius = r;
        this.body = Bodies.circle(x, y, (this.radius)/2, options);
       this.image=loadImage("IMAGES/Monster-01.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y - 100);
        rotate(this.body.angle);
        fill("violet");
        imageMode(CENTER);
        image(this.image, 0,0, this.radius, this.radius);
        pop();
    }
}