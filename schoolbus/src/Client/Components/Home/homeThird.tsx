import React from 'react'
import Image from 'next/image';




// const now = new Date();  
// console.log(now); 
// let today = new Date().toISOString().slice(0, 10);


function HomeThird() {
  return (
    <div>
      <div className="bg-[#FDF6F2]">
        <div className="flex flex-row bg-[#FDF6F2]">
          <h1 className="text-[30px] font-semibold pl-[10%] pt-[40px]">
            Classes
          </h1>
          <div className="flex pl-[70%] gap-[20px] pt-[40px]">
            <Image
              src="/prev-icon.svg"
              alt="next-icon"
              width="50"
              height="50"
            />
            <Image
              src="/next-icon.svg"
              alt="next-icon"
              width="50"
              height="50"
            />
          </div>
        </div>
        <div className="flex flex-row gap-[20px] pl-[10%]">
          <div className="w-[23%] bg-[white] rounded-[10px] pt-[20px]">
            <div className="flex flex-row pl-[10px] gap-[40px]">
              <Image
                className=""
                src="/cam-icon.svg"
                alt="cam-icon"
                width="40"
                height="30"
              />
              <h1 className=" text-[30px] font-medium">Photography</h1>
            </div>
            <div className="flex">
              <Image
                className="  absolute ml-[16%] mt-[2%]  z-10"
                src="/play-video-icon.svg"
                alt="img1"
                width="25"
                height="15"
              />
              <Image
                className="m-[7%] relative "
                src="/video-img-1.svg"
                alt="img1"
                width="250"
                height="150"
              />
            </div>

            <div className="flex flex-row ">
              <h1 className="m-[7%]">Available Seats</h1>
              <p className="text-[14px] pt-[23px] text-[#333333] ">
                (3 out of 6)
              </p>
            </div>

            <div className="flex flex-row gap-[10px] ml-[7%]">
              {["avatar-green", "avatar-green", "avatar-green"].map(
                (avatar, w) => {
                  return (
                    <Image
                      key={w}
                      src={`/${avatar}.svg`}
                      alt="img1"
                      width="20"
                      height="20"
                    />
                  );
                }
              )}
              {["avatar-white", "avatar-white", "avatar-white"].map(
                (avatar1, t) => {
                  return (
                    <Image
                      key={t}
                      src={`/${avatar1}.svg`}
                      alt="img1"
                      width="20"
                      height="20"
                    />
                  );
                }
              )}
            </div>
            <p className="w-[20vh] m-[7%] text-[20px] font-semibold">
              A Complete Guide to Photography
            </p>
            <div className="flex flex-row gap-[20px] m-[7%]">
              <Image src="/eve-pic-1.svg" alt="img1" width="30" height="30" />
              <p>Nicolas Appert</p>
            </div>

            <div className="flex flex-row pl-[23px] gap-[20px]">
              <Image src="/cal-icon.svg" alt="img1" width="25" height="25" />
              <p>Date: 11st June 2022</p>
            </div>
            <div className="flex flex-row pl-[23px] gap-[20px] pt-[15px]">
              <Image src="/time-icon.svg" alt="img1" width="25" height="25" />
              <p>1st Oct 2022</p>
            </div>
            <div className="bg-[black] w-[100%] h-[1px] mt-[10px]"></div>

            <div className="flex flex-row gap-[20px] m-[7%] ">
              <Image src="/rupee-icon.svg" alt="img1" width="30" height="30" />
              <p className="text-[40px]">345</p>
              <div className="flex  justify-center h-[50px] w-[200px] mt-[18px]  bg-[#12A35C] text-white  Poppins font-light rounded-3xl pr-[15px] pl-[20px] pt-[5px] pb-[5px]">
                <button type="submit">Buy Now </button>
              </div>
            </div>
          </div>
          <div className="w-[23%] bg-[white] rounded-[10px] pt-[20px]">
            <div className="flex flex-row gap-[30px]">
              <Image
                className="ml-[20px]"
                src="/san-icon.svg"
                alt="img1"
                width="40"
                height="30"
              />
              <h1 className=" text-[30px] font-medium">Sanskrit</h1>
            </div>
            <div className="flex">
              <Image
                className="  absolute ml-[16%] mt-[2%]  z-10"
                src="/play-video-icon.svg"
                alt="img1"
                width="25"
                height="15"
              />
              <Image
                className="m-[7%] relative "
                src="/video-img-2.svg"
                alt="img1"
                width="250"
                height="150"
              />
            </div>
            <div className="flex flex-row ">
              <h1 className="m-[7%]">Available Seats</h1>
              <p className="text-[14px] pt-[23px] text-[#333333] ">
                (3 out of 6)
              </p>
            </div>

            <div className="flex flex-row gap-[10px] ml-[7%]">
              {["avatar-green", "avatar-green", "avatar-green"].map(
                (avatar, w) => {
                  return (
                    <Image
                      key={w}
                      src={`/${avatar}.svg`}
                      alt="img1"
                      width="20"
                      height="20"
                    />
                  );
                }
              )}
              {["avatar-white", "avatar-white", "avatar-white"].map(
                (avatar1, t) => {
                  return (
                    <Image
                      key={t}
                      src={`/${avatar1}.svg`}
                      alt="img1"
                      width="20"
                      height="20"
                    />
                  );
                }
              )}
            </div>
            <p className="w-[20vh] m-[7%] text-[20px] font-semibold">
              Master mind in Sanskrit Slokhas{" "}
            </p>
            <div className="flex flex-row gap-[20px] m-[7%]">
              <Image src="/eve-pic-1.svg" alt="img1" width="30" height="30" />
              <p>Nicolas Appert</p>
            </div>

            <div className="flex flex-row pl-[23px] gap-[20px]">
              <Image src="/cal-icon.svg" alt="img1" width="25" height="25" />
              <p>Date: 11st June 2022</p>
            </div>
            <div className="flex flex-row pl-[23px] gap-[20px] pt-[15px]">
              <Image src="/time-icon.svg" alt="img1" width="25" height="25" />
              <p>1st Oct 2022</p>
            </div>
            <div className="bg-[black] w-[100%] h-[1px] mt-[10px]"></div>

            <div className="flex flex-row gap-[20px] m-[7%] ">
              <Image src="/rupee-icon.svg" alt="img1" width="30" height="30" />
              <p className="text-[40px]">345</p>
              <div className="flex  justify-center h-[50px] w-[200px] mt-[18px]  bg-[#12A35C] text-white  Poppins font-light rounded-3xl pr-[15px] pl-[20px] pt-[5px] pb-[5px]">
                <button type="submit">Buy Now </button>
              </div>
            </div>
          </div>
          <div className="w-[23%] bg-[white] rounded-[10px] pt-[20px]">
            <div className="flex flex-row gap-[30px]">
              <Image
                className="ml-[20px]"
                src="/maths-icon.svg"
                alt="img1"
                width="40"
                height="30"
              />
              <h1 className=" text-[30px] font-medium">Vedic Maths</h1>
            </div>
            <div className="flex">
              <Image
                className="  absolute ml-[16%] mt-[2%]  z-10"
                src="/play-video-icon.svg"
                alt="img1"
                width="25"
                height="15"
              />
              <Image
                className="m-[7%] relative "
                src="/video-img-3.svg"
                alt="img1"
                width="250"
                height="150"
              />
            </div>
            <div className="flex flex-row ">
              <h1 className="m-[7%]">Available Seats</h1>
              <p className="text-[14px] pt-[23px] text-[#333333] ">
                (3 out of 6)
              </p>
            </div>

            <div className="flex flex-row gap-[10px] ml-[7%]">
              {["avatar-green", "avatar-green", "avatar-green"].map(
                (avatar, w) => {
                  return (
                    <Image
                      key={w}
                      src={`/${avatar}.svg`}
                      alt="img1"
                      width="20"
                      height="20"
                    />
                  );
                }
              )}
              {["avatar-white", "avatar-white", "avatar-white"].map(
                (avatar1, t) => {
                  return (
                    <Image
                      key={t}
                      src={`/${avatar1}.svg`}
                      alt="img1"
                      width="20"
                      height="20"
                    />
                  );
                }
              )}
            </div>
            <p className="w-[20vh] m-[7%] text-[20px] font-semibold">
              Learn Maths Scratch to Advanced{" "}
            </p>
            <div className="flex flex-row gap-[20px] m-[7%]">
              <Image src="/eve-pic-1.svg" alt="img1" width="30" height="30" />
              <p>Nicolas Appert</p>
            </div>

            <div className="flex flex-row pl-[23px] gap-[20px]">
              <Image src="/cal-icon.svg" alt="img1" width="25" height="25" />
              <p>Date: 11st June 2022</p>
            </div>
            <div className="flex flex-row pl-[23px] gap-[20px] pt-[15px]">
              <Image src="/time-icon.svg" alt="img1" width="25" height="25" />
              <p>1st Oct 2022</p>
            </div>
            <div className="bg-[black] w-[100%] h-[1px] mt-[10px]"></div>

            <div className="flex flex-row gap-[20px] m-[7%] ">
              <Image src="/rupee-icon.svg" alt="img1" width="30" height="30" />
              <p className="text-[40px]">345</p>
              <div className="flex  justify-center h-[50px] w-[200px] mt-[18px]  bg-[#12A35C] text-white  Poppins font-light rounded-3xl pr-[15px] pl-[20px] pt-[5px] pb-[5px]">
                <button type="submit">Buy Now </button>
              </div>
            </div>
          </div>
          <div className="w-[23%] bg-[white] rounded-[10px] pt-[20px]">
            <div className="flex flex-row gap-[30px]">
              <Image
                className="ml-[20px]"
                src="/a-icon.svg"
                alt="img1"
                width="40"
                height="30"
              />
              <h1 className=" text-[30px] font-medium">Tamil</h1>
            </div>
            <div className="flex">
              <Image
                className="  absolute ml-[16%] mt-[2%]  z-10"
                src="/play-video-icon.svg"
                alt="img1"
                width="25"
                height="15"
              />
              <Image
                className="m-[7%] relative "
                src="/video-img-4.svg"
                alt="img1"
                width="250"
                height="150"
              />
            </div>
            <div className="flex flex-row ">
              <h1 className="m-[7%]">Available Seats</h1>
              <p className="text-[14px] pt-[23px] text-[#333333] ">
                (3 out of 6)
              </p>
            </div>

            <div className="flex flex-row gap-[10px] ml-[7%]">
              {["avatar-green", "avatar-green", "avatar-green"].map(
                (avatar, w) => {
                  return (
                    <Image
                      key={w}
                      src={`/${avatar}.svg`}
                      alt="img1"
                      width="20"
                      height="20"
                    />
                  );
                }
              )}
              {["avatar-white", "avatar-white", "avatar-white"].map(
                (avatar1, t) => {
                  return (
                    <Image
                      key={t}
                      src={`/${avatar1}.svg`}
                      alt="img1"
                      width="20"
                      height="20"
                    />
                  );
                }
              )}
            </div>
            <p className="w-[20vh] m-[7%] text-[20px] font-semibold">
              Learn Tamil Through<br></br> English
            </p>
            <div className="flex flex-row gap-[20px] m-[7%]">
              <Image src="/eve-pic-1.svg" alt="img1" width="30" height="30" />
              <p>Nicolas Appert</p>
            </div>
            <div className="flex flex-row pl-[23px] gap-[20px]">
              <Image src="/cal-icon.svg" alt="img1" width="25" height="25" />
              <p>Date: 11st June 2022</p>
            </div>
            <div className="flex flex-row pl-[23px] gap-[20px] pt-[15px]">
              <Image src="/time-icon.svg" alt="img1" width="25" height="25" />
              <p>1st Oct 2022</p>
            </div>
            <div className="bg-[black] w-[100%] h-[1px] mt-[10px]"></div>

            <div className="flex flex-row gap-[20px] m-[7%] ">
              <Image src="/rupee-icon.svg" alt="img1" width="30" height="30" />
              <p className="text-[40px]">345</p>
              <div className="flex  justify-center h-[50px] w-[200px] mt-[18px]  bg-[#12A35C] text-white  Poppins font-light rounded-3xl pr-[15px] pl-[20px] pt-[5px] pb-[5px]">
                <button type="submit">Buy Now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeThird 
