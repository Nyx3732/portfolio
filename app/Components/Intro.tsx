import laptop from "img/laptop.png"
import icon2 from "img/icon2.png"
import icon3 from "img/ICON3.png"

export default function Intro() {
    return(
        <div className="flex flex-row justify-evenly items-center m-20">
        <div className="">
        <div>
          <p className="text-6xl font-bold m-5">Hi, I'm</p>
          <p className="text-6xl font-bold m-5">Sebastian Glados</p>
          <p className="text-3xl text-green-1 m-5">Software and website developer</p>
        </div>
        <div className="flex flex-row gap-3 items-center m-5">
            <a href=""><img src={icon2} className="h-10"></img></a>
            <a href=""><img src={icon3} className="h-10"></img></a>
            <p className="text-2xl">PROJECTS</p>
        </div>
        </div>
        <div>
            <img src={laptop} className="h-96"></img>
        </div>
        </div>
   
    )
}