import { NextPage } from "next";
import { useSession  } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";

const Protected:NextPage = (): JSX.Element =>{

    const {status , data }= useSession()
    useEffect(()=>{
        if(status === "unauthenticated")Router.replace("/auth/signin");

    },[status]);
    if(status === "authenticated")
    return (
    <div>
      this page is for spectial people{'\n'}
        {JSON.stringify(data.user, null ,2)}
       
    </div>
    )
    return (
        <div>loading </div>
    )
};
export default Protected;