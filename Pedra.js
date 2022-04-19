class Pedra{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
    var options = {
        'density':7,
        'friction': 1.0,
        'restitution':0.5
      };
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pedrapos=this.body.position;		
			push()
			translate(pedrapos.x, pedrapos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(pedrapos.x, pedrapos.y, this.r)
			pop()
	}

}