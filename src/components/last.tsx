import React from 'react'
import Image from 'next/image';
import '@/css/last.css'
const Pro = () => {
  return (
    <div className='my-div' >
      
     <div className='my-element'>
      <div className='lost'>
         <p className='losf'>Let’s dream big </p><p className='los'>together!</p>
         </div>
         <p className='small'>Join us on a journey of creativity and collaboration</p>
        <div className='aa'>         
          <button className='butt-1'>Contact us</button>    
 <button className='butt-2'>Hire us</button>  </div>
     
     
     <div className='ion'>
     <Image
        src="/linkedin.png"
        alt="Plus Image Hero"
        className=""
        width={50}
        height={50}
      />
     <Image
        src="/instagram.png"
        alt="Plus Image Hero"
        className=""
        width={50}
        height={50}
      />
      <Image
      src="/u.png"
      alt="Plus Image Hero"
      className=""
      width={50}
      height={50}
    />
    <Image
    src="/y.png"
    alt="Plus Image Hero"
    className=""
    width={50}
    height={50}
  />
     </div>
     
     
     <p className='rod'> Copyright © 2024. Crayont. All rights reserved.</p>
     <p className='my-text'>Crayont</p>
     
     </div>
      
      
      </div>
  )
}

export default Pro;




