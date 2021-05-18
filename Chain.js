class Chain{
   
    constructor(bodyA , bodyB){
        var options ={
            bodyA : bodyA,
            PointB: PointB,
            stiffness: 0.04,
            length : 2
        }
        this.PointB=PointB
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    attach(body){
        this.chain.bodyA=body;
    }

    fly(){
       this.chain.bodyA=null
    }

    display(){
        if(this.chain.bodyA){
            var PointA = this.chain.bodyA.position;
            var PointB = this.PointB;
            strokeWeight(4);
            line(PointA.x , PointA.y , PointB.x , PointB)

        }
    }
}