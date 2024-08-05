// Decorator factory -> returns function expression

function printExecution(method:any,_context:any){
    return function (value:any,...args: any[]){ //return new function
        console.log("start::",method.name) // logging the method name at the start
        const result = method.call(value,...args)  //calling the original method
        console.log("end::",method.name)   //logging the method name at the end
        return result 

    }

}


//defining a class

class Student{
    constructor(private name:string,private rollno:number) { }

    @printExecution 
    sayHello(){
        console.log(`Hello, my name is ${this.name}.`)
    }
    @printExecution
    printRollNo(){
        console.log(`Hello, my rollno is ${this.rollno}.`)
    }

}

const user = new Student("manasa",23)
user.sayHello()
user.printRollNo()