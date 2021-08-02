import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { timeStamp } from 'node:console';
import { resolve } from 'node:path';
import { CarModel, CarSchema } from './car.model';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {

Cars: any[]= CARS;

    constructor(@InjectModel('CarSchema') private readonly carModel: Model<CarModel> ){}

    //get all the cars
    getCars(): Promise<any>{
        return new Promise(resolve =>{
            resolve(this.Cars)
        })
    }
 
    //get one car by id
    getOneCar(car_id): Promise<any> {
        return new Promise(resolve =>{
            let car= this.Cars.find(item=> item.id===car_id);
            if (!car){
                throw new HttpException(`Car with index ${car_id} doesn't exist`, 404);
            }
            resolve (car);
        });      
    }

    // Create a car
     async addCar(car: CarModel){
        const new_car= new this.carModel({
            brand: car.brand,
            color: car.color,
            model: car.model,
        })
         const results = await new_car.save();
         return results
    } 

    //delete a car by car_id
    deleteCar(car_id): Promise<any>{
        return new Promise(resolve =>{
            const index = this.Cars.findIndex(car => car.id===car_id);
            this.Cars.splice(index, 1)
            if (index == -1){
                throw new HttpException(`Item at ${car_id} doesn't exist`, 404);}
            resolve(this.Cars)
        })
    }

}
