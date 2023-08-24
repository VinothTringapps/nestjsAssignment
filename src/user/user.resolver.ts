import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UpdateUserInputs } from './dto/update-user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  public async createUser(
    @Args('createUserInputs') createUserInputs: CreateUserInputs,
  ) {
    return this.userService.createUser(createUserInputs);
  }

  @Query(() => User)
  public async getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }
  @Query(() => [User])
  public async getAllUsers(){
    return this.userService.getAllUsers();
  }
  @Mutation(() => Boolean)
  public async  DeleteUserById(@Args('id') userid:string){
    return this.userService.DeleteUserById(userid);
  }
  @Mutation(()=>String)
  public async UpdateUserById(
    @Args('id') userid:string,
  @Args('UpdateFields') UpdateUserInputs:UpdateUserInputs){
    return this.userService.updateUserById(userid, UpdateUserInputs)

  }
}
