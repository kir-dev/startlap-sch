import { Injectable } from '@nestjs/common'
import { Link, Prisma, User } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { ChangeUserRole } from './dto/changeUserRole.dto'
import { UserProfile } from './dto/userProfile.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } })
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data })
  }

  async updateRole(id: string, newRole: ChangeUserRole): Promise<User> {
    return await this.prisma.user.update({ where: { id }, data: { role: newRole.role } })
  }

  async getProfile(id: string): Promise<UserProfile> {
    const user = await this.prisma.user.findUnique({ where: { id }, include: { collections: { include: { links: true } }, submissions: true } })
    return { collections: user.collections, submissions: user.submissions, firstName: user.firstName, email: user.email }
  }
  async saveFavorite(id: string, user: User): Promise<void> {
    await this.prisma.user.update({ where: { id: user.id }, data: { favorites: { connect: { id } } } })
    return
  }
  async removeFavorite(id: string, user: User): Promise<void> {
    await this.prisma.user.update({ where: { id: user.id }, data: { favorites: { disconnect: { id } } } })
  }
  async getFavorites(user: User): Promise<Link[]> {
    const res = await this.prisma.user.findUnique({ where: { id: user.id }, include: { favorites: true } })
    return res.favorites
  }
}
