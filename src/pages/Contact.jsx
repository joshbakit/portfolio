import React, { useRef } from 'react'
import { FaPhoneAlt, FaGithub, FaFacebookMessenger, FaFileDownload } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        alert('message sent');
      }, (error) => {
        console.log(error.text);
        alert('failed to send message');
      }
      );
    e.target.reset();
  }



  return (
    <div className="container mx-auto min-h-screen items-center p-8 ">
      <div className="contact_section max-h-[90%] flex flex-col md:flex-row rounded-lg p-2 lg:p-8 ">
        <div className="contact_getintouch flex-1 text-center p-2 flex flex-col justify-center">
          <div className="contact_getintouch_title text-lg md:text-[1rem] lg:text-[2rem] font-bold">Get in Touch</div>
          <div className="contact_getintouch_subtitle text-xs w-full lg:w-3/4 mx-auto italic">You can text me, call me, follow me on my linkedin account, visit my github profile, or send a message request on messenger or you can submit an email at the right side →</div>
          <div className="contact_getintouch_info grid  grid-rows-1 md:grid-rows-2 grid-cols-1 md:grid-cols-2 p-4 gap-6">
            <div className="contact_getintouch_info_number flex flex-col items-center">
              <FaPhoneAlt size={30} className='mb-2' />
              <span className='text-xs'>0966 947 0915</span>
              <span className='text-xs'>0967 087 5807</span>
            </div>
            <div className="contact_getintouch_info_gmail flex flex-col items-center">
              <BiLogoGmail size={30} className='mb-2' />
              <a href="#" className='underline text-xs'>benasjoshuac@gmail.com</a>
            </div>
            <div className="contact_getintouch_info_linkedin flex flex-col items-center">
              <CiLinkedin size={30} className='mb-2' />
              <a href="https://www.linkedin.com/in/joshua-benas-7a68b8207/" className='underline text-xs'>linkedin.com/in/joshua-benas-7a68b8207</a>
            </div>
            <div className="contact_getintouch_info_github flex flex-col items-center">
              <FaGithub size={30} className='mb-2' />
              <a href="https://github.com/joshbakit/" className='underline text-xs'>github.com/joshbakit/</a>
            </div>
            <div className="contact_getintouch_info_messenger flex flex-col items-center">
              <FaFacebookMessenger size={30} className='mb-2' />
              <a href="m.me/joshbakit" className='underline text-xs'>m.me/joshbakit</a>
            </div>
            <div className="contact_getintouch_info_resume flex flex-col items-center">
              <FaFileDownload size={30} className='mb-2' />
              <a href="/assets/JoshuaBenas-Resume.pdf" className='underline text-xs' download>Download Resume</a>
            </div>
          </div>
        </div>




        <div className="contact_form flex-1 p-4 flex flex-col justify-start rounded-md shadow-6xl">
          <div className="contact_form_title text-lg mb-2 md:text-[1rem] lg:text-[2rem] font-bold text-center">Contact Form</div>
          <form ref={form} onSubmit={sendEmail} className='mx-auto w-full flex flex-col'>
            <div className='mb-4'>
              {/* <label htmlFor="name" className='block text-gray-600 text-xs'>Enter Full Name</label> */}
              <input type="text" name="user_name" id="name" placeholder='Enter full name' required className='w-full py-2 px-4 text-black rounded-md' />
            </div>
            <div className='mb-4'>
              <input type="email" name="user_email" required id="email" placeholder='Enter email' className='w-full py-2 px-4 text-black rounded-md' />
            </div>
            <div className='mb-4'>
              <textarea name="message" id="message" required placeholder='Enter message here' className='w-full h-48 rounded-md text-black py-2 px-4'>
              </textarea>
            </div>



            <button type='submit' className='py-2 px-4 bg-neutral-600 hover:bg-neutral-800 border rounded-md'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact