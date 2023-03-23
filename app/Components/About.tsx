import photo from "img/photo.png"
import avatar from "img/avatar.png"
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
        <div className="flex flex-row gap-20  items-center my-20">
        <img src={avatar} className="h-custom"></img>
        <div> 
            <div className="">
                <p className="text-3xl text-green-1 font-bold my-5">About me</p>
                <p className="text-xl w-120">I'm a computer science student with a passion for software and web development. I have experience creating innovative digital products. As a naturally curious individual, I'm always eager to learn and adapt to new technologies and ideas. My ultimate goal is to work with like-minded individuals to create software that has a positive impact on the world.</p>
            </div>
            <div className=" my-10">
            <p className="text-xl my-5">My skills</p> 
            <div className="flex flex-row gap-2"> {skillsArray}</div>
            
            </div>
        </div>
        </div>
    )
}
