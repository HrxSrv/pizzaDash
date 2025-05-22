import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/api/auth/signin",
    signOut: "/api/auth/signout",
    error: "/api/auth/error",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard after sign in
      return url.startsWith(baseUrl) ? url : `${baseUrl}/dashboard`
    },
  },
  session: {
    strategy: "jwt",
  },
}
