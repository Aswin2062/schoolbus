import React from 'react'
import Image from 'next/image'

function homePage() {
  return (
    <div>
      <div className="flex ">
        <div className="pt-[13%] pl-[10%]">
          <h1 className="text-[40px] font-black	 ">Highly Skilled Teachers</h1>
          <p className="text-[18px] mt-[20px]">
            Connect with world wide teachers who are subject matter experts and
            <br />
            approved by SkoolBus
          </p>
          <div className="flex  justify-center  mt-[40px] bg-[#FF4A6C] text-white w-[45%] Poppins font-light rounded-3xl pr-[15px] pl-[20px] pt-[10px] pb-[10px]">
            <button type="submit">Know More</button>
          </div>
          <div className="flex flex-row gap-[10px] 	pl-[10px]">
            {["point", "point", "point", "point"].map((dot, e) => {
              return (
                <div className="pt-[10%]" key={e}>
                  <Image
                    src={`/${dot}.svg`}
                    alt="point"
                    width="15"
                    height="15"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Image
            src="/homeComponent.svg"
            alt="homeComponent "
            width="700"
            height="500"
          />
        </div>
      </div>
      <div>
        <div className="pl-[10%] bg-[#F8F7ED] h-[700px]">
          <h1 className="pt-[20px]">Featured Contents</h1>
          <div className="flex flex-row gap-[90px] pt-[30px]">
            <div className="flex items-center gap-[10px]">
              <Image
                src="/All-icon.svg"
                alt="homeComponent "
                width="20"
                height="20"
              />
              <h2>All</h2>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image
                src="/audio-icon.svg"
                alt="homeComponent "
                width="20"
                height="20"
              />
              <h2>Audio</h2>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image
                src="/video-icon.svg"
                alt="homeComponent "
                width="20"
                height="20"
              />
              <h2>Video</h2>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image
                src="/writing-icon.svg"
                alt="homeComponent "
                width="20"
                height="20"
              />
              <h2>Writing</h2>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image
                src="/doc-icon.svg"
                alt="homeComponent "
                width="20"
                height="20"
              />
              <h2>Documents</h2>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image
                src="/quiz-icon.svg"
                alt="homeComponent "
                width="20"
                height="20"
              />
              <h2>Quiz</h2>
            </div>
          </div>
          <div className="bg-[black] w-[65px] h-[1px] mt-[10px]"></div>
          <div className="flex gap-[20px] pt-[20px]">
            <div className="w-[25%] bg-[white] rounded-[10px] pt-[20px]">
              <Image
                className="m-[7%]"
                src="/img1.svg"
                alt="img1"
                width="280"
                height="150"
              />
              <h1 className="m-[7%]">Surfing in Maldives</h1>
              <div className="flex flex-row gap-[20px] m-[7%]">
                <Image src="/star.svg" alt="img1" width="20" height="20" />
                <p>4.7</p>
                <Image src="/message.svg" alt="img1" width="20" height="20" />
                <p>31</p>
              </div>
              <div className="flex flex-row gap-[20px] m-[7%]">
                <Image src="/eve-pic-1.svg" alt="img1" width="30" height="30" />
                <p>Nicolas Appert</p>
              </div>

              <p className="w-[20vh] m-[7%]">
                Agency provides a full service range including technical skills,
                design...
              </p>
              <div className="flex flex-row gap-[20px] m-[7%] ">
                <Image src="/watch.svg" alt="img1" width="30" height="30" />
                <p>Watch Now</p>
              </div>
            </div>
            <div className="w-[25%] bg-[white] rounded-[10px] pt-[20px]">
              <Image
                className="m-[7%]"
                src="/img1.svg"
                alt="img1"
                width="280"
                height="150"
              />
              <h1 className="m-[7%]">Surfing in Maldives</h1>
              <div className="flex flex-row gap-[20px] m-[7%]">
                <Image src="/star.svg" alt="img1" width="20" height="20" />
                <p>4.7</p>
                <Image src="/message.svg" alt="img1" width="20" height="20" />
                <p>31</p>
              </div>
              <div className="flex flex-row gap-[20px] m-[7%]">
                <Image src="/eve-pic-1.svg" alt="img1" width="30" height="30" />
                <p>Nicolas Appert</p>
              </div>

              <p className="w-[20vh] m-[7%]">
                Agency provides a full service range including technical skills,
                design...
              </p>
              <div className="flex flex-row gap-[20px] m-[7%] ">
                <Image src="/watch.svg" alt="img1" width="30" height="30" />
                <p>Watch Now</p>
              </div>
            </div>{" "}
            <div className="w-[25%] bg-[white] rounded-[10px] pt-[20px]">
              <Image
                className="m-[7%]"
                src="/img1.svg"
                alt="img1"
                width="280"
                height="150"
              />
              <h1 className="m-[7%]">Surfing in Maldives</h1>
              <div className="flex flex-row gap-[20px] m-[7%]">
                <Image src="/star.svg" alt="img1" width="20" height="20" />
                <p>4.7</p>
                <Image src="/message.svg" alt="img1" width="20" height="20" />
                <p>31</p>
              </div>
              <div className="flex flex-row gap-[20px] m-[7%]">
                <Image src="/eve-pic-1.svg" alt="img1" width="30" height="30" />
                <p>Nicolas Appert</p>
              </div>

              <p className="w-[20vh] m-[7%]">
                Agency provides a full service range including technical skills,
                design...
              </p>
              <div className="flex flex-row gap-[20px] m-[7%] ">
                <Image src="/watch.svg" alt="img1" width="30" height="30" />
                <p>Watch Now</p>
              </div>
            </div>{" "}
            <div className="w-[25%] bg-[white] rounded-[10px] pt-[20px]">
              <Image
                className="m-[7%]"
                src="/img1.svg"
                alt="img1"
                width="280"
                height="150"
              />
              <h1 className="m-[7%]">Surfing in Maldives</h1>
              <div className="flex flex-row gap-[20px] m-[7%]">
                <Image src="/star.svg" alt="img1" width="20" height="20" />
                <p>4.7</p>
                <Image src="/message.svg" alt="img1" width="20" height="20" />
                <p>31</p>
              </div>
              <div className="flex flex-row gap-[20px] m-[7%]">
                <Image src="/eve-pic-1.svg" alt="img1" width="30" height="30" />
                <p>Nicolas Appert</p>
              </div>

              <p className="w-[20vh] m-[7%]">
                Agency provides a full service range including technical skills,
                design...
              </p>
              <div className="flex flex-row gap-[20px] m-[7%] ">
                <Image src="/watch.svg" alt="img1" width="30" height="30" />
                <p>Watch Now</p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
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
      <div>
        <div className="flex flex-row bg-[#FDF6F2]">
          <h1>Classes</h1>
          <Image src="/prev-icon.svg" alt="next-icon" width="50" height="50" />
          <Image src="/next-icon.svg" alt="next-icon" width="50" height="50" />
        </div>
      </div>
    </div>
  );
}

export default homePage

