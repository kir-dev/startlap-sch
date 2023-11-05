import { Injectable } from '@nestjs/common'
import { Prisma, User, UserRole } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } })
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data })
  }

  async updateRole(id: string, role: UserRole): Promise<User> {
    return await this.prisma.user.update({ where: { id }, data: { role } })
  }
}
