class Person{
  // private Name : string
  Name : string
   constructor(Name:string){
    this.Name = Name
   }
   get SName() : string{
    return this.Name
   }
}
var person = new Person("Manasa")
console.log(person)
console.log(person.Name)
