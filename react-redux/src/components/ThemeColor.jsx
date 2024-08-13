import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeTheme } from "../features/themeColor"

function ThemeColor() {
    const [theme,setTheme] = useState()
    const dispatch = useDispatch()
  return (
    <div>
        <input type="text" className="border border-zinc-800 rounded-l-xl px-5"  onChange={(event) => setTheme(event.target.value)}/>
        <button className="px-2 border border-zinc-800" onClick={() => dispatch(changeTheme(theme))}>Change color</button>
    </div>
  )
}

export default ThemeColor