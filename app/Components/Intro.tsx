import laptop from "img/laptop.png"

export default function Intro() {
    return(
        <div className="flex flex-row justify-evenly items-center m-20">
        <div className="">
        <div>
          <p className="text-5xl">Hi,</p>
          <p className="text-5xl text-green-1 border-b-4">I'm Sebastian Glados</p>
          <p className="text-3xl opacity-70">Software and website developer</p>
        </div>
        <div className="flex flex-row gap-3">
            <a href=""><img></img></a>
            <a href=""><img></img></a>
            <p className="text-xl">more about me</p>
        </div>
        </div>
        <div>
            <img src={laptop} className="h-96"></img>
        </div>
        </div>
   
    )
}