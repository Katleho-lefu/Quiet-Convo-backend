import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('local/signin')
    signIn(@Body() dto: AuthDto){
        return this.authService.checkSignIn(dto)
    }

    @Post('local/signup')
    signUp(@Body() dto: AuthDto){
        return this.authService.signUp(dto)
    }
}
