
export class Car {

    private driver:string = "ghost";

    constructor() {}

    public getDriverName(){
        return this.driver;
    }

    public setDriverName(driver:string){
        this.driver = driver;
    }

}