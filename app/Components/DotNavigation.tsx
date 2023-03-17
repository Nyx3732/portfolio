import React, { useState, useEffect } from "react";

interface DotNavigationProps {
  sectionRefs: React.RefObject<HTMLElement>[];
}

const DotNavigation: React.FC<DotNavigationProps> = ({ sectionRefs }) => {
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;

    sectionRefs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (yOffset + rect.height / 2 >= rect.top + yOffset && yOffset + rect.height / 2 <= rect.bottom + yOffset) {
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
    <div className="fixed right-0 top-1/2 z-50">
      <ul className="flex flex-col">
        {sectionRefs.map((_, index) => (
          <li key={index}>
            <button
              onClick={() => sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" })}
              className={`w-5 h-5 rounded-full border border-white mb-2 focus:outline-none ${
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
