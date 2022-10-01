//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberofWheels = 4;
        this. maximumSpeed = 160;
        this.scheduleService = false;
        this.fuel = 10;
    }
        loadPassenger(num){
            if(num + this.passenger <= maximumPassengers){
                this.passenger = num;
                return this.passenger;
            }  
        }

        start(){
            if(fuel > 0){
               return this.start == true;
            } else {
                return this.start == false;
            }
        }

        scheduleService(mileage){
            if(mileage > 30000) {
                this.scheduleService == true
                return this.scheduleService;
            }
        }
    }


