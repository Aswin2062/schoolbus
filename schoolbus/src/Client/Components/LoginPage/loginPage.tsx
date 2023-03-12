import React from 'react'

function loginPage() {
  return (
    <div>
      <div className=" pl-[20%]">
        <input
          className="flex justify-center w-[75%]   pl-[10%]  bg-[#FFFFFF]   rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
          type="text"
          placeholder="Your email"
          name="uname"
          required
        ></input>
        <br></br>
        <input
          className="flex justify-center w-[75%]   pl-[10%] bg-[#FFFFFF]  rounded-[10px]  border-solid  pr-[15px] pl-[15px] pt-[10px] pb-[10px]"
          type="text"
          placeholder="Your password"
          name="uname"
          required
        ></input>
      </div>
    </div>
  );
}

export default loginPage
