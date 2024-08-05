import shape = require("./IShape")

export class Triangle implements shape.Ishape{
    public draw(){
        console.log("Triangle is drawn")
    }
}