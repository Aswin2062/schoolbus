import React from 'react'
import Image from 'next/image'
import HomeFirst from "./homeFirst";
import HomeSecond from './homeSecond';
import HomeThird from './homeThird';
import HomeFourth from './homeFourth';

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
      {/* <HomeFirst/>
      <HomeSecond/>
      <HomeThird/> */}
      <HomeFourth/>
      
      <div>
        
      </div>
    </div>
  );
}

export default homePage

