import React from "react";

const Profile = () => {
  return (
    <div
      name="profile"
      className=" w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Profile
          </p>
          <p className="py-6">About me...</p>
        </div>
        <p className="text-xl mt-20">
        Hello! I'm Ethan, a seasoned software engineer with a fervent dedication to technology development
        and engineering. With a background enriched by diverse work experiences and educational pursuits, I've 
        cultivated a versatile skill set and garnered invaluable insights along the way. Proficient in various 
        programming languages and frameworks, my journey spans roles at Apple and other groundbreaking 
        projects. I've spearheaded initiatives, from developing Splunk queries at Apple to crafting innovative AI-
        driven applications. My passion for AI, ML, and data science is evident in my commitment to tackling 
        complex challenges and delivering impactful solutions.
        </p>

        <br />
        <p className="text-xl">
        As a multilingual individual fluent in English and Mandarin, with ongoing studies in Japanese, I deeply value 
        effective cross-cultural communication. Having experienced the trials and triumphs of immigration, I 
        embrace the journey of adaptation and growth, both personally and professionally. Beyond the realm of 
        technology, I'm an avid explorer, constantly seeking new hobbies and avenues for personal development. 
        The thrill of discovery and the pursuit of knowledge fuel my passion for life and innovation. Join me as I 
        continue to push boundaries, explore new horizons, and make meaningful contributions to the ever-
        evolving landscape of technology and beyond.
        </p>
      </div>
    </div>
  );
};

export default Profile;
