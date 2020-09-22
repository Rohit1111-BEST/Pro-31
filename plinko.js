class Plinko {
    constructor(x, y, radius) {
        var options = {
          isStatic:false,
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 10;
                World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       ellipseMode(RADIUS);
        stroke("dark brown")
        fill("brown");
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
    }