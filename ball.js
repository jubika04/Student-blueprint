class Ball
{
    constructor(x,y,radius)
    {
        var ball_options ={
            restitution: 1.0
            
        }

        this.ball = Bodies.circle(x,y,radius, ball_options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.ball);

    }

    display()
    {
        ellipseMode(RADIUS);
        ellipse(this.ball.position.x,this.ball.position.y, this.radius, this.radius);
    }


}