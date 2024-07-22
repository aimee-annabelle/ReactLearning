import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data.js";

function App() {
  const cards = data.map((el) => {
    return (
      <Card
        key={el.id}
        img={el.image}
        rating={el.rating}
        reviewCount={el.stats.reviewCount}
        location={el.location}
        title={el.title}
        price={el.price}
        openSpots={el.openSpots}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="mx-40 mb-10 flex gap-20">{cards}</div>
    </>
  );
}

export default App;
