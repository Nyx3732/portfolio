import laptop from "img/laptop.png"
import icon2 from "img/icon2.png"
import icon3 from "img/ICON3.png"
import React from "react";

interface IntroProps {
    onProjectsClick: () => void;
  }
  
export default function Intro({ onProjectsClick }: IntroProps) {
    return (
        <div className="flex flex-row justify-evenly items-center m-20 my-32">
        <div className="">
        <div>
          <p className="text-6xl font-bold my-5">Hi,</p>
          <p className="text-6xl font-bold my-5">I'm Sebastian Glados</p>
          <p className="text-3xl text-green-1 my-5">Software and website developer</p>
        </div>
        <div className="flex flex-row gap-3 items-center my-5">
          <a href=""><img src={icon2} className="h-10"></img></a>
          <a href=""><img src={icon3} className="h-10"></img></a>
          <button
            onClick={onProjectsClick}
            className="bg-gradient-to-bl from-green-2 to-green-1 w-max rounded-full p-1 focus:outline-none"
          >
            <div className="flex flex-col justify-between h-full bg-gray-1 text-white rounded-full py-1 px-5 hover:bg-transparent">
              <p className="text-xl">My projects ↓</p>
            </div>
          </button>
        </div>
        </div>
        <div>
            <img src={laptop} className="h-96"></img>
        </div>
        </div>
   
    )
}