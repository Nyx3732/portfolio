import photo from "img/photo.png"

export default function About() {
    return(
        <div className="flex flex-row justify-evenly items-center m-20">
        <img src={photo} className="h-96"></img>
        <div> 
            <div className="my-10">
                <p className="text-4xl text-green-1 font-bold my-5">About me</p>
                <p className="text-xl"> text text text text text text text text text</p>
            </div>
            <div className="my-10">
            <p className="text-2xl font-bold">Skills</p>    
            </div>
        </div>
        </div>
    )
}
