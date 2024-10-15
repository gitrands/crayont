import React from 'react'
import '@/css/Contact.css'

const Contact = () => {
  return (
    <div className='bod'>
      <div className='head'>
       <div className='text-full'>
        <div className='contact'>Contact</div>
        <div className='us'>Us </div>
        </div>        
     <div className='para'>   <p className='pp'>Got a question or an idea? Drop us a line—we’d love to hear from you!</p></div>
        </div>  



   <div className='top-con'>
     <div className='top-con-left'>
       <div className='name'>
        <p className='pop'>Name</p>
        <input type="text" name="username" placeholder="Enter your Name"  className="rounded-text-field"></input>
       </div>

       <div className='email'>  <p className='pop'>E-mail</p>
       <input type="text" name="username" placeholder="Enter your E-mail"  className="rounded-text-field"></input></div>
</div>

     <div className='top-con-right'>


        <div className='phone'>  <p className='pop'>Phone No</p>
        <input type="text" name="username" placeholder="Enter your Phone no"  className="rounded-text-field"></input></div>

        <div className='tet'>  <p className='pop'>What's the best way to reach you</p>
        <input type="text" name="username" placeholder="Select option"  className="rounded-text-field"></input></div>
     </div>
    </div>
     <p className='pop'>Drop your message</p>
     <input type="text" name="username" placeholder="Let's discuss about your ideas ..."  className="rounded-text-field-lost"></input><br/>
     <div className='butt'><button className='butt-1'>Contact us</button>   </div>
    </div>
  )
}

export default Contact