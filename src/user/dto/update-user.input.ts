import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInputs {
  @Field({nullable:true})
  fullname: string;
  @Field({nullable:true})
  phoneNumber:string;
}
