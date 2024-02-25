import { PartialType } from '@nestjs/swagger'
import { CreateCollectionDto } from './CreateCollection.dto'

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {}
