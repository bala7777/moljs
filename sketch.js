var fixedrect,movingrect;



function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 100, 50);
 movingrect=createSprite(301,111,50,100);
 movingrect.shapeColor="green";
 fixedrect.shapeColor="green";
}





function draw() {
  background("black");  
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;
if (istouching(movingrect,fixedrect)){
movingrect.shapeColor="orange";
fixedrect.shapeColor="orange";

}
else{
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";


}
 
  drawSprites();
}
