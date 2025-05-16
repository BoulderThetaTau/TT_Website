import React, { useState, useEffect } from "react";
import "../../App.css";
import "./pagesCSS/Merc.css";

function Merc() {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const mercs = [
    {
      name: "Liam Masias",
      title: "Regent / President",
      pledgeClass: "Eta Gamma 415 X! Omicron Gamma Pledge Class",
      image: "/images/Merc/Regent.png",
      description:
        "Liam Masias is pursuing two degrees in Computer Science and Electrical & Computer Engineering, along with minors in Business and Spanish. Passionate about the interface of hardware and software, he is fascinated by the systems that drive today’s technological world. Liam grew up in the Denver Metro area before moving to Boulder in 2023 after achieving his Associate’s Degree from the Community College of Denver. He finds a strong sense of community in Theta Tau, connecting with others who are committed to persevere through the rigors of their fields. As Regent, Liam is excited to build on the success of past leadership, working alongside the Executive Council to foster collaboration, strengthen relationships with other organizations, and expand the Chapter’s reach across the broader community.",
    },
    {
      name: "Victoria Davis",
      title: "Vice Regent / Vice President",
      pledgeClass: "Eta Gamma 414 Y! TT! Omicron Gamma Pledge Class",
      image: "/images/Merc/Vice.png",
      description:
        "Victoria is a sophomore majoring in Computer Science with a minor in Computer Engineering. Outside of school, she enjoys working as a learning assistant, exploring her hometown of Pittsburgh, PA, spending time outdoors, and trying new things. Her favorite part of Theta Tau is always knowing somebody in the engineering center. As Vice Regent, Victoria is excited to oversee event planning and help make others’ ideas come to life.",
    },
    {
      name: "Madison Petrucelli",
      title: "Scribe",
      pledgeClass: "Eta Gamma 458 V! Omicron Gamma Pledge Class",
      image: "/images/Merc/Scribe.png",
      description:
        "Madison Petruccelli is a sophomore majoring in Mechanical Engineering with a minor in Economics. When she is not in the classroom she enjoys playing soccer, skiing, hiking and any other kind of outdoor adventure. She is excited to be more involved in Theta Tau this semester as scribe and enjoys how many ski bum engineers she has met since she joined.",
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
      name: "Jerry Vanim-Botting",
      title: "Marshal",
      pledgeClass: "Eta Gamma 448 W! Rho Gamma Pledge Class",
      image: "/images/Merc/Marshal.png",
      description:
        "Jerry Vanim-Botting is a junior majoring in Electrical Engineering with minors in Energy and Engineering Management, with which he hopes to build a career modernizing grid infrastructure and integrating renewable energy sources. In his free time, he enjoys live music, yoga, and skiing. Jerry, as a transfer student, was ecstatic to find the community he did within Theta Tau and believes strongly in the organization. As Marshal, Jerry hopes to inspire a renewed focus within the chapter on supporting the health and wellness of its members, be the first line of backup for all members in distress, and serve as a fair and impartial mediator for intra-fraternal conflict.",
    },
    {
      name: "Lola Feilke",
      title: "Corresponding Secretary",
      pledgeClass: "Eta Gamma 422 R! Pi Gamma Pledge Class",
      image: "/images/Merc/CorrSec.png",
      description:
        "Lola Feilke is currently a sophomore majoring in Aerospace Engineering with a minor in Leadership Studies through the Presidents Leadership Class at CU. In her free time, she enjoys skiing, watching Formula 1, and grabbing pizookies with her brothers after chapter. Lola values the friendships and supportive community she’s found in Theta Tau and is excited to give back as Corresponding Secretary. In her role, she looks forward to strengthening connections between alumni and current members as well as creating meaningful opportunities for engagement across the broader Theta Tau community.",
    },
    {
      name: "Julian Werder",
      title: "Inner Guard",
      pledgeClass: "Eta Gamma 417 T! UU! Omicron Gamma Pledge Class",
      image: "/images/Merc/InnerGuard.png",
      description:
        "Julian is a sophomore in Electrical and Computer Engineering with minors in Quantum Engineering and Computer Science. He enjoys skiing, F1 racing, and working on cars. As the Outer Guard, Julian is dedicated to creating a welcoming environment for the incoming Sigma Gamma pledge class. He hopes to inspire others and contribute to the lasting legacy of Theta Tau.",
    },
    {
      name: "Cam Mars",
      title: "Outer Guard",
      pledgeClass: "Eta Gamma 444 U! Rho Gamma Pledge Class",
      image: "/images/Merc/OuterGuard.png",
      description:
        "Cam is currently a sophomore pursuing a dual degree in Computer Science and pure Mathematics at the University of Colorado Boulder. He grew up in the Southern Denver Metro Area alongside a younger brother and sister, as well as two dogs and a cat. When he’s not doing math or coding, Cam loves lifting weights, skiing, mogging, anime, manga, basketball and reading. As the Outer Guard, Cam is excited to welcome the Tau Gamma pledge class to Theta Tau and to create an environment that fosters fellowship, strength and brotherhood for the future members of Theta Tau.",
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
            className={`bg-white p-6 rounded-lg shadow-lg max-w-md sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl w-full relative transform transition-all duration-300 ease-in-out ${
              isVisible ? "scale-95 mobile:scale-100 opacity-100" : "scale-90 mobile:scale-100 opacity-0"
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
            <h3 className="text-3xl slim:text-4xl font-bold text-center mt-4">
              {mercs[activeCard].name}
            </h3>
            <p className="text-center text-xl slim:text-2xl text-thetaTauRed font-semibold">
              {mercs[activeCard].title}
            </p>
            <p className="text-center text-xl slim:text-2xl text-thetaTauGold font-semibold">
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