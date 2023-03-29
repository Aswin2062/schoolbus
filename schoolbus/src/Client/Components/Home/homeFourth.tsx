import React from 'react'
import Image from 'next/image';

function HomeFourth() {
  return (
    <div>
      <div className="flex flex-row">
        <h1 className="text-[30px] font-semibold pl-[10%] pt-[40px]">
          Teachers
        </h1>
        <div className="flex pl-[70%] gap-[20px] pt-[40px]">
          <Image src="/prev-icon.svg" alt="next-icon" width="50" height="50" />
          <Image src="/next-icon.svg" alt="next-icon" width="50" height="50" />
        </div>
      </div>
      <div>
        <Image src="/teacher-1.svg" alt="next-icon" width="200" height="100" />
        <Image
          src="/teacher-1.svg"
          alt="next-icon"
          width="200"
          height="100"
        />{" "}
        <Image src="/teacher-1.svg" alt="next-icon" width="200" height="100" />
      </div>
    </div>
  );
}

export default HomeFourth
