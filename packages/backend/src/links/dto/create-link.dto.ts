import { OmitType } from '@nestjs/mapped-types'
import { Link } from '../entities/link.entity'

export class CreateLinkDto extends OmitType(Link, ['id']) {}
