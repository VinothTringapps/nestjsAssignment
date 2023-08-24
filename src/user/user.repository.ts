import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreateUserInputs } from './dto/create-user.input';
import { UpdateUserInputs } from './dto/update-user.input';

import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.save({
      fullname: createUserInputs.fullname,
      phoneNumber:createUserInputs.phoneNumber
    });
  }

  public async getAllUsers() {
    return this.find()
  }
  public async getOne(userid: string) {
    try
    {
        let User = await this.findOneBy({userid})
        return User
    } 
    catch(err){
      throw new Error(`${userid} not found`)
    }
  }

  public async DeleteUserById(userid:string){
    try{
      return (await this.softDelete(userid))
    }
    catch(err){
      throw new Error(`${userid} not found`)
    }
  }

  public async UpdateUserById(userid:string,UpdateUserInputs:UpdateUserInputs){
      const item=await this.update(userid,{fullname:UpdateUserInputs.fullname,phoneNumber:UpdateUserInputs.phoneNumber})
      return "Successfully Updated"
  }
  public async updateUser(userid:string,UpdateUserInputs:UpdateUserInputs){
    try{
      let User=await this.findOneBy({userid})
      return this.save({
        fullname: UpdateUserInputs.fullname,
        phoneNumber:UpdateUserInputs.phoneNumber
      });
    }
    catch(err){
      throw new Error(`${userid} not found`)
    }
  }
}
