// pages/api/auth/[...nextauth].ts
import { NextApiHandler } from 'next';
import Providers from 'next-auth/providers';
import prisma from '../../../lib/prisma';
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import NextAuth, { User as NextAuthUser } from 'next-auth';

interface NextAuthUserWithStringId extends NextAuthUser {
    id: string;
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
    callbacks: {
        async session(session: any, user: NextAuthUserWithStringId) {
            user = {
                id: user.id.toString(),
                name: user.name || user.login,
                email: user.email ?? user.name,
                image: user.avatar_url ?? user.image,
            } as NextAuthUserWithStringId
            return { ...session, user };
        }
    },
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,


            profile(profile) {
                console.log('profile', profile);
                return {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    email: profile.email ?? profile.login,
                    image: profile.avatar_url,
                } as NextAuthUserWithStringId
            }
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // callbacks: {
            //     async signIn(user, account, profile) {
            //         if (account.provider === 'google' &&
            //             profile.verified_email === true &&
            //             profile.email.endsWith('@example.com')) {
            //             return true;
            //         } else {
            //             return false;
            //         }
            //     },
            // }
        }),

    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
};
