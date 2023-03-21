import React from "react";
import MenuItem from "./MenuItem";

interface NavbarProps {
  sectionRefs: React.RefObject<HTMLElement>[];
}

const Navbar: React.FC<NavbarProps> = ({ sectionRefs }) => {
  return (
    <div className="flex pt-4 px-20 flex-row justify-between">
      <p className="text-white">Sebastian Glados</p>
      <div className="flex flex-row gap-6">
        <div className="cursor-pointer"
          onClick={() => {
            sectionRefs[1].current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <MenuItem text="About me" />
        </div>
        <div className="cursor-pointer"
          onClick={() => {
            sectionRefs[2].current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <MenuItem text="Portfolio" />
        </div>
        <div className="cursor-pointer"
          onClick={() => {
            sectionRefs[3].current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <MenuItem text="Contact me" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
