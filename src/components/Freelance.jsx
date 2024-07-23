import React, { useState } from "react";

import DataAnnotation from "../assets/freelance/DataAnnotation.png";
import ElevatedTransmission from "../assets/freelance/ElevatedTransmission.png";
import SpartanMMA from "../assets/freelance/SpartanMMA.jpg";



const Freelance = () => {
  const jobs = [
    {
      id: 1,
      src: DataAnnotation,
      description: "valuate the code quality produced by AI models for correctness.Assist in developing an AI chatbot by providing diverse problems and solutions for coding challenges.",
    },
    {
      id: 2,
      src: ElevatedTransmission,
      description: "perform development, oversee, and maintenance a website using HTML for a transmission shop. Website: https://elevatedtransmission.com/",
    },
    {
      id: 3,
      src: SpartanMMA,
      description: "Created a website using css and Word Press for martial art school. Website: https://spartanspringtown.com/",
    },
  ];

  const [expandedJob, setexpandedJob] = useState(null);

  const toggleExpandedJob = (jobId) => {
    setexpandedJob(jobId === expandedJob ? null : jobId);
  };

  return (
    <div
      name="Freelance"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Freelance
          </p>
          <p className="py-6">Check out my freelance experience, click on picture to see detail</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {jobs.map(({ id, src, description }) => (
            <div
              key={id}
              className={`shadow-md shadow-gray-600 rounded-lg cursor-pointer ${expandedJob === id ? "h-auto" : "h-48 overflow-hidden"
                }`}
              onClick={() => toggleExpandedJob(id)}
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              {expandedJob === id && (
                <p className="text-center mt-2 mb-4">{description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Freelance;