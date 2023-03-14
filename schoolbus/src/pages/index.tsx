import Head from "next/head";
import Image from "next/image";
import mypic from "../Images/Traced.png";
import wave from "../Images/Wave.svg";
import Footer from "./footer";

import divImg from "../Images/Divider.svg";

import google from "../Images/google.svg";
import facebook from "../Images/facebook.svg";
import Login from "./Login";
import Header from "./header";

import mainImg1 from "../Images/MainImg-1.png";

import { Inter } from "next/font/google";
import Link from "next/link";
// import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SkoolBus</title>
      </Head>
      <main>
        <div className="main">
          <div>
              <Header/>
          </div>
         
          <div className="relative pt-[10px]">
            <Image
              src={mainImg1}
              alt="Picture of the author"
              // width="350"
              // height="300"
            />
            <div className="flex bottom-[42%] left-[4%]  absolute">
              <div>
                <div className="pl-[100px] pr-[50%]  ">
                  <h6 className="text-white text-[60px]">Changing learning</h6>
                  <h3 className="text-white text-[60px]">for the better</h3>
                </div>
                <div className="pl-[100px] pr-[53%]">
                  <h2 className="text-white text-[20px]">
                    Whether you want to learn or to share what you know, you’ve
                    come to the right place. As a global destination for online
                    learning, we connect people through knowledge.
                  </h2>
                </div>
              </div>
            </div>
            <Login/>
           
          </div>
          <div>
            <div>
              <div className="flex justify-center text-[50px] pt-[8%] ">
                <h1>Trusted by over 500 great businesses</h1>
              </div>
              <div className="flex justify-center pt-[20px]">
                <p className="w-[50%] text-[grey] font-semibold  Inter font-extralight  pt-[10px]">
                  Startup Framework includes great form options for your startup
                  projects. Each component is coded for web which makes creating
                  a website quick and easy.
                </p>
              </div>
              <div>
                <div className="flex justify-between w-[90%] pl-[100px] pt-[70px]	">
                  {["AMD", "Facebook-2", "ATT", "Forbes"].map((pic, a) => {
                    return (
                      <div key={a}>
                        <img src={`/${pic}.svg`} width="200" />
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-evenly  w-[80%] pl-[100px]	 pt-[30px]">
                  {["Attlasian", "Disney", "Ebay"].map((pic2, b) => {
                    return (
                      <div key={b}>
                        <img src={`/${pic2}.svg`} width="200" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div>
         
            <Footer/>
            
          </div>
        </div>
      </main>
    </>
  );
}
