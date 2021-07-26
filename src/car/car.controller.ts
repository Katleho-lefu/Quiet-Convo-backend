import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { CarModel } from './car.model';
import { CarService } from './car.service';

@Controller('car')
export class CarController {

    constructor(private carService: CarService) {}

    @Get()
    async getCars(){
        const cars =  await this.carService.getCars();
        return cars;
    }

    @Get(':id')
    getCar(@Param('id') id){
       const result =  this.carService.getOneCar(id);
       return result;
    }

    @Post()
    async addCar(@Body() car:CarModel){
        const cars = await this.carService.addCar(car)
        return cars;
    }

    @Delete()
    async deleteCar(@Query() query){
        const cars = await this.carService.deleteCar(query.id);
        return cars;
    }
}
