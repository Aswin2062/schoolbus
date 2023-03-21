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
        <div className="pl-[10%] bg-[#F8F7ED] h-[50vh]">
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
          <div className="bg-[black] w-[65vh] h-[1px] mt-[10px]"></div>
          <div className="flex gap-[20px]">
            <div className="w-[23vh] bg-[red] rounded-[10px] pt-[20px]">
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
              <div className='flex flex-row gap-[20px] m-[7%] '>
                <Image src="/watch.svg" alt="img1" width="30" height="30" />
                <p>Watch Now</p>
              </div>
           
            </div>
            <div>
              <Image src="/img1.svg" alt="img1" width="250" height="150" />
            </div>
            <div>
              <Image src="/img1.svg" alt="img1" width="250" height="150" />
            </div>
            <div>
              <Image src="/img1.svg" alt="img1" width="250" height="150" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homePage

