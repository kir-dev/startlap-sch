import { FileValidator } from '@nestjs/common'
import { unlink } from 'fs'
import { extname, join } from 'path'

export class FileExtensionValidator extends FileValidator<{
  fileType: string
}> {
  isValid(file?: Express.Multer.File): boolean | Promise<boolean> {
    return !!file && 'mimetype' in file && !!file.mimetype.match(this.validationOptions.fileType)
  }
  buildErrorMessage(file: Express.Multer.File): string {
    unlink(join(process.cwd(), '/static', file.filename), () => {})
    return `Invalid extension: ${extname(file.originalname)}! Only pictures are allowed!`
  }
}
