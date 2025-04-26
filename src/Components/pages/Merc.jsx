import React, { useState, useEffect } from "react";
import "../../App.css";
import "./pagesCSS/Merc.css";

function Merc() {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const mercs = [
    {
      name: "Payton Campbell",
      title: "Regent / President",
      pledgeClass: "Eta Gamma 382 X! TT! YY! Xi Gamma Pledge Class",
      image: "/images/Merc/Regent.png",
      description:
        "Payton Campbell is a current Junior in Biomedical Engineering at the University of Colorado – Boulder, with minors in Electrical Engineering and Engineering Management. She grew up in the Southern Denver Metro area, surrounded by her parents, younger brother, and three Great Danes. She enjoys concerts, snowboarding, printmaking, and graphic design. She also has a collection of records and posters that cover most of her walls! She pursued engineering to combine her love of science, biology, and human anatomy with her love of design. Payton’s favorite parts of Theta Tau have been being able to meet new people and form some of her closest friendships, while still being able to pursue leadership and contribute to the success of the chapter.",
    },
    {
      name: "Jayce Wynn",
      title: "Vice Regent / Vice President",
      pledgeClass: "Eta Gamma 441 Y! Pi Gamma Pledge Class",
      image: "/images/Merc/Vice.png",
      description:
        "Jayce is currently pursuing a bachelor’s degree in biomedical engineering with a minor in electrical engineering at the University of Colorado Boulder. He is working to build a strong foundation in engineering principles, human biology, and medical applications. Upon graduation, Jayce plans to pursue a career in the medical device industry, applying engineering concepts to improve patient outcomes. Theta Tau has provided Jayce with the opportunity to surround himself with like-minded engineers, who have supported his personal and professional growth and resulted in lifelong friendships. As Vice Regent, Jayce is committed to fostering a welcoming community that emphasizes personal development and supports the success of each member.",
    },
    {
      name: "Aaron Nong",
      title: "Scribe",
      pledgeClass: "Eta Gamma 400 V! Omicron Gamma Pledge Class",
      image: "/images/Merc/Scribe.png",
      description:
        "Aaron is a sophomore majoring in Computer Science with a minor in Business. Born in California, he moved to Colorado at a young age and has lived there ever since. In his free time, he enjoys playing video games, drawing, going to the gym, and hanging out with his friends. Having been a part of the fraternity since his first year in college, he’s excited to contribute to the fraternity as Scribe.",
    },
    {
      name: "Abby Rugg",
      title: "Treasurer",
      pledgeClass: "Eta Gamma 408 Z! Omicron Gamma Pledge Class",
      image: "/images/Merc/Treasurer.png",
      description:
        "Abigail is a sophomore majoring in Architectural Engineering with minors in Business and Engineering Management, combining her interests in creative design, leadership, and problem-solving. Outside of academics, Abby enjoys snowboarding, line dancing, traveling, axe throwing, cooking and managing finances. She values her time in Theta Tau for the incredible people she’s met and the fun events the chapter organizes. As Treasurer, Abby is dedicated to supporting the chapter’s success and keeping things running smoothly. She’s proud to contribute to the welcoming and inspiring community that makes Theta Tau such a special part of her college experience.",
    },
    {
      name: "Madisyn Manka",
      title: "Marshal",
      pledgeClass: "Eta Gamma 438 W! Pi Gamma Pledge Class",
      image: "/images/Merc/Marshal.png",
      description:
        "Madisyn is a junior civil engineering student at the University of Colorado Boulder, is passionate about skiing, pottery, cooking, dirt biking, traveling, and trying new things. She cherishes her time and the collaborative connections she’s made through Theta Tau. As the Marshal, she aims to create a welcoming and inclusive community for the chapter. ",
    },
    {
      name: "Carly Davis",
      title: "Corresponding Secretary",
      pledgeClass: "Eta Gamma 425 R! Pi Gamma Pledge Class",
      image: "/images/Merc/CorrSec.png",
      description:
        "Carly is a sophomore at the University of Colorado, Boulder, majoring in Creative Technology and Design and minoring in Leadership. She enjoys reading, graphic design, and spending time with her family and friends. In her free time, you can usually find her doing something with music- whether listening, composing, or playing one of her seven instruments- she has fun doing it all! She went into engineering to combine her love for problem-solving with her uniquely creative and humanitarian passions. She rushed Theta Tau at the behest of one of her friends and quickly fell in love with the supportive community that encourages hard work and meaningful relationships. As Corresponding Secretary, she hopes to expand this culture by connecting alumni with current members to further professional opportunities and personal connections.",
    },
    {
      name: "Victoria Davis",
      title: "Inner Guard",
      pledgeClass: "Eta Gamma 414 T! Omicron Gamma Pledge Class",
      image: "/images/Merc/InnerGuard.png",
      description:
        "Victoria is a sophomore majoring in Computer Science with a minor in Computer Engineering. Outside of school, she enjoys working as a learning assistant, exploring her hometown of Pittsburgh, PA, spending time outdoors, and trying new things. Her favorite part of Theta Tau is always knowing somebody in the engineering center. As Inner Guard, Victoria is excited to get to know the Sigma Gamma pledge class and help them integrate into the fraternity. She hopes to share with others the energy and brotherhood she has found in Theta Tau.",
    },
    {
      name: "Julian Werder",
      title: "Outer Guard",
      pledgeClass: "Eta Gamma 417 U! Omicron Gamma Pledge Class",
      image: "/images/Merc/OuterGuard.png",
      description:
        "Julian is a sophomore in Electrical and Computer Engineering with minors in Quantum Engineering and Computer Science. He enjoys skiing, F1 racing, and working on cars. As the Outer Guard, Julian is dedicated to creating a welcoming environment for the incoming Sigma Gamma pledge class. He hopes to inspire others and contribute to the lasting legacy of Theta Tau.",
    },
  ];

  // Set a flag for smooth transition (300ms duration)
  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setActiveCard(null), 300);
  };

  useEffect(() => {
    if (activeCard !== null) {
      // Delay setting visible until after the modal mounts
      setIsVisible(true);
    }
  }, [activeCard]);

  return (
    <div className="MercPage">
      <div className="MercHead"></div>
      <div className="MercBody">
        <div className="MercuryCouncil">
          <div className="max-w-xl center mx-auto text-center">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mt-10">
              Mercury Council
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              See the executive team that runs Theta Tau so that it can function! Our Mercury Council consists of a dynamic
              group of individuals that are elected for each term to ensure the Eta Gamma chapter can function to the 
              best of its ability!
            </p>
          </div>
          <div className="Regents bg-white py-24 sm:py-32 flex justify-center items-center">
            <div className="mx-auto grid max-w-8xl gap-20 px-6 lg:px-8 xl:grid-cols-2">
              <ul
                role="list"
                className="grid gap-y-12 gap-x-20 sm:grid-cols-2 sm:gap-y-10 xl:col-span-2"
              >
                {mercs.map((merc, index) => (
                  <li key={index}>
                    <div className="flex items-center gap-x-8">
                      {/* Only the image is interactive */}
                      <img
                        className="w-44 h-44 aspect-square rounded-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                        src={merc.image}
                        alt={merc.name}
                        onClick={() => setActiveCard(index)}
                      />
                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-gray-900">
                          {merc.name}
                        </h3>
                        <p className="text-base font-semibold text-thetaTauRed">
                          {merc.title}
                        </p>
                        <p className="text-base font-semibold text-thetaTauGold">
                          {merc.pledgeClass}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* (Other parts of the page remain unchanged) */}
        </div>
      </div>
      {/* Overlay Modal */}
      {activeCard !== null && (
        <div className="fixed inset-0 pt-20 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
          <div
            className={`bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative transform transition-all duration-300 ease-in-out ${
              isVisible ? "scale-95 opacity-100" : "scale-90 opacity-0"
            } overflow-y-auto max-h-[90vh] sm:max-h-[80vh]`}
            style={{ overscrollBehavior: 'contain' }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              className="w-32 h-32 rounded-full mx-auto object-cover"
              src={mercs[activeCard].image}
              alt={mercs[activeCard].name}
            />
            <h3 className="text-3xl font-bold text-center mt-4">
              {mercs[activeCard].name}
            </h3>
            <p className="text-center text-xl text-thetaTauRed font-semibold">
              {mercs[activeCard].title}
            </p>
            <p className="text-center text-xl text-thetaTauGold font-semibold">
              {mercs[activeCard].pledgeClass}
            </p>
            <p className="text-xl mt-4 text-gray-700 text-sm">
              {mercs[activeCard].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Merc;