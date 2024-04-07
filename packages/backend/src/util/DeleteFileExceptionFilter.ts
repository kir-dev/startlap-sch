import { ArgumentsHost, Catch } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { Request } from 'express'
import { unlink } from 'fs'
import { join } from 'path'

/**
 * If a file was passed with the request as form-data,
 * it will be deleted from the static folder before
 * passing the exception to the base exception handler of Nest.
 */
@Catch()
export class DeleteFileExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest<Request>()
    if (request.file) {
      unlink(join(process.cwd(), '/static', request.file.filename), () => undefined)
    }
    super.catch(exception, host)
  }
}
