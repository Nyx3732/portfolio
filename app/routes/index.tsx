import Navbar from "~/Components/Navbar";
import Intro from "~/Components/Intro";
import About from "~/Components/About";
import Skill from "~/Components/Skill";
import Project from "~/Components/Project";
import Contact from "~/Components/Contact";
import { myFunction } from "~/Components/Show";
import Projects from "~/Components/Projects";



const toolsArray = ["Tool1", "Tool2"];
const toolsArray2 = ["rzecz","rzecz"];

const projectArray = [
  <Project tools={toolsArray} image="image" projectName="Name" key="1"/>,
  <Project tools={toolsArray2} image="image" projectName="Name2" key="2"/>
]

const description1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
export default function Index() {
  return (
    <body className="bg-gray-1">
    <div className="bg-gradient-to-bl from-green-1/20 via-black/20 to-green-1/20 min-h-screen p-0 m-0 text-white">
      <Navbar/>
      <Intro/>
      <About/>
      <div onClick={myFunction}>Toggle DIV</div>

<div  className="display: block;">
<Project  tools={toolsArray} image="img/icon2.png" projectName="cos" 
      description={description1} role="role"/>
</div>
<Projects/>
      <Project  tools={toolsArray} image="img/icon2.png" projectName="cos" 
      description={description1} role="role"/>
      <Contact/>
    </div>
    </body>
  
  );
}
