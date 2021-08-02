import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';


@Module({
  imports: [CarModule, MongooseModule.forRoot('mongodb+srv://Victor:Katdarad18@learning.ozzgj.mongodb.net/CarsDB?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
