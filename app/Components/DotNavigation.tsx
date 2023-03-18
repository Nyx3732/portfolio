import React, { useState, useEffect } from "react";

interface DotNavigationProps {
  sectionRefs: React.RefObject<HTMLElement>[];
}

const DotNavigation: React.FC<DotNavigationProps> = ({ sectionRefs }) => {
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    const windowHeight = window.innerHeight;
  
    sectionRefs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const sectionTop = rect.top + yOffset;
        const sectionBottom = rect.bottom + yOffset;
  
        // Check if the Contact section is fully visible
        if (index === sectionRefs.length - 1 && sectionBottom <= windowHeight) {
          setActiveSection(index);
        }
        // Check if other sections' middle points are within the viewport
        else if (
          yOffset + rect.height / 2 >= sectionTop &&
          yOffset + rect.height / 2 <= sectionBottom
        ) {
          setActiveSection(index);
        }
      }
    });
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mx-7 fixed right-4 top-1/2 z-50 transform -translate-y-1/2">
    <ul className="flex flex-col">
        {sectionRefs.map((_, index) => (
          <li key={index}>
            <button
              onClick={() => sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" })}
              className={`w-5 h-5 rounded-full border border-white mb-7 focus:outline-none ${
                activeSection === index ? "bg-white" : "bg-transparent"
              }`}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DotNavigation;
