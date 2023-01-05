import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
//import EmailProvider from "next-auth/providers/email"
import Auth0Provider from "next-auth/providers/auth0"


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
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    }),
    /*
    https://stackoverflow.com/questions/72023479/next-auth-only-valid-absolute-urls-can-be-requested
    https://community.auth0.com/t/error-while-using-next-auth-v4-with-auth0-as-provider/97550
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


