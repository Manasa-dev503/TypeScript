class Sum {
   num1 : number
   num2 : number
   constructor(){
    this.num1 = 10
    this.num2 = 20
   }
   add():void{
    console.log(this.num1+this.num2)
   }
}
var sumobj = new Sum()
sumobj.add()
