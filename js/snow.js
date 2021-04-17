class createDrop{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
      //  this.image=loadImage("images/snow4.webp")
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 8;
        this.snowimg=loadImage("images/snow4.webp")
       
        World.add(world, this.rain);

    }

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,1000), y:random(0,1000)})
        }
    }

    showDrop(){
    fill ("white")
    stroke ("white");
 
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}