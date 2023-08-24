import { Injectable } from '@nestjs/common';
import { CreateUserInputs } from './dto/create-user.input';
import { UpdateUserInputs } from './dto/update-user.input';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.userRepo.createUser(createUserInputs);
  }

  public async getAllUsers():Promise<User[]>{
    return this.userRepo.getAllUsers();
  }

  public async getUserById(id:string):Promise<User> {
    // select * from users left join post on user.user_id = post.user_id where users.user_id = ''
    return this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.post', 'p')
      .where('user.id =:id', { id })
      .getOne();
  }

  public async DeleteUserById(userid:string):Promise<Boolean>{
    this.userRepo.DeleteUserById(userid)
    return true;
  }
  public async updateUserById(userid:string,UpdateUserInputs:UpdateUserInputs){
    return this.userRepo.UpdateUserById(userid,UpdateUserInputs)
  }
  public async updateUser(userid:string,UpdateUserInputs:UpdateUserInputs):Promise<User>{
    return this.userRepo.updateUser(userid,UpdateUserInputs)
  }

}
