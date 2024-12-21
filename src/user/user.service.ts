import { Injectable } from '@nestjs/common';
import { privateDecrypt } from 'crypto';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

const result : UserModel[] = [];

@Injectable()
export class UserService {
 
    getAllUsers(): UserModel [] {

        if (result.length == 0){
            this.creatingMockUser({
                birthDay:new Date(),
                email:"xyzt@gmail.com",
                name: "ezo",
                surname: "cmpe",
                password: "123456"
                }
            )
       }
return result;
    }
    createUser(body: UserCreateDto) {
        const isExist = result.find(res =>{
            res.email === body.email;
        });
if (isExist) {
    return isExist;
} else {
    this.creatingMockUser(body);
    return result.slice(result.length -1, result.length);
}
}
    
        private creatingMockUser(data: any){

        
            const user : UserModel= new UserModel();
            user.birthDay = data.birthDay;
            user.email = data.email;
            user.name = data.name;
            user.surname = data.surname;
            user.password = data.password;

            result.push(user);
         }

    }
  

