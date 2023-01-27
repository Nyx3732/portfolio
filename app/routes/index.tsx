import Navbar from "~/Components/Navbar";
import Intro from "~/Components/Intro";
import About from "~/Components/About";

export default function Index() {
  return (
    <body>
     <div className="bg-gray-1">
      <Navbar/>
      <Intro/>
      <About/>
     </div>
    </body> 
  );
}
