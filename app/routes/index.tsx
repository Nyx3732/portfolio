import Navbar from "~/Components/Navbar";
import Intro from "~/Components/Intro";
import About from "~/Components/About";

export default function Index() {
  return (
     <div className="bg-gradient-to-b from-green-2 to-gray-1 min-h-screen p-0 m-0 text-white">
      <Navbar/>
      <Intro/>
      <About/>
     </div>
  );
}
