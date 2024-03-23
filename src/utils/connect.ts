import {PrismaClient} from '@prisma/client'
const globalForPrisma=globalThis as unknown as{
    prisma:PrismaClient | undefined

}
export const prisma =globalForPrisma.prisma ?? new PrismaClient()
if(process.env.NODe_ENV !=='production') globalForPrisma.prisma=prisma