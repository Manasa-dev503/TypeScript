interface Person{
    age : number
}
interface IPerson{
    name : string
}
interface Musician extends Person,IPerson{
    instrument : string
}
var drummer = <Musician>{}
drummer.name = "Manu"
drummer.age = 23
drummer.instrument = "Drum"
console.log(drummer)
console.log(drummer.name)
console.log(drummer.age)
console.log(drummer.instrument)
