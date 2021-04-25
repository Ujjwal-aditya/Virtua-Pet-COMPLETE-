class Food
{   
    constructor()
    {
        this.image = loadImage("Milk.png");

    }

    display()
    {
        
        /*if(foodArray.length>this.foodstock)
        {
            push();
            image(this.image,this.x,this.y,80,80);
            tint(255,this.visibility);
            pop();
           
        }
        else
        {
            push()
            image(this.image,this.x,this.y,80,80);
            pop();
        }*/
        var x = 50,y=50;
        for( var i = 0 ; i<food ; i++)
        {
          if(i%10==0 && i>0)
          {
              y=y+75;
              x=50;
          }   
          x=x+50;
          image(this.image,x,y,80,80);

        }
    }    

}