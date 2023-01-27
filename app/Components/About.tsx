import photo from "img/photo.png"

export default function About() {
    return(
        <div className="flex flex-row bg">
        <img src={photo} className="h-96"></img>
        <div> 
            <div>
                <p>About me</p>
                <p> text text text text text text text text text</p>
            </div>
            <div className="flex flex-row gap-6">
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