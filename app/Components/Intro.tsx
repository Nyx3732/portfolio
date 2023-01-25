import laptop from "img/laptop.png"

export default function Intro() {
    return(
        <div className="flex flex-row justify-evenly">
        <div className="">
        <div >
          <p>Hi,</p>
          <p>I'm Sebastian Glados</p>
          <p>Software and website developer</p>
        </div>
        <div className="flex flex-row gap-3">
            <a href=""><img></img></a>
            <a href=""><img></img></a>
            <p>more about me</p>
        </div>
        </div>
        <div>
            <img src={laptop} className="h-96"></img>
        </div>
        </div>
   
    )
}