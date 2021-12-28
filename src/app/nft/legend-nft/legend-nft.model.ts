import { ObjectType, Field, IntersectionType, OmitType } from '@nestjs/graphql';
import { LegendMetadata } from '../legend-metadata/legend-metadata.model';
import { LegendURI } from '../legend-uri/legend-uri.model';

@ObjectType()
export class LegendNFT extends IntersectionType(
  LegendMetadata,
  OmitType(LegendURI, ['id'] as const),
) {
  @Field()
  metadata: LegendMetadata;

  @Field()
  uri: LegendURI;
}
