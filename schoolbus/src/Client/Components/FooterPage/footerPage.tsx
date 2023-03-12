import Head from "next/head";
import Image from "next/image";
import mypic from "../Images/Traced.png";
import wave from "../../../Images/Wave.svg";

import divImg from "../Images/Divider.svg";

import google from "../Images/google.svg";
import facebook from "../Images/facebook.svg";


import mainImg1 from "../Images/MainImg-1.png";

import { Inter } from "next/font/google";
import Link from "next/link";







export default function FooterPage(){
    return (
      <>
        <div>
          <Image
            className="flex absolute pt-[10%]"
            src={wave}
            alt="Picture of the author"
            // width="350"
            // height="300"
          />
        </div>
        <div>
          <div className="pt-[5%]">
            <div className="flex absolute pt-[10%] pl-[10%] ">
              <h1 className="text-[grey] font-[unset]">FOLLOW US</h1>
            </div>
            <div className="pt-[12%]">
              <div className=" flex absolute gap-[40px] pt-[10px] pl-[9%]">
                {[
                  "icon-facebook",
                  "icon-linkedin",
                  "icon-slack",
                  "icon-twitter",
                ].map((icon, c) => {
                  return (
                    <div key={c}>
                      <img src={`/${icon}.svg`} width="60" />
                    </div>
                  );
                })}
              </div>
              <div className="flex absolute pt-[90px] pl-[10%] ">
                <h1 className="text-[grey] font-[unset]"> Menu</h1>
              </div>
              <div>
                <div className="flex-wrap	">
                  <div className=" flex flex-col absolute pl-[10%] pt-[10%]  ">
                    <a className="text-[#2D3436]" href="#">
                      About SkoolBus
                    </a>
                    <br></br>
                    <a className="text-[#2D3436]" href="#">
                      {" "}
                      Classes
                    </a>
                    <br></br>
                    <a className="text-[#2D3436]" href="#">
                      {" "}
                      Library
                    </a>
                    <br></br>
                    <a className="text-[#2D3436]" href="#">
                      {" "}
                      Courses
                    </a>
                    <br></br>
                    <a className="text-[#2D3436]" href="#">
                      {" "}
                      Teachers
                    </a>
                    <br></br>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-[10%] pl-[25%] absolute ">
                <a className="text-[#2D3436]" href="#">
                  {" "}
                  Privacy Policy
                </a>
                <br></br>
                <a className="text-[#2D3436]" href="#">
                  {" "}
                  Terms of Service
                </a>
                <br></br>
                <a className="text-[#2D3436]" href="#">
                  {" "}
                  Contact
                </a>
                <br></br>
                <a className="text-[#2D3436]" href="#">
                  {" "}
                  FAQs
                </a>
                <br></br>
              </div>
            </div>
          </div>
        </div>

        <div className="flex absolute pl-[60%] text-[grey] font-[unset] ">
          <h1>Email us</h1>
        </div>
        <div>
          <span className="text-[#FF4A6C] flex absolute pl-[60%] pt-[40px] text-[40px] font-bold		">
            info@skoolbus.com
          </span>
        </div>
        <div>
          <h1 className="flex absolute pl-[60%] pt-[130px] text-[grey] font-[unset]">
            keep in touch
          </h1>
        </div>
        <div className="flex pl-[60%] pt-[13%] w-[10%]">
          <input
            className="flex justify-center  absolute   bg-[#FFFFFF] pr-[15px] pl-[15px] pt-[10px] pb-[10px]  rounded-[10px]  border-solid "
            type="text"
            placeholder="Your name"
            name="uname"
          ></input>
        </div>
        <div className="flex pl-[75%]  w-[10%]">
          <input
            className="flex justify-center  absolute   bg-[#FFFFFF] pr-[15px] pl-[25px] pt-[10px] pb-[10px]  rounded-[10px]  border-solid "
            type="text"
            placeholder="email"
            name="uname"
          ></input>
        </div>
        <div className="flex pl-[60%] pt-[70px]  ">
          <input
            className="flex justify-center  absolute  w-[20%] h-[60px] bg-[#FFFFFF] pr-[15px] pl-[25px] pt-[10px] pb-[10px]  rounded-[10px]  border-solid "
            type="text"
            placeholder="Leave your message"
            name="uname"
          ></input>
        </div>
        <div className="pl-[82%]">
          <div className="flex gap-0.5 bg-[#fe4a6c] text-white absolute  Poppins font-light rounded-3xl pr-[35px] pl-[35px] pt-[18px] pb-[18px]">
            <a href="#">SEND</a>
          </div>
        </div>
      </>
    );
}