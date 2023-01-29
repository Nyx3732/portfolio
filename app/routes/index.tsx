import Navbar from "~/Components/Navbar";
import Intro from "~/Components/Intro";
import About from "~/Components/About";
import Skill from "~/Components/Skill";
import Project from "~/Components/Project";
import Contact from "~/Components/Contact";



const skillsArray = [
  <Skill SkillName="Javascript" key="1"/>,
  <Skill SkillName="Javascript" key="2"/>,
  <Skill SkillName="Javascript" key="3"/>,
  <Skill SkillName="Javascript" key="4"/>
]

const toolsArray = ["Tool1", "Tool2"];

const projectArray = [
  <Project tools={toolsArray} image="image"/>
]
export default function Index() {
  return (
    <body className="bg-gray-1">
    <div className="bg-gradient-to-bl from-green-1/25 via-black/25 to-green-1/25 min-h-screen p-0 m-0 text-white">
      <Navbar/>
      <Intro/>
      <About/>
      {skillsArray}
      <Project tools={toolsArray}/>
      <Contact/>
    </div>
    </body>
  
  );
}
