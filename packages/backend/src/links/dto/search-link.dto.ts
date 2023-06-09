import { IsOptional, IsString } from 'class-validator'

export class SearchLink {
  @IsOptional()
  @IsString()
  title?: string
}
