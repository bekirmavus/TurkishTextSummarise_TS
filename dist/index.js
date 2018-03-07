"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./models/car");
var bmw_1 = require("./models/bmw");
var car1 = new car_1.Car();
var car2 = new bmw_1.Bmw();
console.log("Car 1 driver name is " + car1.getDriverName());
console.log("Car 2 driver name is " + car2.getDriverName());
