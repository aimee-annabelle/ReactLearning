import Login from "./components/Login";
import Profile from "./components/Profile";
import ThemeColor from "./components/ThemeColor";

function App() {
  return (
    <div className="flex flex-col items-center gap-y-5 justify-start">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Profile />
      <Login />
      <ThemeColor />
    </div>
  );
}

export default App;
