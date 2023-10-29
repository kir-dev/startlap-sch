import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } })
  }

  create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data })
  }
}
