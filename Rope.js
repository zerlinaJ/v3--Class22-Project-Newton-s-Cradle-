class Rope{

    
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options ={
            bodyA:body1, //bob
            bodyB:body2, //roof
        //    stiffness:0.04,
          //  length:10,
            pointB:{x:this.offsetX,y:this.offsetY}
            
        }
        
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

       var anchor1X = pointA.x; 
       var anchor1Y = pointA.y;

        var anchor2X = pointB.x + this.offsetX; 
        var anchor2Y = pointB.y + this.offsetY;
        
        
        stroke("white");
        line(pointA.x,pointA.y,anchor2X,anchor2Y);
      //  console.log(pointB.x,pointB.y)
        

    }
}