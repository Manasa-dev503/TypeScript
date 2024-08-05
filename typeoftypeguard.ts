var Fname : string = "Manasa"
var Lname : string = "Bathina"
var RollNo : number = 503
console.log("Fname::"+typeof Fname)
console.log("Lname::"+typeof Lname)
console.log("RollNo::"+typeof RollNo)




let obj1: { id: number; name: string } = { id: 1, name: 'Tutorialspoint' }
let obj2: { name: string; roll: number } = { name: 'XYZ', roll: 12 }
let obj3: { id: number; marks: { english: number; math: number } } = {
   id: 101,
   marks: {
      math: 90,
      english: 80,
   },
}

console.log('Is name in obj1? => ' + ('name' in obj1))
console.log('Is id obj2? => ' + ('id' in obj2))
console.log('Is marks in obj3? => ' + ('marks' in obj3))
console.log('Is math in obj3.marks? => ' + ('math' in obj3.marks))