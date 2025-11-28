import GoogleProvider from "next-auth/providers/google";
import type { AuthOptions } from "next-auth";
import { ConnectToDatabase } from "@/config/database";
import User from "@/models/User";
import type { GoogleProfile } from "@/types/google-profile";

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
      await ConnectToDatabase();

      // 2. Check if user exists
      const userExists = await User.findOne({ email: user.email });

      // 3. Create user if not exists
      if (!userExists && profile) {
        const googleProfile = profile as GoogleProfile;

        //truncate if name is too long
        const userName =
          googleProfile.name && googleProfile.name.length > 30
            ? googleProfile.name.substring(0, 27) + "..."
            : googleProfile.name;

        await User.create({
          email: googleProfile.email,
          username: userName,
          image: googleProfile.picture,
        });
      }

      // 4. Return true to allow sign in
      return true;
    },
    async session({ session }) {
      // 1. Get the user from DB
      if (session?.user?.email) {
        const user = await User.findOne({ email: session.user.email });

        // 2. Attach user ID to session
        if (user) {
          session.user.id = user._id.toString();
        }
      }

      // 3. Return session
      return session;
    },
  },
};
