import Tool from "~/Components/Tool";
export default function(props:any){
    const toolArray = [];
    for(let i = 0; i<props.tools.length; i++){
        toolArray[i] = <Tool ToolName={props.tools[i]} key={i}/>
    }
    return(
        <div>
            {toolArray}
        </div>
    );
}