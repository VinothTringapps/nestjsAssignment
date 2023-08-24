import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userid: string;

  @Field()
  @Column({ name: 'user_name' })
  fullname: string;

  @Field()
  @Column({ name: 'user_phone_number'})
  phoneNumber: string;

  @Field(()=>Date)
  @CreateDateColumn({name: 'User_created_details'})
  CreatedAt: Date;

  @Field(()=>Date)
  @UpdateDateColumn({ name: 'User_updated_details'})
  UpdateAt: Date;

  @Field(()=>Date)
  @DeleteDateColumn({name: 'User_deleted_details'})
  DeleteAt: Date;


  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.user)
  post: Post[];

  
}
