import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
//import EmailProvider from "next-auth/providers/email"


export const options = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET        
    }),
    /*
    Providers.Email({
        server:{
            host:"",
            port:"",
            auth: {
                user:"",
                pass:"",
            },
        },
        from:"",
    }) 
    */
  ],
}
export default NextAuth(options)


