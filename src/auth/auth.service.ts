import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';
import {Users} from './mock'


@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService){}

    users = Users;

    // logging a user in
    login(credentials: AuthDto){
        const user = this.users.find(user=>user.email===credentials.email)
        if(!user) throw new HttpException('User not found', 404);
        if( user.password !== credentials.password ) throw new HttpException('Invalid credentials',404)
        return this.signUser(user.id, user.email, 'user');
    };

    signUser(userId: number, email: string, type: string){
        const token = this.jwtService.sign({
            sub: userId,
            email: email,
            type: type,
        })
        return token;
    }
    
    // register a user
    register(credentials: AuthDto){
        const user = this.users.find(user=>user.email===credentials.email);
        if(user.password===credentials.password) throw new HttpException('User already exits, please login', 401);
        this.users.push(credentials);
        return credentials;
    }

    
}
