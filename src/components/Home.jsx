import React from "react";
import hero from "../assets/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div classNAme="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hi, my name is Ethan Liu
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
          I'm a multilingual software engineer with extensive experience in diverse tech roles, 
          proficient in various languages and frameworks, Currently have passion for AI, ML, and data science.
          </p>
          <div>
            <Link
              to="profile"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center 
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src={hero}
            alt="my profile"
            className="rounded-2xl mx-auto  w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
