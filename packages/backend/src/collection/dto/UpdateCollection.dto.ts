import { OmitType, PartialType } from '@nestjs/swagger'
import { CreateCollectionDto } from './CreateCollection.dto'

export class UpdateCollectionDto extends OmitType(PartialType(CreateCollectionDto), ['linkIds']) {}
