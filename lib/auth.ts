import GoogleProvider from "next-auth/providers/google"
import { AuthOptions, getServerSession } from "next-auth"

const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
}

const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }