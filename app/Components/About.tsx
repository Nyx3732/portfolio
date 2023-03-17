import photo from "img/photo.png"
import React from "react";
import Skill from "~/Components/Skill";

const skillsArray = [
    <Skill SkillName="HTML" key="1"/>,
    <Skill SkillName="CSS" key="2"/>,
    <Skill SkillName="JavaScript" key="3"/>,
    <Skill SkillName="Java" key="4"/>,
    <Skill SkillName="Python" key="5"/>,
    <Skill SkillName="SQL" key="6"/>,
    <Skill SkillName="React" key="7"/>,

  ]

export default function About() {
    return(
        <div className="flex flex-row gap-20 justify-evenly items-center my-20">
        <img src={photo} className="h-custom"></img>
        <div> 
            <div className="my-10">
                <p className="text-3xl text-green-1 font-bold my-5">About me</p>
                <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className=" my-10">
            <p className="text-xl my-5">My skills</p> 
            <div className="flex flex-row gap-2"> {skillsArray}</div>
            
            </div>
        </div>
        </div>
    )
}
