import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, IsArray } from 'class-validator'

export class AddLinksDTO {
  @IsArray()
  @ArrayMinSize(0)
  @ApiProperty({ isArray: true, type: String })
  linkIds: string[]
}
