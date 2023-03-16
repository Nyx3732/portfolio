export default function Skill(props: any){
    return(
        <div className="bg-gradient-to-bl from-green-2 to-green-1 w-max rounded-full p-1">
            <div className="flex flex-col justify-between h-full bg-gray-1 text-white rounded-full py-1 px-3 hover:bg-transparent">
                <p>{props.SkillName}</p>
            </div>
        </div>
    );
}