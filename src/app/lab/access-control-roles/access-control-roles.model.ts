import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AccessControlRoles {
  @Field()
  DEFAULT_ADMIN_ROLE: string;

  @Field()
  LAB_ADMIN: string;

  @Field()
  LAB_TECH: string;

}
