
class College{
    clgname:string;

    constructor(){
        this.clgname="RPRA"
    }
}



class Student extends College {
    rollno:string; 
   
   constructor() { 
      super()
      this.rollno = '503'
     
   }  

   displaying():void { 
      console.log(this.rollno) 
      console.log(this.clgname)
   } 
} 

var s = new Student()
s.displaying()