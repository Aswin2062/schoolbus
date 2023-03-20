import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import divImg from "../../../Images/Divider.svg"
import google from "../../../Images/google.svg";
import facebook from "../../../Images/facebook.svg";


interface LoginProps {}

const loginPage: React.FC<LoginProps> = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === 'test@gmail.com' && password === 'test') {
      router.push("/contact");
      console.log(username);
      console.log(password);
      
      
    } else {
      alert('Incorrect username or password');
    }
  };


  return (
    <div>
      <div className=" pl-[20%]">
        <form
          onSubmit={handleSubmit}
          action="../../../pages/api/loginPages.ts"
          method="post"
        >
          <div className="bg-white absolute bottom-[15%] left-[58%] w-[35%] h-[70%] rounded-xl  ">
            <label className="flex justify-center font-[300] text-[50px] pt-[10%]">
              <b>Welcome back</b>
            </label>
            <br></br>
            <div className=" pl-[20%]">
              <input
                className="flex justify-center w-[75%]   pl-[10%]  bg-[#FFFFFF]   rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
                type="text"
                placeholder="Your email"
                name="uname"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              ></input>
              <br></br>
              <input
                className="flex justify-center w-[75%]   pl-[10%] bg-[#FFFFFF]  rounded-[10px]  border-solid  pr-[15px] pl-[15px] pt-[10px] pb-[10px]"
                type="password"
                placeholder="Your password"
                name="uname"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              ></input>
            </div>
            <div className="pl-[20%] pt-[6%]">
              <h1 className="text-[#00AFFF]">Forgot password?</h1>
            </div>
            <div className="pl-[15%] pt-[10%]">
              <div className="flex  justify-center   bg-[#12A35C] text-white w-[85%] Poppins font-light rounded-3xl pr-[15px] pl-[20px] pt-[10px] pb-[10px]">
                <button type="submit">login</button>
              </div>
            </div>
            <div className="flex justify-center pt-[10px]">
              <div className="flex pt-[5px] pr-[5px]">
                <Image src={divImg} alt="Picture of the author" />
              </div>
              <h2>or continue with</h2>
              <div className="flex pt-[5px] pl-[5px]">
                <Image src={divImg} alt="Picture of the author" />
              </div>
            </div>
            <div>
              <div className="flex pl-[40%] pt-[20px]">
                <Image src={google} alt="Picture of the author" />
              </div>
              <div className="flex pl-[53%] absolute bottom-[56px]">
                <Image src={facebook} alt="Picture of the author" />
              </div>
            </div>
            <div className="flex justify-center pt-[10px] ">
              <h1>New to Skoolbus? </h1>
              <span className="text-[#FF4A6C] pl-[10px]"> Sign Up</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  }

export default loginPage
