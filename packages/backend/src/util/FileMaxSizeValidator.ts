import { FileValidator, PayloadTooLargeException } from '@nestjs/common'
import { unlink } from 'fs'
import { join } from 'path'

export class FileMaxSizeValidator extends FileValidator<{ maxSize: number }> {
  isValid(file?: Express.Multer.File): boolean {
    return file.size <= this.validationOptions.maxSize
  }

  buildErrorMessage(file: Express.Multer.File): string {
    unlink(join(process.cwd(), '/static', file.filename), () => {})
    throw new PayloadTooLargeException(`The size of the file can't exceed ${this.validationOptions.maxSize / 1000000} MB!`)
  }
}
