import React, { useState,useRef,useEffect } from 'react';
import icon2 from 'img/icon2.png';
import { myFunction } from '~/Components/Show';
import Project from '~/Components/Project';
import AI from "img/AI.png";
import KermitMockup from "img/KermitMockup.png";
import MTOP from "img/MTOP.png"


const toolsArray = ['Remix JS', 'Tailwind CSS', 'MySQL'];
const toolsArray2 = ['Dune SQL'];
const toolsArray3 = ['React', 'Web3.js'];

const description1 =
  `A.I. Gallery is an AI-generated art marketplace that allows users
   to browse and purchase unique pieces of digital art. The platform features a
    user-friendly interface that enables easy searching and filtering of the art catalog,
     as well as the ability to customize frame sizes. The project was built using Remix JS
      and styled using Tailwind CSS, which allowed for efficient and streamlined development.
       With A.I. Gallery, users can easily discover and acquire one-of-a-kind pieces of digital
        art to add to their collections.`;
const description2 =
  `This project is a flexible SQL script written in Dune SQL that pulls data
   from the blockchain to calculate the transaction volume and number of transactions 
   within MtopSwap. The script assigns a score to each user based on their contribution
   to the total volume and transaction count, and identifies the top three users who have 
   made the greatest contributions to the platform within the provided time frame. 
   `;
const description3 =
  `KermitToken is a staking platform that enables users to stake their tokens and earn rewards.
   The platform is built with React and Web3.js, 
   providing a seamless and user-friendly experience for staking and managing tokens.
    Users can stake their tokens for a set period and earn rewards based on the amount 
    staked and the staking period. The platform's smart contract automatically calculates 
    and distributes rewards to users.`;

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
            <p className="text-3xl text-green-1 font-bold mb-12">Projects</p>
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
             A.I Gallery Marketplace
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
             MtopSwap Leaderboards
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
             KermitToken DeFi
          </div>
        </a>
      </div>
      <div className="flex flex-row gap-20 justify-center my-16">
        {displayedProject === 1 && (
          <Project onHide={hideProject} tools={toolsArray} image={AI} projectName="A.I Gallery" description={description1} role="Full stack development" id="project1" ref={project1Ref} git="https://github.com/Raikyudev/AIGallery" key="1" />
        )}
        {displayedProject === 2 && (
          <Project onHide={hideProject} tools={toolsArray2} image={MTOP} projectName="MtopSwap Leaderboard Contest" description={description2} role="Backend" id="project2" ref={project2Ref} website="https://dune.com/alexander88/mtopswap-user-leaderboards" key="2" />
        )}
        {displayedProject === 3 && (
          <Project onHide={hideProject} tools={toolsArray3} image={KermitMockup} projectName="KermitToken" description={description3} role="Frontend" id="project3" ref={project3Ref} key="3" />
        )}
      </div>
    </div>
    );
}

