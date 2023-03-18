import React, { useRef } from "react";
import Navbar from "~/Components/Navbar";
import Intro from "~/Components/Intro";
import About from "~/Components/About";
import Projects from "~/Components/Projects";
import Contact from "~/Components/Contact";
import Skill from "~/Components/Skill";
import Project from "~/Components/Project";
import { myFunction } from "~/Components/Show";
import DotNavigation from "~/Components/DotNavigation";

export default function Index() {
  const introRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs: React.RefObject<HTMLElement>[] = [
    introRef,
    aboutRef,
    projectsRef,
    contactRef,
  ];

  return (
    <body className="bg-gray-1">
      <div className="bg-gradient-to-bl from-green-1/20 via-black/20 to-green-1/20 min-h-screen p-0 m-0 text-white">
        <Navbar sectionRefs={sectionRefs} />
        <DotNavigation sectionRefs={sectionRefs} />
        <div ref={introRef}>
          <Intro />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </body>
  );
}
