import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AccessControlUsers {
  @Field((type) => [String])
  roleMembers: string[];

  @Field()
  roleAdmin: string;
}
