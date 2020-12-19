class Paper {
    constructor(x, y, r){
        var options={
        isStatic: false,
        restitution:0.3,
        friction:0.5,
        density:0.4
        }
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
        this.r = r;
    }
    display() {
        fill(255,192,203)
        ellipseMode(RADIUS)
        image(this.image, this.body.position.x, this.body.position.y, this.r,this.r)
        
    }
}