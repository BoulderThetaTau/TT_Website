import React, {useState} from "react";
import '../../App.css';
import './pagesCSS/Merc.css';

function Merc(){
    const [activeCard, setActiveCard] = useState(null); // Track which card is active

    const mercs = [
        {
        name: "Payton Campbell",
        title: "Regent / President",
        pledgeClass: "Eta Gamma 382 X! TT! YY! Xi Gamma Pledge Class",
        image: "images/merc/Regent.png",
        description: "Payton Campbell is a current Junior in Biomedical Engineering at the University of Colorado – Boulder, with minors in Electrical Engineering and Engineering Management. She grew up in the Southern Denver Metro area, surrounded by her parents, younger brother, and three Great Danes. She enjoys concerts, snowboarding, printmaking, and graphic design. She also has a collection of records and posters that cover most of her walls! She pursued engineering to combine her love of science, biology, and human anatomy with her love of design. Payton’s favorite parts of Theta Tau have been being able to meet new people and form some of her closest friendships, while still being able to pursue leadership and contribute to the success of the chapter.",
        },
        {
        name: "Jayce Wynn",
        title: "Vice Regent / Vice President",
        pledgeClass: "Eta Gamma 441 Y! Pi Gamma Pledge Class",
        image: "images/merc/Vice.png",
        description: "Jayce is currently pursuing a bachelor’s degree in biomedical engineering with a minor in electrical engineering at the University of Colorado Boulder. He is working to build a strong foundation in engineering principles, human biology, and medical applications. Upon graduation, Jayce plans to pursue a career in the medical device industry, applying engineering concepts to improve patient outcomes. Theta Tau has provided Jayce with the opportunity to surround himself with like-minded engineers, who have supported his personal and professional growth and resulted in lifelong friendships. As Vice Regent, Jayce is committed  to fostering a welcoming community that emphasizes personal development and supports the success of each member.",
        },
    ];

    const closeModal = () => {
        setActiveCard(null); // Close the modal by setting activeCard to null
    };
    return(
        <div className="MercPage">
            <div className="MercHead">

            </div>
            <div className="MercBody">
                <div className="MercuryCouncil">
                    <div class="max-w-xl center mx-auto text-center">
                        <h2 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mt-10">Mercury Council</h2>
                        <p class="mt-6 text-lg/8 text-gray-600">
                        See the executive team that runs Theta Tau so that it can function! Our Mercury Council consists of a dynamic
                        group of individuals that are elected for each term to ensure the Eta Gamma chapter can function to the 
                        best of its ability!</p>
                    </div>
                    <div className="Regents bg-white py-24 sm:py-32 flex justify-center items-center">
                        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-2">
                        <ul role="list" className="grid gap-y-12 gap-x-20 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            {mercs.map((merc, index) => (
                            <li key={index}>
                                <div className="flex items-center gap-x-8">
                                {/* Make only the image interactive */}
                                <img
                                    className="w-44 h-44 max-w-full max-h-full rounded-full object-cover cursor-pointer"
                                    src={merc.image}
                                    alt={merc.name}
                                    onClick={() => setActiveCard(index)} // Open the modal for this card
                                />
                                <div>
                                    <h3 className="text-lg font-bold tracking-tight text-gray-900">{merc.name}</h3>
                                    <p className="text-base font-semibold text-thetaTauRed">{merc.title}</p>
                                    <p className="text-base font-semibold text-thetaTauGold">{merc.pledgeClass}</p>
                                </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
          </div>
                    <div class="bg-white py-24 sm:py-32">
                        <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                            <ul role="list" class="grid gap-x-10 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-4">
                            <li>
                                <div class="flex items-center gap-x-6">
                                <img class="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
                                    <p class="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center gap-x-6">
                                <img class="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
                                    <p class="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center gap-x-6">
                                <img class="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
                                    <p class="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center gap-x-6">
                                <img class="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
                                    <p class="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                </div>
                                </div>
                            </li>
                                {/* More People */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay Modal */}
            {activeCard !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                        <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={closeModal}
                        >
                        ✕
                        </button>
                        <img
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                        src={mercs[activeCard].image}
                        alt={mercs[activeCard].name}
                        />
                        <h3 className="text-xl font-bold text-center mt-4">{mercs[activeCard].name}</h3>
                        <p className="text-center text-thetaTauRed font-semibold">{mercs[activeCard].title}</p>
                        <p className="text-center text-thetaTauGold font-semibold">{mercs[activeCard].pledgeClass}</p>
                        <p className="mt-4 text-gray-700 text-sm">{mercs[activeCard].description}</p>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default Merc;