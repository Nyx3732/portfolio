import icon2 from "img/icon2.png";
import { myFunction } from "~/Components/Show";
import Project from "~/Components/Project";


const toolsArray = ["Tool1", "Tool2"];
const toolsArray2 = ["rzecz","rzecz"];

const projectArray = [
  <Project tools={toolsArray} image="image" projectName="Name" key="1"/>,
  <Project tools={toolsArray2} image="image" projectName="Name2" key="2"/>]

  const description1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

export default function Projects() {
  return (
    <div>
      <p>My projects</p>
      <div className="flex flex-row justify-center gap-14 ">
      
        <div onClick={myFunction} className="group inline-block relative">
          <img src={icon2} className="border-2 h-96" />
          <div className="hidden group-hover:block group-hover:text-red-500 bg-black/60 absolute top-0 left-0 w-full h-full flex items-center justify-center">
            Project 1
          </div>
        </div>

        <div className="group inline-block relative">
          <img src={icon2} className="border-2 h-96" />
          <div className="hidden group-hover:block group-hover:text-red-500 bg-black/60 absolute top-0 left-0 w-full h-full flex items-center justify-center">
            Project 2
          </div>
        </div>

        <div className="group inline-block relative">
          <img src={icon2} className="border-2 h-96" />
          <div className="hidden group-hover:block group-hover:text-red-500 bg-black/60 absolute top-0 left-0 w-full h-full flex items-center justify-center">
            Project 3
          </div>
        </div>
      </div>
      <div id="myDIV" className="display: block;">
<Project  tools={toolsArray} image="img/icon2.png" projectName="cos" 
      description={description1} role="role"/>
</div>
    </div>
  );
}