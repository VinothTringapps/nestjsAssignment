import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {

  @Field()
  postName: string;

  @Field(()=>Int)
  postOrder: number;

  @Field()
  userId: string;
}
