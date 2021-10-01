import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model';




@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserSchema', schema: UserSchema}]),
    JwtModule.register({
    secret: 'super-secret-cat',
  })
],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
