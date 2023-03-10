
import NextAuth ,{NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


const authOptions: NextAuthOptions ={
  session:{
    strategy: 'jwt'
  },
  providers:[
    CredentialsProvider({
      type:'credentials',
      credentials:{},
      authorize(credentials,req){ 
        const {email, password} = credentials as {
          email: string;
          password: string;
        } ;      
        if (email !== "aswin@gmail.com" || password !== "aswin"){
            throw new Error ('invalied credentials')
        } 
         return {
          id:"1234", 
          name:"aswin",
          email:"aswin@gmail.com"
         };
      }
    })
  ],
  pages:{
    signIn : '/auth/signin'


  }
}



export default NextAuth(authOptions);
 