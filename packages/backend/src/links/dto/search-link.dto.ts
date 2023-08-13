import { IsOptional, IsString } from 'class-validator'

export class SearchLink {
  @IsOptional()
  @IsString()
  term?: string
}
