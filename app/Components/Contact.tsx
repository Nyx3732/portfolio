import icon2 from "img/icon2.png"

export default function Contact() {
    return(
        <div className="px-40 py-10 pb-20 bg-gray-1 flex flex-col gap-6">
         
        <p className=" text-2xl text-green-1">Say hello</p>
        <div className="flex flex-row gap-3 items-center">
            <img src={icon2} className="h-7"/>
            <p className="text-xl">LinkedIn</p>
        </div>
        <div className="flex flex-row gap-3 items-center">
            <img src={icon2} className="h-7"/>
            <p className="text-xl">sebastian.glados.7@gmail.com</p>
        </div>
        
        

        </div>
    )
}