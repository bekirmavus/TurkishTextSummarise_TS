import {Car} from "./models/car";
import {Bmw} from "./models/bmw";

var car1 = new Car();
var car2 = new Bmw();

console.log("Car 1 driver name is " + car1.getDriverName());
console.log("Car 2 driver name is " + car2.getDriverName());