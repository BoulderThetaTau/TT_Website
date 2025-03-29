import React, {useState} from "react";
import '../../App.css';
import './pagesCSS/Merc.css';

function Merc(){
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
                    <div class="Regents bg-white py-24 sm:py-32 flex justify-center items-center">
                        <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-2">
                            <ul role="list" class="grid gap-y-12 gap-x-20 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            <li>
                                <div class="flex items-center gap-x-8">
                                <img
                                    class="w-44 h-44 max-w-full max-h-full rounded-full object-cover"
                                    src="images/merc/Regent.png"
                                    alt=""
                                />
                                <div>
                                    <h3 class="text-lg font-bold tracking-tight text-gray-900">
                                    Payton Campbell
                                    </h3>
                                    <p class="text-base font-semibold text-thetaTauRed">
                                    Regent / President
                                    </p>
                                    <p class="text-base font-semibold text-thetaTauGold">
                                    Eta Gamma 382 X! TT! YY! <br />
                                    Xi Gamma Pledge Class
                                    </p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center gap-x-8">
                                <img
                                    class="w-44 h-44 max-w-full max-h-full rounded-full object-cover" 
                                    src="images/merc/Vice.png"
                                    alt=""
                                />
                                <div>
                                    <h3 class="text-lg font-bold tracking-tight text-gray-900">
                                    Jayce Wynn
                                    </h3>
                                    <p class="text-base font-semibold text-thetaTauRed">
                                    Vice Regent / Vice President
                                    </p>
                                    <p class="text-base font-semibold text-thetaTauGold">
                                    Eta Gamma 441 Y! <br />
                                    Pi Gamma Pledge Class
                                    </p>
                                </div>
                                </div>
                            </li>
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
        </div>
    )
}

export default Merc;