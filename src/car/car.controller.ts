import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { CarModel } from './car.model';
import { CarService } from './car.service';

@Controller('car')
export class CarController {

    constructor(private carService: CarService) { }

    @Get()
    async getCars() {
        const cars = await this.carService.getCars();
        return cars;
    }

    @Get(':id')
    async getCar(@Param('id') id: string) {
        const result = await this.carService.getOneCar(id);
        return result;
    }

    @Post()
    async addCar(@Body() car: CarModel) {
        const new_car = await this.carService.addCar(car);
        return new_car;
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() item: CarModel) {
        const car = await this.carService.updateCar(id, item);
        return car;
    }

    @Delete(':id')
    async deleteCar(@Param('id') id: string) {
        const cars = await this.carService.deleteCar(id);
        return cars;
    }
}
