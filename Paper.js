class Paper {
    constructor(x, y,radius) {
      
      var options = {
          static:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
     
      this.body = Bodies.circle (x, y, radius,options);
      this.radius = radius;
      this.paper2=loadImage("paperImg.png");
      World.add(world, this.body);
    }
    display(){
      image (this.paper2,200,200);

     ellipseMode(RADIUS);

     fill ("pink");

     circle(this.body.position.x,this.body.position.y,this.radius);
    }
  };