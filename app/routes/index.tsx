import Navbar from "~/Components/Navbar";
import Intro from "~/Components/Intro";
import About from "~/Components/About";

export default function Index() {
  return (
    <body className="bg-gray-1">
    <div className="bg-gradient-to-bl from-green-1/25 via-black/25 to-green-1/25 min-h-screen p-0 m-0 text-white">
      <Navbar/>
      <Intro/>
      <About/>
    </div>
    </body>
  
  );
}
