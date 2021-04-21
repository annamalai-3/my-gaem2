
var catcher;
var score= 0;
var tomatoimage,watermelonimage;
var icecreamimage,burgerimage;
var veggie,junk
function setup() {
  createCanvas(1200,1200);

   catcher = createSprite(400, 600, 50, 50);
   tomatoimage = loadImage("tomato.png");
   icecreamimage = loadImage("icecream.jpg")
   burgerimage = loadImage("burger.jpeg")
   watermelonimage = loadImage("watermelon.jpg")
   veggie = createSprite(random(20,700),100,50,50)
}

function draw() {
  background(0,0,0);
catcher.x = mouseX;
catcher.y = mouseY;
veggie.velocityY = 3

textSize(25);
text("SCORE :"+ score,700,120)
  drawSprites();
}
function Spawnveggies(){

if(framecount%60===0)

}