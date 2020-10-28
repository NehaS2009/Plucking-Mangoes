class Boy{
    constructor(x, y, width, height){
       
        this.x=x;
		this.y=y;
		this.image=loadImage("PluckingMangoes/boy.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
      }
      
  }