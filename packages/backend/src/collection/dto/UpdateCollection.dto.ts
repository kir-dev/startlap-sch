import { PartialType } from '@nestjs/mapped-types'
import { CreateCollectionDto } from './CreateCollection.dto'

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {}
