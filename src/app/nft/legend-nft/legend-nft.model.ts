import { ObjectType, Field, IntersectionType, OmitType } from '@nestjs/graphql';
import { LegendMetadata } from '../legend-metadata/legend-metadata.model';
import { LegendURI } from '../legend-uri/legend-uri.model';

// add more fields such as cost to breed, etc
@ObjectType()
export class LegendNFT extends IntersectionType(
  OmitType(LegendURI, ['payload'] as const),
  OmitType(LegendMetadata, ['id'] as const),
) {
  @Field()
  ownerOf?: string;

  @Field()
  isHatchable?: string;
}
