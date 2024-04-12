import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { createUserDTO } from './dto/create-user.dto';
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
    async createUser(@Body() newUser: createUserDTO): Promise<User> {
        const hashedPassword = await this.usersService.hashPassword(newUser.password)
        const user = {
            username: newUser.username,
            password: hashedPassword
        }
        return this.usersService.createUser(user)
    }
}