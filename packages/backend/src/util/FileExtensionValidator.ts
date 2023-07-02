import { FileValidator } from '@nestjs/common'
import { unlink } from 'fs'
import { extname, join } from 'path'

export class FileExtensionValidator extends FileValidator<{
  allowedExtensions: string[]
}> {
  //isValid(file?: Express.Multer.File): boolean | Promise<boolean> {
  // TODO this worked with the Express type until nest v10
  isValid(file?: any): boolean | Promise<boolean> {
    return this.validationOptions.allowedExtensions.includes(extname(file.originalname))
  }
  buildErrorMessage(file: Express.Multer.File): string {
    unlink(join(process.cwd(), '/static', file.filename), () => {})
    return `Érvénytelen kiterjesztés: ${extname(file.originalname)}! Megengedett kiterjesztések: ${this.validationOptions.allowedExtensions.join(
      ', '
    )}`
  }
}
