/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PostRepository } from './post.repository';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(private readonly postRepo: PostRepository) {}
  create(createPostInput: CreatePostInput) {
    return this.postRepo.createPost(createPostInput);
  }
  public async getAllPosts(): Promise<Post[]> {
    return this.postRepo.getAllPosts();
  }
  public async DeletePostById(userid:string):Promise<Boolean>{
    this.postRepo.DeletePostById(userid)
    return true;
  }
}
