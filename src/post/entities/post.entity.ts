import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'post' })
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'post_id' })
  id: string;

  @Field()
  @Column({ name: 'post_name' })
  postName: string;


  @Field(()=>Int)
  @Column({name: 'post_order'})
  postOrder: number;

  @Field(()=>Date)
  @CreateDateColumn({ name: 'post_created_details'})
  CreatedAt: Date;

  @Field(()=>Date)
  @UpdateDateColumn({ name: 'post_updated_details'})
  UpdateAt: Date;

  @Field(()=>Date)
  @DeleteDateColumn({name: 'post_deleted_details'})
  DeleteAt: Date;

  @Field()
  @Column({ name: 'user_id' })
  userId: string;

  @Field()
  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
