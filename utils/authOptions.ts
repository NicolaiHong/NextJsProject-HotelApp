import GoogleProvider from "next-auth/providers/google";
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // 1. Connect to DB
      // 2. Check if user exists
      // 3. Create user if not exists
      // 4. Return true to allow sign in
      return true;
    },
    async session({ session, user }) {
      // 1. Get the user from DB
      // 2. Attach user ID to session
      // 3. Return session
      return session;
    },
  },
};
