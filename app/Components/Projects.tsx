import React, { useState,useRef,useEffect } from 'react';
import icon2 from 'img/icon2.png';
import { myFunction } from '~/Components/Show';
import Project from '~/Components/Project';
import AI from "img/AI.png";
import KermitMockup from "img/KermitMockup.png";
import MTOP from "img/MTOP.png"


const toolsArray = ['Tool 1', 'Tool 2'];
const toolsArray2 = ['rzecz', 'rzecz'];
const toolsArray3 = ['rzecz 1', 'rzecz 2'];

const description1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';
const description2 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';
const description3 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

export default function Projects() {
  const [displayedProject, setDisplayedProject] = useState<number | null>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);

  const hideProject = () => {
    setDisplayedProject(null);
  };

  const scrollToProject = (projectRef: React.RefObject<HTMLElement>) => {
    setTimeout(() => {
      if (projectRef.current) {
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  useEffect(() => {
    if (displayedProject === 1) {
      scrollToProject(project1Ref);
    } else if (displayedProject === 2) {
      scrollToProject(project2Ref);
    } else if (displayedProject === 3) {
      scrollToProject(project3Ref);
    }
  }, [displayedProject]);

  return (
    <div className="my-20">
        <div className="flex justify-center">
            <p className="text-3xl text-green-1 font-bold mb-12">My projects</p>
        </div>
      
      <div className="flex flex-row justify-center gap-8">
        <a
          onClick={() => {
            if (displayedProject === 1) {
              setDisplayedProject(null);
            } else {
              setDisplayedProject(1);
            }
          }}
          className="cursor-pointer group inline-block relative"
        >
           <img src={AI} className="rounded-md h-96" />
          <div className="hidden group-hover:flex group-hover:text-green-1 text-2xl font-bold rounded-md bg-black/60 absolute top-0 left-0 w-full h-full items-center justify-center">
             Project 1
          </div>
        </a>

        <a
          onClick={() => {
            if (displayedProject === 2) {
              setDisplayedProject(null);
            } else {
              setDisplayedProject(2);
            }
          }}
          className="cursor-pointer group inline-block relative"
        >
          <img src={MTOP} className="rounded-md h-96" />
          <div className="hidden group-hover:flex group-hover:text-green-1 text-2xl font-bold rounded-md bg-black/60 absolute top-0 left-0 w-full h-full items-center justify-center">
             Project 2
          </div>
        </a>

        <a
          onClick={() => {
            if (displayedProject === 3) {
              setDisplayedProject(null);
            } else {
              setDisplayedProject(3);
            }
          }}
          className="cursor-pointer group inline-block relative"
          >
          <img src={KermitMockup} className="rounded-md h-96" />
          <div className="hidden group-hover:flex group-hover:text-green-1 text-2xl font-bold rounded-md bg-black/60 absolute top-0 left-0 w-full h-full items-center justify-center">
             Project 3
          </div>
        </a>
      </div>
      <div className="flex flex-row gap-20 justify-center my-16">
        {displayedProject === 1 && (
          <Project onHide={hideProject} tools={toolsArray} image={AI} projectName="Name" description={description1} role="role 1" id="project1" ref={project1Ref} key="1" />
        )}
        {displayedProject === 2 && (
          <Project onHide={hideProject} tools={toolsArray2} image={MTOP} projectName="Name2" description={description2} role="role 2" id="project2" ref={project2Ref} key="2" />
        )}
        {displayedProject === 3 && (
          <Project onHide={hideProject} tools={toolsArray3} image={KermitMockup} projectName="Name3" description={description3} role="role 3" id="project3" ref={project3Ref} key="3" />
        )}
      </div>
    </div>
    );
}

