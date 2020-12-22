class polygon{
    constructor(x, y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius =20;
        this.image = loadImage('polygon img.png')
        
        World.add(world, this.body);

    }

    display(){
       
        var pos = this.body.position;
        push();
       
        translate(pos.x, pos.y);
      
        imageMode(RADIUS);
        image(this.image,0,0,50,50,1);
        pop();
    }
}