import React from "react";
import avatarProfile from "/avatar-profile.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className=" flex min-h-screen w-full items-center justify-center pt-14 md:pt-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-5 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <div className="flex flex-col items-center justify-center gap-5 text-white">
            <img 
              src={avatarProfile}
              alt="avatar-profile"
              className="w-[250px] md:w-[350px] cursor-pointer rounded-full shadow-xl shadow-red-900 transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-600 hover:-translate-y-5 hover:scale-105 bg-zinc-700 hover:bg-zinc-300"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <div className="max-w-[600px] flex flex-col items-center justify-center text-center px-5 md:px-0">
            <h1 className="bg-gradient-to-r from-green-400 to-slate-500 bg-clip-text text-transparent text-4xl md:text-6xl font-[800] transition-all duration-300 hover:opacity-100">
              Benas Joshua C.
            </h1>
            <h3 className="uppercase   text-lg">Software Engineer</h3>
            <p className="">
              Self taught programmer. I build Web applications.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
