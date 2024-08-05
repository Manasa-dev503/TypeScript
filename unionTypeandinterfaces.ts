interface Name{
    fname : string
    lname : string | string[] | (()=>string)
}



var Obj : Name = {
    fname : "Manu",
    lname : "Bathina"
}
console.log(Obj)
console.log(Obj.lname)


Obj = {
    fname : "Manasa",
    lname : ["Bathina","Bujji"]
}
console.log(Obj)
console.log(Obj.lname)
console.log(Obj.lname[0])
console.log(Obj.lname[1])


Obj = {
    fname : "Hyma",
    lname : ()=>{return "Hello World"}
}
console.log(Obj)
console.log(Obj.lname)
var fn:any  = Obj.lname
console.log(fn())
