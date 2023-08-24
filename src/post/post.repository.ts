import { Injectable } from '@nestjs/common/decorators';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(private readonly dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  async createPost(createPostInput: CreatePostInput) {
    return this.save({
      postName: createPostInput.postName,
      postOrder:createPostInput.postOrder,
      userId: createPostInput.userId,
    });
  }
  async getAllPosts(){
    return this.find()
  }
  public async DeletePostById(id:string){
    try{
      return (await this.softDelete(id))
    }
    catch(err){
      throw new Error(`${id} not found`)
    }
  }
}
