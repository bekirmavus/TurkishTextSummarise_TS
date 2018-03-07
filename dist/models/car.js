"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car() {
        this.driver = "ghost";
    }
    Car.prototype.getDriverName = function () {
        return this.driver;
    };
    Car.prototype.setDriverName = function (driver) {
        this.driver = driver;
    };
    return Car;
}());
exports.Car = Car;
