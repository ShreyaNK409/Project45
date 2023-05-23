var bg_img,bg;
var c_img,s_img,r_img;

function preload()
{
bg_img=loadImage("Road.png");

c_img=loadAnimation("Coin/coin1.gif","Coin/coin2.gif","Coin/coin3.gif","Coin/coin4.gif","Coin/coin5.gif","Coin/coin6.gif","Coin/coin7.gif","Coin/coin8.gif","Coin/coin9.gif",
 "Coin/coin9.gif","Coin/coin10.gif","Coin/coin11.gif","Coin/coin12.gif","Coin/coin13.gif","Coin/coin14.gif","Coin/coin15.gif","Coin/coin16.gif","Coin/coin17.gif","Coin/coin18.gif","Coin/coin19.gif","Coin/coin20.gif",
 "Coin/coin21.gif","Coin/coin22.gif");
 
r_img= loadAnimation("Runner/runner1.gif","Runner/runner2.gif","Runner/runner3.gif","Runner/runner4.gif","Runner/runner5.gif","Runner/runner6.gif","Runner/runner7.gif")
 
s_img=loadAnimation("Spider/")
}

function setup() {
  createCanvas(1200,300);
  bg=createSprite(100,150)
  bg.addImage(bg_img)
  bg.velocityX=-5
  
  if(bg.x < 0 ){
    bg.x = width/2;
  }



}


function draw() {
  background(0);  
  drawSprites();
}