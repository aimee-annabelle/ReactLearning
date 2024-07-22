import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data.js";

function App() {
  const cards = data.map((card, idx) => {
    return (
      <>
        <Card key={card.id} {...card} />
        {(idx !== data.length - 1) && <hr className="mx-10 border rounded-full" />}
      </>
    );
  });
  return (
    <div className="container lg:px-80">
      <div className="w-full h-full border border-gray-200 bg-white">
        <Navbar />
        {cards}
      </div>
    </div>
  );
}

export default App;
