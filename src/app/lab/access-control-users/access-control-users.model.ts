import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AccessControlUsers {
  @Field()
  roleMember: string;
}
