
class Bob{
    
    constructor(x,y,radius){
     
        var options ={
            isStatic : false,
            restitution:1.0,
            friction:1.0,
            density:1.2
            
           
        }
      
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
     //   this.diameter = radius * 2;
        World.add(world,this.body)
    }

    display(){
         var pos = this.body.position;
      //   var angle = this.paperBody.angle;
         push();
            translate(pos.x,pos.y);
            ellipseMode(RADIUS);
            fill("white");
            ellipse(0,0,this.radius);
         pop();
       
    }
};