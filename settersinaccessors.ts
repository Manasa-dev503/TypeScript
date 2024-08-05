class Person{
    Name : string = ""
    set name(value : string){
        this.Name = value.trim().toLowerCase()
    }
    get name():string{
        return this.Name
    }
}
const person = new Person()
person.name = "Hello World"
console.log(person.name)
