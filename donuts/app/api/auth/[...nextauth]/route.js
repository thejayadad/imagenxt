

import bcrypt from "bcrypt"
import prisma  from "@/lib/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'


const handler= NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
              email: { label: 'email', type: 'text' },
              password: { label: 'password', type: 'password'}
              
            },
            async authorize(credentials) {
              if (!credentials?.email || !credentials?.password) {
                throw new Error('Invalid credentials');
              }
      
      
              const user = await prisma.user.findUnique({
                where: {
                  email: credentials.email
                }
              });
      
              if (!user || !user?.hashedPassword) {
                throw new Error('Invalid credentials');
              }
              const isCorrectPassword = await bcrypt.compare(
                credentials.password,
                user.hashedPassword
              );
      
              if (!isCorrectPassword) {
                throw new Error('Invalid credentials');
              }
              return user;
            }
          })
   
    ],
    pages: {
        signIn: '/',
      },
      callbacks: {
        session: ({ session, token }) => {
          console.log('Session Callback', { session, token })
          return {
            ...session,
            user: {
              ...session.user,
              id: token.id,
              randomKey: token.randomKey
            }
          }
        },
        jwt: ({ token, user }) => {
            console.log('JWT Callback', { token, user })
            if (user) {
              const u = user 
              return {
                ...token,
                id: u.id,
                randomKey: u.randomKey
              }
            }
            return token
          }
        },
        debug: process.env.NODE_ENV === 'development',
        session: {
            strategy: "jwt",
          },
          secret: process.env.NEXTAUTH_SECRET,

  });

export {handler as GET, handler as POST}