import React from 'react'
import Image from "next/image";
import mypic from "../../../Images/Traced.png";
import Link from "next/link";
import Login from '@/pages/Login';

function HeaderPage() {
  return (
    <div>
      <div className="flex justify-evenly pt-[10px] ">
        <div className="flex justify-evenly gap-x-12 pt-[4px] ">
          <Image
            src={mypic}
            alt="Picture of the author"
            // width="350"
            // height="300"
          />
          <h1 className="Poppins font-[300] ">SkoolBus</h1>
        </div>
        <div className="flex gap-16 pt-[4px] ">
          <a href="#">About</a>
          <a href="#">Class</a>
          <a href="#">Libary</a>
          <a href="#">Courses</a>
          <a href="#">Teachers</a>
          <div className="flex gap-0.5 bg-[#fe4a6c] text-white  Poppins font-light rounded-3xl pr-[15px] pl-[15px] pt-[4px] pb-[4px]">
            <Link href={"/Login"}>
              <button
                onClick={() => {
                  Login();
                }}
              >
                Login/Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage
