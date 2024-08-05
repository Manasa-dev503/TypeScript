abstract class Car{
    constructor(){
        
    }
    abstract display():void
}

class Tata extends Car{
    
    constructor(){
        super()
    }
    display():void{
        console.log("This is Tata Car")
    }
}

class Maruthi extends Car{
    
    constructor(){
        super()
    }
    display():void{
        console.log("This is Maruthi Car")
    }
}


var tata:Car = new Tata()
tata.display()

var maruthi:Car = new Maruthi()
maruthi.display()