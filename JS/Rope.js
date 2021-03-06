class Rope{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 450
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB = pointB;
    }
    display(){
        push();
        stroke("black");
        strokeWeight(0);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.pointB.x, this.pointB.y);
        pop();
    }
    }