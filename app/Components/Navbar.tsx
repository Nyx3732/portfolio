export default function Navbar() {
    return(
        <div className="flex p-3 flex-row justify-between">
        <p>Sebastian Glados</p>
        <div className="flex flex-row gap-3 font-opensans" >
            <p>About me</p>
            <p>Portfolio</p>
            <p>Contact me</p>
        </div>
        </div>
    )
}