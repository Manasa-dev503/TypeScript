interface details{
    fname: string
    lname:string
}
interface details1 extends details{
    town : string
}
interface details2 extends details{
    village : string
}
interface details3 extends details1,details2{
    college : string
}
var data : details3 = {
    fname : "Manasa",
    lname : "Bathina",
    town : "Ongole",
    village : "TN.Palem",
    college : "RISE"
}
console.log(data)
