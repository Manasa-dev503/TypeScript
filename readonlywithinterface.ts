interface Person{
    name : string,
    town : string,
    readonly village : string

}

var person : Person={
    name : "Manasa",
    town : "Ongole",
    village : "TNpalem"

}
person.village = "Gudlur"
console.log(person)
console.log(person.name)
console.log(person.town)
console.log(person.village)
