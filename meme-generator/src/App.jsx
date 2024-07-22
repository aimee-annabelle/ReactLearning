import "./App.css";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex items-center w-screen h-full justify-center">
      <div className="mt-20 self-center just w-1/2 h-full bg-white">
      <Navbar />
      <Meme/>
      </div>
      
    </div>
  );
}

export default App;
