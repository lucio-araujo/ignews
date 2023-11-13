import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import { query as q } from "faunadb";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: ["read:user"],
      jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
        signingKey: process.env.NEXTAUTH_JWT_SIGNINGKEY,
      },
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      try {
        await fauna.query(
          q.Create(q.Collection("users"), {
            data: {
              email: user.email,
            },
          })
        );
        return true;
      } catch {
        return false;
      }
    },
  },
});
