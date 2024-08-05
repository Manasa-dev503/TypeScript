interface Person{
    age : number
}

interface Musician extends Person{
    instrument : string
}

var drummer = <Musician>{}
drummer.age = 23
drummer.instrument = "Drums"
console.log(drummer)
console.log(drummer.age)
console.log(drummer.instrument)