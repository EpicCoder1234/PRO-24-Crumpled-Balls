class Paper{
    constructor(x,y,diameter){
        var paper_options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body = Matter.Bodies.circle(x,y,diameter,paper_options);
        this.width = diameter;
        World.add(world,this.body)
    
    }
    display(){
        var pos = this.body.position;
        console.log(pos)
        push();
        translate(pos.x,pos.y);
        fill("green");
        //ellipseMode(RADIUS)
        circle(0,0,this.width);
        pop();
        
       
    }
}
