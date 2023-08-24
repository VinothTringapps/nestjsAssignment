import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }
  @Query(() => [Post])
  public async getAllPosts(){
    return this.postService.getAllPosts();
  }
  @Mutation(() => Boolean)
  public async  DeletePostById(@Args('id') userid:string){
    return this.postService.DeletePostById(userid);
  }
}
