var dog
var dogH
var milk
var foodObj
var fedTime, lastFed
var foodS = 0;
function preload(){
dogImg = loadImage("images/dogImg.png")
dogHImg = loadImage("images/dogImg1.png")
}

function setup(){
  createCanvas(1000,500)
  database = firebase.database()
feed = createButton("Feed Drago")
feed.position(700,30)
feed.mousePressed(feedDog)

addFood = createButton("Add food")
addFood.position(800,30)
addFood.mousePressed(addFoods)
dog = createSprite(600,310,30,30)
dog.addImage(dogImg)
dog.scale = 0.3

foodObj = new Food11(400,500,50,50)
}


function draw(){
  background(46, 139, 87)
  foodObj.display();
  drawSprites()
  fedTime=database.ref('feedTime')
  fedTime.on("value",function(data){
    lastFed = data.val();
    if (lastFed >=12) {
      textSize(20)
      fill("white")
      text("Last feed: "+ lastFed%12+"PM",100,100)
    }
   
  })
if (foodS !== undefined) {
  text("Food Stock: "+foodS,50,50)}
}
function feedDog() {
dog.addImage(dogHImg)

foodObj.updateFoodStock(foodObj.getFoodStock()-1) 

database.ref('/').update({
  Food:foodObj.getFoodStock(),
  feedTime:hour()
})
}

function addFoods() {
foodS++
database.ref('/').update({
  Food:foodS
})
}

