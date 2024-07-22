import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container px-80 h-screen">
      <div className="w-full h-full border border-gray-200 bg-white">
        <Navbar />
        <Card />
      </div>
    </div>
  );
}

export default App;
