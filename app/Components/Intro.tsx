import laptop from "img/laptop.png"
import icon2 from "img/icon2.png"
import icon3 from "img/ICON3.png"

export default function Intro() {
    return(
        <div className="flex flex-row justify-evenly items-center m-20">
        <div className="">
        <div>
          <p className="text-5xl font-archivo">Hi,</p>
          <p className="text-5xl text-green-1 border-b-4 font-archivo">I'm Sebastian Glados</p>
          <p className="text-3xl opacity-70">Software and website developer</p>
        </div>
        <div className="flex flex-row gap-3 items-center">
            <a href=""><img src={icon2} className="h-10"></img></a>
            <a href=""><img src={icon3} className="h-10"></img></a>
            <p className="text-xl">more about me</p>
        </div>
        </div>
        <div>
            <img src={laptop} className="h-96"></img>
        </div>
        </div>
   
    )
}