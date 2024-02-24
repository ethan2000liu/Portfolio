import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import github from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";
import typescript from "../assets/experience/typescript.jpg";
import python from "../assets/experience/python.jpg";
import c from "../assets/experience/c.jpg";
import cpp from "../assets/experience/c++.jpg";
import radar from "../assets/experience/radar.jpg";
import nextjs from "../assets/experience/nextjs.png";
import verilog from "../assets/experience/verilog.png";
import vhdl from "../assets/experience/vhdl.png";
import tableau from "../assets/experience/tableau.png";
import sql from "../assets/experience/sql.png";
import docker from "../assets/experience/docker.png";



const Experience = () => {
  const techs = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-gray-400",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: typescript,
      title: "TypeScript",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: radar,
      title: "Radar",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: c,
      title: "C",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: cpp,
      title: "C++",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: nextjs,
      title: "NextJS",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: vhdl,
      title: "VHDL",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: verilog,
      title: "Verilog",
      style: "shadow-gray-400",
    },
    {
      id: 15,
      src: tableau,
      title: "Tableau",
      style: "shadow-gray-400",
    },
    {
      id: 16,
      src: docker,
      title: "Docker",
      style: "shadow-gray-400",
    },
    {
      id: 17,
      src: sql,
      title: "SQL",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are some of the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
