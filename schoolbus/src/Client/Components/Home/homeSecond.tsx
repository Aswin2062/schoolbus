import React from 'react'
import Image from 'next/image';

function HomeSecond() {
  return (
    <div>
      <div className="bg-[#F5FCFF] h-[800px] ">
        <div>
          <h1 className="text-[30px] pl-[10%]  pt-[10px] pb-[10px]">Courses</h1>
        </div>
        <div className="flex flex-row gap-[8%] pl-[10%]">
          <div className="flex flex-row ">
            <div className=" bg-[white] rounded-[10px] pt-[15px] shadow-gray-300		">
              <div className="flex flex-row pl-[20px] gap-[10px]">
                <Image
                  className=""
                  src="/cam-icon.svg"
                  alt="img1"
                  width="40"
                  height="30"
                />
                <h1 className=" text-[30px] font-medium		">Photography</h1>
              </div>
              <div className="bg-[black] w-[100%] h-[1px] mt-[10px]"></div>
              <div className="bg-gradient-to-b from-[#ECF7F3] to-[#ffffff] ">
                <p className=" pl-[30px]  pt-[20px] text-[18px] font-bold	">
                  A Complete Guide to <br></br>Photography
                </p>
                <div className="flex flex-row gap-[20px] m-[7%]">
                  <Image src="/star.svg" alt="img1" width="20" height="20" />
                  <p className="text-[#464646A3]">4.7</p>
                  <Image src="/message.svg" alt="img1" width="20" height="20" />
                  <p className="text-[#464646A3]">31</p>
                </div>
                <div className="flex flex-row gap-[20px] m-[7%]">
                  <Image
                    src="/eve-pic-1.svg"
                    alt="img1"
                    width="30"
                    height="30"
                  />
                  <p className="text-[#464646A3]">Nicolas Appert</p>
                </div>
              </div>
              <div>
                <div className="bg-[black] w-[100%] h-[1px] mt-[10px]"></div>
                <div className="flex pt-[10px] pl-[30px] flex-row gap-[50%]">
                  <h1 className="text-[#464646A3]">Lesson 1</h1>
                  <h2 className="text-[#464646A3]">5.30</h2>
                </div>
                <p className="pl-[30px] text-[#464646A3] pt-[5px]">
                  Shooting Portraits with a <br></br>Wide vs. Telephoto Lens
                </p>
              </div>
              <div>
                <div className="bg-[black] w-[100%] h-[1px] mt-[10px]"></div>
                <div className="flex pt-[10px] pl-[30px] flex-row gap-[50%]">
                  <h1 className="text-[#464646A3]">Lesson 2</h1>
                  <h2 className="text-[#464646A3]">7.30</h2>
                </div>
                <p className="pl-[30px] pt-[5px] text-[#464646A3]">
                  Shooting Portraits with a <br></br>Wide vs. Telephoto Lens
                </p>
              </div>
              <div>
                <div className="bg-[black] w-[100%] h-[1px] mt-[10px]"></div>
                <div className="flex pt-[10px] pl-[30px] flex-row gap-[50%]">
                  <h1 className="text-[#464646A3]">Lesson 3</h1>
                  <h2 className="text-[#464646A3]">10.30</h2>
                </div>
                <p className="pl-[30px] pt-[5px] text-[#464646A3] ">
                  Shooting Portraits with a <br></br>Wide vs. Telephoto Lens
                </p>
              </div>
              <div>
                <div className="bg-[black] w-[100%] h-[1px] mt-[10px]"></div>
                <div className="flex flex-row gap-[20px] m-[7%] ">
                  <Image
                    src="/rupee-icon.svg"
                    alt="img1"
                    width="30"
                    height="30"
                  />
                  <p className="text-[40px]">345</p>
                  <div className="flex  justify-center h-[50px] w-[200px] mt-[18px]  bg-[#12A35C] text-white  Poppins font-light rounded-3xl pr-[15px] pl-[20px] pt-[5px] pb-[5px]">
                    <button type="submit">Buy Now </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-[50px] pt-[30px]">
              <div className="bg-[#ffffff] pt-[20px]  ">
                <Image
                  className="ml-[20px]"
                  src="/a-icon.svg"
                  alt="img1"
                  width="30"
                  height="30"
                />
                <h1 className="ml-[20px] font-medium	 text-[20px] pt-[20px]">
                  Tamil
                </h1>
                <p className="pl-[20px]  text-[#464646A3] pr-[20px]  pt-[10px]">
                  Agency provides a full <br></br>service range including
                  <br></br> technical skills, design.
                </p>
                <Image
                  className="ml-[20px] pb-[20px] pt-[20px]"
                  src="/next-arrow-icon.svg"
                  alt="img1"
                  width="30"
                  height="30"
                />
              </div>
              <div className="bg-[#ffffff] pt-[20px]  ">
                <Image
                  className="ml-[20px]"
                  src="/san-icon.svg"
                  alt="img1"
                  width="30"
                  height="30"
                />
                <h1 className="ml-[20px]  font-medium	text-[20px] pt-[20px]">
                  Sanskrit
                </h1>
                <p className="pl-[20px]  text-[#464646A3] pr-[20px] pt-[10px]">
                  Agency provides a full <br></br>service range including
                  <br></br> technical skills, design.
                </p>
                <Image
                  className="ml-[20px] pb-[20px] pt-[20px]"
                  src="/next-arrow-icon.svg"
                  alt="img1"
                  width="30"
                  height="30"
                />
              </div>
              <div className="bg-[#ffffff] pt-[20px]  ">
                <Image
                  className="ml-[20px]"
                  src="/cam-icon.svg"
                  alt="img1"
                  width="30"
                  height="30"
                />
                <h1 className="ml-[20px] font-medium	 text-[20px] pt-[10px]">
                  Photography
                </h1>
                <p className="pl-[20px] text-[#464646A3] pr-[20px] pt-[10px]">
                  Agency provides a full <br></br>service range including
                  <br></br> technical skills, design.
                </p>
                <Image
                  className="ml-[20px] pb-[20px] pt-[20px]"
                  src="/next-arrow-icon.svg"
                  alt="img1"
                  width="30"
                  height="30"
                />
              </div>
            </div>
            <div className="flex flex-row pt-[17%] gap-[50px]">
              <div className="bg-[#ffffff] pt-[20px]  ">
                <Image
                  className="ml-[20px]"
                  src="/art-icon.svg"
                  alt="img1"
                  width="30"
                  height="30"
                />
                <h1 className="ml-[20px] text-[20px] font-medium	 pt-[20px]">
                  Art
                </h1>
                <p className="pl-[20px]  text-[#464646A3] pr-[20px] pt-[10px]">
                  Agency provides a full <br></br>service range including
                  <br></br> technical skills, design.
                </p>
                <Image
                  className="ml-[20px] pb-[20px] pt-[20px]"
                  src="/next-arrow-icon.svg"
                  alt="img1"
                  width="30"
                  height="30"
                />
              </div>

              <div className="bg-[#ffffff] pt-[20px]  ">
                <Image
                  className="ml-[20px]"
                  src="/chef-icon.svg"
                  alt="img1"
                  width="30"
                  height="30"
                />
                <h1 className="ml-[20px] text-[20px] font-medium	 pt-[20px]">
                  Culinary
                </h1>
                <p className="pl-[20px] text-[#464646A3] pr-[20px] pt-[10px]">
                  Agency provides a full <br></br>service range including
                  <br></br> technical skills, design.
                </p>
                <Image
                  className="ml-[20px] pb-[20px] pt-[20px]"
                  src="/next-arrow-icon.svg"
                  alt="img1"
                  width="30"
                  height="30"
                />
              </div>
              <div className="bg-[#C05698] pt-[20px] rounded-[30px] w-[28%] ">
                <Image
                  className="ml-[80px] mt-[30px]"
                  src="/All-icon.svg"
                  alt="img1"
                  width="30"
                  height="30"
                />

                <p className="pl-[40px] text-[#ffffff] font-bold	 text-[20px] pr-[20px] pt-[10px]">
                  987 Courses & <br></br> 89 Subjects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSecond
