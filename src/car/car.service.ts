import { HttpException, Injectable } from '@nestjs/common';
import { CarModel } from './car.model';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {

Cars: any[]= CARS;

    //get all the cars
    getCars(): Promise<any>{
        return new Promise(resolve =>{
            resolve(this.Cars)
        })
    }

    //get one car by id
    getOneCar(id){
            let car = this.Cars.find(item => {
                item.id===id;
            })
            return car;
    }

    //create a car
    addCar(car: CarModel):Promise<any>{
        return new Promise(resolve =>{
            this.Cars.push(car);
            resolve(this.Cars)
        })
    } 

    //delete a car by car_id
    deleteCar(car_id):  Promise<any>{
        return new Promise(resolve =>{
            const index = this.Cars.findIndex(car => car.id===car_id);
            this.Cars.splice(index, 1)
            resolve(this.Cars)
        })
    }
}
