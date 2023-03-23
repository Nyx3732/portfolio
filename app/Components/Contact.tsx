import icon2 from "img/icon2.png"
import git from "img/git.png"
import email from "img/email.png"
import linkedin from "img/linkedin.png"

export default function Contact() {
    return(
        <div className="px-40 py-10 pb-20 bg-gray-1 flex flex-row gap-40 items-center">
        <div className="flex flex-col">
            <p>CONTACT ME</p>
            <p className="text-8xl text-green-1">GET IN</p>
            <p className="text-8xl text-green-1">TOUCH</p>
        </div>    

        <div className="flex flex-col gap-7 border-2 rounded-md p-20">
            <div className="cursor-pointer flex flex-row gap-2 items-center">
                <img src={email} className="h-10"/>
                <a className="text-xl" href="mailto:sebastian.glados.7@gmail.com">sebastian.glados.7@gmail.com</a>
            </div>
            <a href="https://www.linkedin.com/in/sebastian-glados/" className="cursor-pointer flex flex-row gap-2 items-center">
                <img src={linkedin} className="h-10"/>
                <p className="text-xl">LinkedIn</p>
            </a>
        </div>
        </div>
    )
}