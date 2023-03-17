

import React, { forwardRef, Ref } from 'react';
import icon2 from "img/icon2.png";
import Tool from "~/Components/Tool";
import { myFunction, hideMyDiv } from "~/Components/Show";

interface ProjectProps {
  tools: string[];
  image: string;
  projectName: string;
  description: string;
  id: string;
  role?: string;
  website?: string;
  git?: string;
}

const Project = forwardRef<HTMLDivElement, ProjectProps>((props, ref) => {
  const toolArray = [];
  for (let i = 0; i < props.tools.length; i++) {
    toolArray[i] = <Tool ToolName={props.tools[i]} key={i} />;
  }
  return(
    <div className="flex flex-row gap-20 m-20" id={props.id} ref={ref}>
      <img src={props.image} alt="" className="h-96"/>
      <div> 
          <div className="my-6">
            <div className="flex flex-row gap-5">
            <p className="text-3xl text-green-1 my-2">{props.projectName}</p>    
            <button onClick={hideMyDiv} className="border-2 rounded-full px-3 h-10 font-bold">↑</button>
            </div>
              <p className="text-xl">{props.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl flex flex-row gap-1">My role: 
                <div className="text-green-1">{props.role}</div>
            </div>
            <p className="text-xl">Tools:</p>    
            <div className="flex flex-row gap-2">{toolArray}</div>
            <div className="flex flex-row gap-2">
                <a href={props.website}><img src={icon2} className="h-10"/></a>
                <a href={props.git}><img src={icon2} className="h-10"/></a>
            </div>
          </div>
      </div>
    </div>
);
});

export default Project;
