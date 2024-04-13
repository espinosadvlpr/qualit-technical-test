import { Controller, Post, Get, Body, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { userDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getAllUsers(): Promise<User[]> {
        return this.usersService.getAllUsers()
    }

    @Post('register')
    async createUser(@Body() newUser: userDTO): Promise<User> {
        const hashedPassword = await this.usersService.hashPassword(newUser.password)
        const user = {
            email: newUser.email,
            username: newUser.username,
            password: hashedPassword
        }
        return this.usersService.createUser(user)
    }

    @Post('login')
    async login(@Body() userInfo: userDTO ): Promise<User> {
        const { email, password } = userInfo
        const user = await this.usersService.getUser(email)
        if(!user){
            throw new NotFoundException('User not found.')
        }
        const match = await this.usersService.comparePasswords(password, user.password)
        if(match) {
            return user
        }
        throw new UnauthorizedException('The credentials are not valid.')
    }
}