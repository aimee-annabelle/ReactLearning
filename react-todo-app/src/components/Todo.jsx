/* eslint-disable react/prop-types */
export default function Todo(props){
    return(
        <div className="flex justify-between w-1/3 items-center border-b pb-5 px-2">
            <div className=" flex gap-5">
            <input type="checkbox" checked={props.completed} onChange={() => props.toggleCompleted(props.id)}/>
            <span className={props.completed ? "line-through" : "text-zinc-900"}>{props.task}</span>
            </div>
            <button className="text-red-400" onClick={() => props.handleDelete(props.id)}><i className="fa-solid fa-trash"></i></button>
        </div>
    )
}