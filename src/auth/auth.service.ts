import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {Users} from './mock'


@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService){}

    users = Users;

    checkSignIn(dto){
        const user = this.users.find(user=>user.email===dto.email)
        if(!user) throw new HttpException('User not found', 404);
        if( user.password !== dto.password ) throw new HttpException('Invalid credentials',404)
        return this.signUser(user.id, user.email, 'user')
    };

    signUp(dto){
        // const user = this.users.push(dto)
        // if(!user) throw new HttpException('User not found', 404);
        // if( user == dto.password ) throw new HttpException('Invalid credentials',404)
        // return user;
    };


    signUser(userId: number, email: string, type: string,){
        return this.jwtService.sign({
            sub: userId,
            email: email,
            type: type,
        })
    }
}
