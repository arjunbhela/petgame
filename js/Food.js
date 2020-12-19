class Food11 {
    constructor() {
        this.foodStock = 0;
        this.milkImg = loadImage("images/Milk.png")
    }
    getFoodStock() {
        return this.foodStock;
    }
    updateFoodStock(food) {
     this.foodStock = food;
    }

    display() {
        var x=80,y=100

        imageMode(CENTER)
        image(this.milkImg,720,220,70,70)

        if (this.foodStock != 0) {
            for(var i = 0; i < this.foodStock; i++) {
                if (i%10===0){
                    x = 80
                    y = y+50;
                }
                image(this.milkImg,x,y,50,50)
                x=x+30
            }

        }
    }
}