import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma' //prisma client

export const {auth, handlers, signIn, signOut} = NextAuth({
    providers: [GitHub],
    // only when using prisma
    adapter: PrismaAdapter(prisma)
})