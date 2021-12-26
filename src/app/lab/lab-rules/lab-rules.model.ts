import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class BlendingRules {}

@ObjectType()
export class LabRules {
  @Field()
  blendingRules: BlendingRules;
}
