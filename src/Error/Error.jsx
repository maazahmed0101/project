import React from 'react'
import './Error.css'
import img from './Error_Img.webp'
function Error() {
  return (
    <div>
      <img 
      className='ImgSelector'
        src={img}
        alt="imageError"
      />
    </div>
  );
}

export default Error