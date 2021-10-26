import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User, LoginDto, RegisterDto } from './user.model';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('login')
    login(@Body() credentials: LoginDto){
        // return this.authService.login(credentials);
        return this.authService.login(credentials);
    }

    @Post('register')
    register(@Body() credentials: RegisterDto){
        return this.authService.register(credentials)
    }
    
}
