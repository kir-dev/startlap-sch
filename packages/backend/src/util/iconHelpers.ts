import { FileValidator } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { v4 as uuid } from 'uuid'
import { FileExtensionValidator } from './FileExtensionValidator'
import { FileMaxSizeValidator } from './FileMaxSizeValidator'

export const IconInterceptor = FileInterceptor('icon', {
  storage: diskStorage({
    destination: './static/',
    filename: (req, file, callback) => {
      callback(null, `${req.body.slug || 'startlap'}-${uuid()}${extname(file.originalname)}`)
    },
  }),
})

export const IconValidators: FileValidator<Record<string, any>>[] = [
  new FileMaxSizeValidator({ maxSize: 1_000_000 }),
  new FileExtensionValidator({ fileType: 'image/*' }),
]
