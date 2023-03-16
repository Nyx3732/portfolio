import Tool from "~/Components/Tool";
export default function(props:any){
    const toolArray = [];
    for(let i = 0; i<props.tools.length; i++){
        toolArray[i] = <Tool ToolName={props.tools[i]} key={i}/>
    }
    return(
        <div className="flex flex-row gap-20 m-20">
          <img src={props.image} alt="" className="h-96"/>
          <div> 
              <div className="my-6">
                  <p className="text-3xl text-green-1 my-2">{props.projectName}</p>
                  <p className="text-xl">{props.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl flex flex-row gap-1">My role: 
                    <div className="text-green-1">{props.role}</div>
                </div>
                <p className="text-xl">Tools:</p>    
                <div className="flex flex-row gap-2">{toolArray}</div>
                <div className="flex flex-row gap-2">
                    <div className="bg-gradient-to-bl from-green-2 to-green-1 w-max rounded-full p-1">{props.website}</div>
                    <div className="bg-gradient-to-bl from-green-2 to-green-1 w-max rounded-full p-1">{props.git}</div>
                </div>
              </div>
          </div>
        </div>
    );
}
