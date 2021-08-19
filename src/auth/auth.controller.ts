import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('login')
    signIn(@Body() dto: AuthDto){
        return this.authService.login(dto)
    }

    @Post('register')
    signUp(@Body() dto: AuthDto){
        return this.authService.register(dto)
    }
}
