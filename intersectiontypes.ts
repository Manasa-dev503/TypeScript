interface Name {
    fname : string
    Lname : string
}
interface Address{
    town : string
    village : string
}

type intersectiontype = Name & Address

let type : intersectiontype ={
    fname : "Manasa",
    Lname : "Bathina",
    town : "Ongole",
    village : "TNpalem"
}
console.log(type)
console.log("Firstname::"+type.fname)
console.log("Lastname::"+type.Lname)
console.log("Town::"+type.town)
console.log("Village"+type.village)