import React, { useState } from "react";

import AIStoryTeller from "../assets/portfolio/StoryTeller.png";
import AIStoryPainter from "../assets/portfolio/StoryPainter.png";
import SearchandRescue from "../assets/portfolio/HIFdrone.jpg";
import SoilMoistureizer from "../assets/portfolio/WateringPlant.jpg";
import HomeworkHelper from "../assets/portfolio/HomeworkHelper.jpg";
import ReactLiveChat from "../assets/portfolio/LiveChat.jpg";
import ClipVista from "../assets/portfolio/ClipVista.png";
import SchoolDatabase from "../assets/portfolio/SchoolDatabase.jpg";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: AIStoryTeller,
            description: "Description for AI Story Teller project...",
        },
        {
            id: 2,
            src: AIStoryPainter,
            description: "Description for AI Story Painter project...",
        },
        {
            id: 3,
            src: SearchandRescue,
            description: "Description for Search and Rescue project...",
        },
        {
            id: 4,
            src: SchoolDatabase,
            description: "Description for School Database project...",
        },
        {
            id: 5,
            src: ReactLiveChat,
            description: "Description for React Live Chat project...",
        },
        {
            id: 6,
            src: HomeworkHelper,
            description: "Description for Homework Helper project...",
        },
        {
            id: 7,
            src: SoilMoistureizer,
            description: "Description for Soil Moistureizer project...",
        },
        {
            id: 8,
            src: ClipVista,
            description: "Description for Clip Vista project...",
        },
    ];

    const [expandedProject, setExpandedProject] = useState(null);

    const toggleExpandedProject = (projectId) => {
        setExpandedProject(projectId === expandedProject ? null : projectId);
    };

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
                    {portfolios.map(({ id, src, description }) => (
                        <div
                            key={id}
                            className={`shadow-md shadow-gray-600 rounded-lg cursor-pointer ${
                                expandedProject === id ? "h-auto" : "h-48 overflow-hidden"
                            }`}
                            onClick={() => toggleExpandedProject(id)}
                        >
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            {expandedProject === id && (
                                <p className="text-center mt-2 mb-4">{description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
