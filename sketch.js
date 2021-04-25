var dog,sadImage,happyImage,database,addFood,food,feedTheDog,h,k,foodObj,empty,full,lastfed;
var lastfeed;
function preload()
{
  sadImage = loadImage("Dog.png");
  happyImage = loadImage("happy dog.png");
  empty      = loadImage("milkImage.png");
  full       = loadImage("Milk.png")
}

function setup()
{
  k = 0;
  createCanvas(1000,400);
  dog = createSprite(950,200,10,10);
  dog.addImage(sadImage);
  dog.scale = 0.2;
   y=50;
   x = 50;
   i=0;
  database = firebase.database();
  h = hour();
  console.log(h);

  addFood = createButton("add food");
  addFood.position(500,100);
  addFood.mousePressed(addFoods);

  feedTheDog = createButton("feed the dog");
  feedTheDog.position(400,100);
  feedTheDog.mousePressed(feedthedog); 

  foodObj = new Food();
  var foodstockRef = database.ref('foodStock');
  foodstockRef.on("value",function(data){
    food = data.val();
  });

  var lastFedRef = database.ref('lastFed');
  lastFedRef.on("value",function(data){
    lastfeed = data.val();
  })

  database.ref('/').update({
    lastFed : h
  });
  
}

function draw()
{
  background("green");

  text(mouseX+","+mouseY,100,100);
  /*if(i<food)
    {
    console.log(i+"="+food);
  
    if(i%15==0 && i>0)
    {
      y=y+75;
      x=50;
    }
     foodArray.push(new Food(x,y));
     x=x+50;
     i=i+1;
  }
  if(foodArray.length>food)
  {
    
  }
  for( var j = 0 ; j < foodArray.length ; j=j+1)
  {
    foodArray[j].display();
  }*/
  foodObj.display();
  if( k == 0)
  {
    image(full,800,200,80,80);
  }
  else
  {
    image(empty,800,200,80,80);
  }
  fill(0);
  textSize(25);
  text("LASTFEED="+lastfeed,400,30);
  drawSprites();
 

}

function addFoods()
{
  food+=1; 
  database.ref('/').update({
    foodStock : food
  })
  k=0;
}


function feedthedog()
{
  dog.addImage(happyImage);
  k =1;
  
  food = food - 1;
  database.ref('/').update({
    foodStock:food
  })
}
