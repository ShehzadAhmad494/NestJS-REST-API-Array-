import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUser(){
        return 'This is the users controller from get route';
    }

    @Post()
    createUser(){
        return 'This is the users controller from post route';
    }
    @Put()
    updateUser(){
        return 'This is the users controller from put route';
    }
    @Delete()
    deleteUser(){
        return 'This is the users controller from delete route';
    }
}
