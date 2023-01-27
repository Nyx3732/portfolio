export default function Navbar() {
    return(
        <div className="flex pt-4 px-20 flex-row justify-between">
        <p className="text-white">Sebastian Glados</p>
        <div className="flex flex-row gap-3 font-opensans" >
            <p>About me</p>
            <p>Portfolio</p>
            <p>Contact me</p>
        </div>
        </div>
    )
}