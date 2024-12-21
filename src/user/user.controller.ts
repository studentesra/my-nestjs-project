import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { createSecureServer } from 'http2';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { get } from 'http';

@Controller('user')
export class UserController {
 constructor (private userService:UserService){}

@Post()
createUser(@Body() body: UserCreateDto){
    return this.userService.createUser(body);
}
@Get()
getAllUsers(): UserModel []{
    return this.userService.getAllUsers();
}

@Get(':id')
getUser(@Param() params): UserModel{
    return this.userService.getUserById(params.is);
}


}

