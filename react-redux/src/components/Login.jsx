import { useDispatch } from "react-redux";
import { login,logout } from "../features/user";
function Login() {
  const dispatch = useDispatch();
  function handleClick(){
    dispatch(login({ name: "Annabelle", age: 21, email: "anna@gmail.com"}))
  }
  return (
    <div>
      <button className="px-2 border border-zinc-800" onClick={handleClick}>Login</button>
      <button className="px-2 border border-zinc-800" onClick={()=> dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Login;
