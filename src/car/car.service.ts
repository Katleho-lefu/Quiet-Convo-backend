import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarModel, CarSchema } from './car.model';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {

Cars: any[]= CARS;

    constructor(@InjectModel('CarSchema') private readonly carModel: Model<CarModel>){}

    //get all the cars
    async getCars(){
      const cars= await this.carModel.find().exec();
      return cars;
    }

    //get one car by id
    getOneCar(car_id){
            const car= this.carModel.findById(car_id);
            console.log(car);
            return car;
    }

    // Create a car
     async addCar(car: CarModel){
        const new_car= new this.carModel({
            brand: car.brand,
            color: car.color,
            model: car.model,
        })
         const results = await new_car.save();
         return results;
    }

    

    //delete a car by car_id
    deleteCar(car_id): Promise<any>{
        return new Promise(resolve=>{
            const car = this.carModel.findByIdAndRemove(car_id);
            if(!car){
                throw new HttpException('this car is not found', 404)
            }
            resolve(car);
        })
    }


}