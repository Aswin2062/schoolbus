
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "612066905320-pu91q3eh49rfa7oa5cnkkdr70re7ps24.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
 