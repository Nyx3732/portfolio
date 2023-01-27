import Navbar from "~/Components/Navbar";
import Intro from "~/Components/Intro";
import About from "~/Components/About";

export default function Index() {
  return (
     <div className="bg-gradient-to-b from-green-1 to-gray-1 min-h-screen p-0 m-0">
      <Navbar/>
      <Intro/>
      <About/>
     </div>
  );
}
