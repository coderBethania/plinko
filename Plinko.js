  
class Plinko{
    constructor(x, y) {
        var options = {
            'restitution':1,
            'friction':0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10;
  this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(this.radius);
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
}