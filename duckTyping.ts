interface Driveable {
    drive(): void;
}
class Car implements Driveable {
    drive(): void {
      console.log("Car is driving");
    }
}
class Truck implements Driveable {
    drive(): void {
      console.log("Truck is driving");
    }
}
function goDrive(driveable: Driveable) {
    driveable.drive();
}
let car = new Car();
let truck = new Truck();
goDrive(car); 
goDrive(truck); 