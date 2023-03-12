import React from 'react'
import MobileLogo from "../../../Images/MobileLogo.svg"
import WWWLogo from "../../../Images/wwwLogo.svg";
import Map from "../../../Images/Map.svg";
import Line from "../../../Images/Line.svg"

import Image from "next/image";



function ContactUsPage() {
  return (
    <div>
      <div className="flex absolute pl-[10%]">
        <div>
          <h1 className="text-[40px] pl-[20%]">Get in Touch</h1>
          <p className="text-[15px] pl-[20%] w-[70%] pt-[30px] font-extralight	 text-[#151439]  ">
            We appreciate each customer and we are proud that 60% of clients
            come back to work with us again.
          </p>

          <h1 className="flex ml-[23%] mt-[40px] absolute">+1 555 505 5050</h1>

          <Image
            className="flex ml-[17%] mt-[40px] absolute"
            src={MobileLogo}
            alt="Picture of the author"
          />
          <p className="flex ml-[23%]  mt-[100px] absolute">
            info@designmodo.com
          </p>

          <Image
            className="flex ml-[20%] mt-[100px]   "
            src={WWWLogo}
            alt="Picture of the author"
          />
          <Image
            className="flex ml-[20%] mt-[40px] "
            src={Line}
            alt="Picture of the author"
          />

          <div>
            <h1 className="flex ml-[20%] text-[40px]">Find Us on Map</h1>
            <p className="flex ml-[20%] text-[15px] mt-[10px]">
              Via Salaria, 243, 00199 Rome
            </p>
            <Image
              className=" flex ml-[20%] mt-[40px]"
              src={Map}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="  pl-[55%] ">
          <h1 className="text-[40px] pt-[10px] ">You Can Mail Us</h1>
          <p className="text-[15px] font-extralight	pt-[10px]">
            We are always looking for a next great project.
          </p>
          <div className='pt-[10px]'>
            <form className=" pt-[10%] h-[575px] w-[70%] bg-[#EBEAED] rounded-2xl flex flex-col	">
              <h1 className="pl-[20px] text-[25px]">E-Mail</h1>
              <input
                className=" gap-0.5 bg-[#ffffff] mt-[40px] ml-[30px] text-white absolute  Poppins font-light rounded-3xl pr-[75px] pl-[50px] pt-[10px] pb-[10px]"
                type="text"
                placeholder="E-mail"
              ></input>
              <h1 className="text-[25px] mt-[60px] pl-[20px]">Message</h1>
              <input
                className=" gap-0.5 bg-[#ffffff]  h-[30%] mt-[150px] ml-[30px] text-white absolute  mt-[30px] Poppins font-light rounded-3xl pr-[75px] pl-[55px] pb-[10px]"
                type="text"
                placeholder="Drop us a line"
              ></input>
              <h1 className="text-[25px] mt-[250px] pl-[20px]">Name</h1>
              <input
                className="gap-0.5 bg-[#ffffff]  mt-[430px]  h-[50px] w-[150px] ml-[30px] text-white absolute  Poppins font-light rounded-3xl pr-[15px] pl-[25px] pb-[10px] pt-[10px]"
                type="text"
                placeholder="Your name"
              ></input>
              <div>
                <div className="flex  gap-0.5 bg-[#fe4a6c] text-white mt-[3px] ml-[200px] absolute  Poppins font-light rounded-3xl pr-[35px] pl-[35px] pt-[18px] pb-[18px]">
                  <a href="#">SEND</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
