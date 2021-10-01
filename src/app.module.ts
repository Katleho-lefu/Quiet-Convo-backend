import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://Victor:Katdarad18@learning.ozzgj.mongodb.net/QuietConvo?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
