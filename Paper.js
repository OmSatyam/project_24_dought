class Paper{
   constructor(x,y,width,height){
     var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
     }  
   this.body = Matter.Bodies.circle(x,y,radius,options);
   this.radius = radius;
   World.add(world,this.body);
   }

display(){
    var pos = this.body.position;
    fill("pink");
    push();
    translate(pos.x,pos.y);
    circleMode(CENTER);   
    circle(0,0,this.width,this.height);
    pop();
}
}

