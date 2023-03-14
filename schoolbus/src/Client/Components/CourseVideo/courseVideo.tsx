import React from 'react'


export default function courseVideo() {
  return (
    <div>
      <div>
        <h1>Course Title:</h1>
        <span> Masterclass For Graphic Designers</span>
      </div>
      <div>
        
        <video width="320" height="240" controls>
            {/* <source src="" type="">
            <source src="" type=""></source> */}
        </video>
      </div>
    </div>
  );
}
