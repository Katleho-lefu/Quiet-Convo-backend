import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {LoginDto, RegisterDto, User} from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';



@Injectable()
export class AuthService {

    logger: Logger;

    constructor(@InjectModel('UserSchema') private userModel: Model<User>, private jwtService: JwtService) {
        this.logger = new Logger(AuthService.name)
    }


    // logging a user in
    async login(credentials: LoginDto) {
        let user: any;

        try {
            // Check if user exists by Email
            user = await this.userModel.findOne({ email: credentials.email});
            if(!user) throw new BadRequestException('User does not exist');
            // Check if credential's password matches found user's password, if not return error
            if(credentials.password !== user.password ) throw new BadRequestException('Wrong Password');
            const token = this.signUser(user.email, user.password);
            return { token, username: user.username, email: user.email };
        } 
        catch (error) {   
            this.logger.error(error);
            return new BadRequestException(error)
        }
    }
    
    // take correct user to where they were on the app (🧐 I guess)
    signUser(email: string, password: string) {
        const token = this.jwtService.sign({
            email: email,
            password: password,
        })

        return token;
    }
    
    // register a user
    async register(credentials: RegisterDto){
        let results: any;
        try {
            const new_user = new this.userModel(credentials)
            results = await new_user.save();
            return results;
        } 
        catch (error){
            if (error.code === 11000 && error.keyValue.email) throw new BadRequestException('Email already exists');
            console.log(error);
            
        }
    }

    
}
