import laptop from "img/laptop.png"
import lap from "img/lap.png"
import icon2 from "img/icon2.png"
import icon3 from "img/ICON3.png"
import React from "react";
import git from "img/git.png"
import email from "img/email.png"
import linkedin from "img/linkedin.png"

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
          <a href="https://www.linkedin.com/in/sebastian-glados/"><img src={linkedin} className="cursor-pointer h-10"></img></a>
          <a href="https://github.com/Raikyudev"><img src={git} className="h-10 cursor-pointer"></img></a>
          <button
            onClick={onProjectsClick}
           className="border-2 rounded-full h-10 cursor-pointer"
          >
            
              <p className="text-white text-xl px-4">My projects ↓</p>
            
          </button>
        </div>
        </div>
        <div>
            <img src={lap} className="h-96"></img>
        </div>
        </div>
   
    )
}