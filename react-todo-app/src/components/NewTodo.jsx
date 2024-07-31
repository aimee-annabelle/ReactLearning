/* eslint-disable react/prop-types */
export default function NewTodo(props){
    return(
        <div className="flex border-2 rounded-full px-7 py-3 w-1/3 justify-between">
            <input type="text" placeholder="Add todo..." name={props.name} value={props.value} onChange={props.onChange} className="focus:outline-none"/>
            <button onClick={props.onSubmit}><i className="fa-solid fa-plus"></i></button>
        </div>
    )
}