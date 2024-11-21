// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import {
  FaPhoneAlt,
  FaGithub,
  FaFacebookMessenger,
  FaFileDownload,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
          alert("failed to send message");
        }
      );
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="container mx-auto h-auto items-center p-8 lg:pt-16 "
    >
      <div className="contact_section flex flex-col rounded-lg p-2 lg:p-8 ">
        <div className="contact_form_title text-lg mb-2 md:text-[1rem] lg:text-[2rem] font-bold text-center">
          Get In Touch
        </div>
        <div className="contact_form flex flex-col md:flex-row justify-start shadow-6xl h-auto">
          <div className="bg-[#000] flex-1 bg-[url('/assets/portfolio-bg.jpg')] bg-cover bg-center h-auto place-content-center">
            <p className="text-4xl md:text-6xl capitalize text-center md:text-left md:pl-14 tracking-wide p-4 ">
              Lets discuss on something cool together
            </p>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-1 flex-col h-auto p-8 bg-slate-50 justify-center"
          >
            <p className="text-black mb-4 font-bold">Let's Talk!</p>
            <div className="mb-4">
              {/* <label htmlFor="name" className='block text-gray-600 text-xs'>Enter Full Name</label> */}
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Enter full name"
                required
                className="w-full py-2 px-4 text-black rounded-md bg-transparent border-b-2 border-b-black"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="user_email"
                required
                id="email"
                placeholder="Enter email"
                className="w-full py-2 px-4 text-black rounded-md bg-transparent border-b-2 border-b-black"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                id="message"
                required
                placeholder="Enter message here"
                className="w-full h-48 rounded-md text-black py-2 px-4 bg-transparent border-b-2 border-b-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="py-2 px-4 bg-neutral-600 hover:bg-neutral-800 border rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
