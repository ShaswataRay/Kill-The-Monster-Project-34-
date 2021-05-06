class Block{
    constructor(x, y){
        var options ={
            //"isStatic": true,
            "restitution": 0.7,
            "friction": 1.0,
            "density": 20
        }
        this.body = Bodies.rectangle(x, y, 70, 70, options);
        this.width = 70;
        this.height = 70;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("red");
        stroke("black");
        strokeWeight(4);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}