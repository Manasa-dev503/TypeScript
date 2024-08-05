interface Person{
    firstname : string
    lastname : string
    getFullname() : string
}

let Obj : Person = {
    firstname : "Manasa",
    lastname : "Bathina",
    getFullname() : string{
        return this.firstname+""+this.lastname
    }
}
console.log(Obj.getFullname())