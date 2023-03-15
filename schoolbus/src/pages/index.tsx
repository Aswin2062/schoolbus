import Head from "next/head";
import Image from "next/image";
import mypic from "../Images/Traced.png";
import wave from "../Images/Wave.svg";
import Footer from "./footer";
import HomePage from "./home";
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
            <Header />
          </div>
          <div>
            <HomePage />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
