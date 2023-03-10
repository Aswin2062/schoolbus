import {NextPage} from "next";
import { signIn } from "next-auth/react"
import { FormEventHandler, useState } from "react";

interface pops{}



const SignIn: NextPage = (pops): JSX. Element => {
  const [userInfo, setUserInfo] = useState({email:'' ,password:''})

const handelSubmit: FormEventHandler<HTMLFormElement> = async(e) =>{
  e.preventDefault()

    const res = await signIn('credentials',{
    email:userInfo.email,
    password:userInfo.password,
    redirect:false
    
  }); 
   

}

    return (
      <div>
        <form onSubmit={handelSubmit}>
          <h1>Login form</h1>
          <input className="" value={userInfo.email} onChange={({target}) =>{
            setUserInfo({...userInfo,email:target.value})
          }} type="email" placeholder="email" />
          <input className=""  value={ userInfo.password} onChange={({target})=>{
            setUserInfo({...userInfo,password:target.value})
          }} type="password" placeholder="*******" />
          <input type='submit' value="login"/>
        </form>
      </div>
    );

}
export default SignIn;