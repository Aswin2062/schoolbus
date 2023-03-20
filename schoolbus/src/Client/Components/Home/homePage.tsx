import React from 'react'
import Image from 'next/image'

function homePage() {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-[40px] font-medium">Highly Skilled Teachers</h1>
          <p className="text-[15px]">
            Connect with world wide teachers who are subject matter experts and
            approved by SkoolBus
          </p>
          <div className="flex  justify-center   bg-[#FF4A6C] text-white w-[85%] Poppins font-light rounded-3xl pr-[15px] pl-[20px] pt-[10px] pb-[10px]">
            <button type="submit">Know More</button>
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
    </div>
  );
}

export default homePage

