import NextAuth from "next-auth";
import log from "../../../utils/log";
import { getUserByEmailOrCreate } from "../../../utils/post-data";
import sendVerificationRequest from "../../../utils/sendVerificationRequest";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import FacebookProvider from "next-auth/providers/facebook";
import EmailProvider from "next-auth/providers/email";

export const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET, 
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: +(process.env.EMAIL_SERVER_PORT || 587),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  debug: true,
  secret: "32df-3df@-hy87-5KmrE",
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    // A secret to use for key generation - you should set this explicitly
    // Defaults to NextAuth.js secret if not explicitly specified.
    secret: "KJmr49gg333-3ntcdKdied-49dfjJdJd42",

    // Set to true to use encryption. Defaults to false (signing only).
    // encryption: true,

    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // async encode({ secret, token, maxAge }) {},
    // async decode({ secret, token, maxAge }) {},
  },
  pages: {
    signIn: "/auth/signin",
    //     signOut: '/auth/signout',
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/profiles/new", // If set, new users will be directed here on first sign in
  },
  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
  // events: {
  //   async linkAccount({ user, providerAccount }): Promise<void> {
  //     console.log(user, providerAccount);
  //   }
  // },
  callbacks: {
    /**
     * @param  {object} session      Session object
     * @param  {object} token        User object    (if using database sessions)
     *                               JSON Web Token (if not using database sessions)
     * @return {object}              Session that will be returned to the client
     */
    async session(session: any, token: any): Promise<any> {
      try {
        // Add property to session, like an access_token from a provider.
        session.accessToken = token.accessToken;
        const user = await getUserByEmailOrCreate(session.user);
        console.log("user",user)
        console.log("SESSION AQUI!",session);
        session.user.id = user.id;
        log(session);
      } catch (e) {
        log("error, nextauth, session" + e.message);
      }
      return session;
    },
  },
});
