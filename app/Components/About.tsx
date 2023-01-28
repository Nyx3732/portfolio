import photo from "img/photo.png"

export default function About() {
    return(
        <div className="flex flex-row justify-evenly items-center m-20">
        <img src={photo} className="h-96"></img>
        <div> 
            <div>
                <p className="text-3xl text-green-1 border-b-4">About me</p>
                <p className="text-2xl"> text text text text text text text text text</p>
            </div>
            <div className="flex flex-row gap-6 text-xl">
                <div>
                    <p>skills</p>
                    <ul>
                        <li>text</li>
                        <li>text</li>
                        <li>text</li>
                    </ul>
                </div>
                <div>
                    <p>skills</p>
                    <ul>
                        <li>text</li>
                        <li>text</li>
                        <li>text</li>
                    </ul>
                </div>
                <div>
                    <p>skills</p>
                    <ul>
                        <li>text</li>
                        <li>text</li>
                        <li>text</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}