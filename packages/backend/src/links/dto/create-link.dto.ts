import { OmitType } from '@nestjs/swagger'
import { Link } from '../entities/link.entity'

export class CreateLinkDto extends OmitType(Link, ['id', 'iconUrl']) {}
