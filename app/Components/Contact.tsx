import icon2 from "img/icon2.png"

export default function Contact() {
    return(
        <div className=" bg-gray-1 flex flex-col gap-3">
         
        <p className="text-xl text-green-1">Say hello</p>
        <div className="flex flex-row gap-3 items-center">
            <img src={icon2} className="h-7"/>
            <p className="text-l">LinkedIn</p>
        </div>
        <div className="flex flex-row gap-3 items-center">
            <img src={icon2} className="h-7"/>
            <p className="text-l">sebastian.glados.7@gmail.com</p>
        </div>
        
        

        </div>
    )
}