import React, { useState } from "react";

import AIStoryTeller from "../assets/portfolio/StoryTeller.png";
import AIStoryPainter from "../assets/portfolio/StoryPainter.png";
import SearchandRescue from "../assets/portfolio/HIFdrone.jpg";
import SoilMoistureizer from "../assets/portfolio/WateringPlant.jpg";
import HomeworkHelper from "../assets/portfolio/HomeworkHelper.jpg";
import ReactLiveChat from "../assets/portfolio/LiveChat.jpg";
import ClipVista from "../assets/portfolio/ClipVista.png";
import SchoolDatabase from "../assets/portfolio/SchoolDatabase.jpg";
import PokemonIndex from "../assets/portfolio/PokemonIndex.png";


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: AIStoryTeller,
            description: "Innovatively developed an AI Storyteller app, seamlessly integrating computer vision and NLP technologies. Demonstrated expertise by leveraging Hugging Face's Transformers for image-to-text and integrating GPT-2 for creative story generation. Proficient in Python, ML, and deep learning techniques, with additional capabilities showcased through OpenAI API for NLP tasks.",
        },
        {
            id: 2,
            src: AIStoryPainter,
            description: "Innovatively developed an AI Storypainter app, seamlessly integrating computer vision and NLP technologies. Demonstrated expertise by leveraging Hugging Face's Transformers for image generation and integrating LLM. Comfortable with different models. Hosted and managed project on GitHub, highlighting version control practices. ",
        },
        {
            id: 3,
            src: SearchandRescue,
            description: "Developed Raspberry Pi project to locate and rescue individuals in remote areas with low visibility. Developed a program in C to fetch real-time GPS coordinates and thermal camera images. Used Python for SMS communication and OpenCV and Tensorflow to assist with image processing. Developed embedded software that act as a hub for all of the components. ",
        },
        {
            id: 4,
            src: SchoolDatabase,
            description: "Developed database with MySql based on the information pro…Used React to develop a web app to fetch data from PokeAPI and display Pokémon details.  ",
        },
        {
            id: 5,
            src: ReactLiveChat,
            description: "Developed a real-time chat application using Node.js, React.js, and ChatEngine.io. Implemented user authentication, socket connections, and real-time messaging with features such as group chats, direct messages, and file attachments. Troubleshot and debugged to ensure seamless user experiences, showcasing proficiency in full-stack development and effective problem-solving. ",
        },
        {
            id: 6,
            src: HomeworkHelper,
            description: "Developed a Discord bot using Python and Node.js to assist students with homework and tests. Discord server grew to over 200+ students using the service. ",
        },
        {
            id: 7,
            src: SoilMoistureizer,
            description: "Developed embedded software in C to interface with GPIO for capturing moisture levels in soil. Implemented an analog-to-digital converter to display values on an LCD screen and make decisions using a finite state machine. ",
        },
        {
            id: 8,
            src: ClipVista,
            description: "YouTube-inspired Platform: Develop a video-sharing platform resembling YouTube. Key Features: Fetch video data (views, likes, channels), enable search functionality, categorize videos. User Experience: Focus on intuitive interface, efficient content delivery, and user engagement features. ",
        },
        {
            id: 9,
            src: PokemonIndex,
            description: "Used React to develop a web app to fetch data from PokeAPI and display Pokémon details. ",
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
