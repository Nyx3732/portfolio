import MenuItem from './MenuItem';

export default function Navbar() {
  return (
    <div className="flex pt-4 px-20 flex-row justify-between">
      <p className="text-white">Sebastian Glados</p>
      <div className="flex flex-row gap-6 ">
        <MenuItem text="About me" />
        <MenuItem text="Portfolio" />
        <MenuItem text="Contact me" />
      </div>
    </div>
  );
}
