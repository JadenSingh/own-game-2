var candy1Img,candy2Img,candy3Img,candy4Img,candy5Img,candy6Img, bgImg;
var candy, candyGroup;

function preload(){
candy1Img= loadImage("images/candy1.png")
candy2Img= loadImage("images/candy2.png")
candy3Img= loadImage("images/candy3.png")
candy4Img= loadImage("images/candy4.png")
candy5Img= loadImage("images/candy5.png")
candy6Img= loadImage("images/candy6.png")
bgImg= loadImage("images/bg.jpg")

}
function setup(){
createCanvas(displayWidth-50,displayHeight)

database = firebase.database();



candyGroup =createGroup()

}
function draw(){
background(bgImg)

if (frameCount % 200 === 0) {
    candy = createSprite(random(100, 1000), 0, 100, 100);
    candy.velocityY = 3;
    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: candy.addImage("candy",candy1Img);
        break;
        case 2: candy.addImage("candy", candy2Img);
        break;
        case 3: candy.addImage("candy", candy3Img);
        break;
        case 4: candy.addImage("candy", candy4Img);
        break;
        case 5: candy.addImage("candy", candy5Img);
        break;
        case 6: candy.addImage("candy", candy6Img);
        break;
    }
    candyGroup.add(candy);


drawSprites()
}
}