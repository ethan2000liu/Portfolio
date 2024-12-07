import React, { useState } from "react";
import Zinley from "../assets/career/Zinley.jpg";
import AppleSWE from "../assets/career/Apple.jpg";
import AppleCare from "../assets/career/AppleCare.png";
import RenEnergy from "../assets/career/RenEnergy.jpg";
import FindersTree from "../assets/career/FindersTree.jpg";
import NetworkSound from "../assets/career/NetworkSound.jpg";
import PurpleCow from "../assets/career/PurpleCow.jpg";

const Career = () => {
    const jobs = [
        {
            id: 1,
            src: Zinley,
            description: "Founding Engineer: Backend Maintenance: Managed PostgreSQL and Redis in Go, enhancing customer data processing and JWT authentication.User Registration: Improved QA for the registration workflow, increasing user sign-ups by 10%.API Documentation: Documented APIs using OpenAPI/Swagger.Monitoring Integration: Improved pipeline health visibility by 75% through Python integration with monitoring tools.Marketing Strategy: Developed a social media strategy, gaining 100 users in five days via outreach on Reddit, Twitter, Product Hunt, and Discord.User Growth: Boosted user engagement and early adoption through targeted marketing.Media Production: Created and edited video demos/tutorials for onboarding and product visibility using iMovie.Feedback Implementation: Enhanced features and UI/UX by analyzing and acting on beta feedback.",
        },
        {
            id: 2,
            src: AppleSWE,
            description: "Software Engineer: Developed a Splunk query to identify over 63 persistent failures within the system. Reported more than 250 bug reports for software builds.Conducted livilability testing and triaging for devices on all Apple platforms. Used Python to automate non-UI and XCTest for UI based test cases to reduce manual testing time.Developed Python script to consolidate device state and display overall pipeline health.",
        },
        {
            id: 3,
            src: AppleCare,
            description: "Tech Advisor: Provided technical assistance to Apple customers with difficult situations by understanding the problem, developing and researching a solution, documenting scenario, and problem solving. Achieved over 91.5% on quality standard, 90% on customer satisfaction, and 82% on issue resolution.",
        },
        {
            id: 4,
            src: RenEnergy,
            description: "Fullstack Developer: Developed an API server for data validation by using JavaScript, TypeScript, YAML, Node framework, and Docker for deployment. Automated data validation for API server response resulting in an 81% improvement in data integrity. Automated data validation for MySQL database resulting in improved workflow efficiency of 36%.",
        },
        {
            id: 5,
            src: PurpleCow,
            description: "Data Engineer: Organized data using excel and MySQL to complete over 200 client data for customers. Used Tableau for data visualization to find correlation between current and poetein client.",
        },
        {
            id: 6,
            src: FindersTree,
            description: "Software QA Specialist: Ensured comprehensive test coverage of SaaS websites by performing exploratory and automated testing using Selenium in Java, documenting bugs, and creating test suites.",
        },
        {
            id: 7,
            src: NetworkSound,
            description: "Embedded Software Engineer: Designed and implemented a embedded software that act as a sound control system using microcontrollers, Wi-Fi, and Bluetooth technology, incorporating CAPWAP and IAPP protocols. Developed a user-friendly interface with JavaScript and coded ESP32 in C for optimal performance.",
        },
        
    ];

    const [expandedJob, setexpandedJob] = useState(null);

    const toggleExpandedJob = (jobId) => {
        setexpandedJob(jobId === expandedJob ? null : jobId);
    };

    return (
        <div
            name="Career"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Career
                    </p>
                    <p className="py-6">Check out my work experience, click on picture to see detail</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
                    {jobs.map(({ id, src, description }) => (
                        <div
                            key={id}
                            className={`shadow-md shadow-gray-600 rounded-lg cursor-pointer ${
                                expandedJob === id ? "h-auto" : "h-48 overflow-hidden"
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

export default Career;