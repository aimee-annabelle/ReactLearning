import { useState, useEffect } from "react";
export default function Meme() {
  useEffect(function () {
    console.log("use effect ran");
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);
  const [allMemeImages, setAllMemeImages] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3i7p.jpg",
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setMeme((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const getImage = () => {
    const randomImage =
      allMemeImages[Math.floor(Math.random() * allMemeImages.length)];
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomImage.url,
    }));
  };
  return (
    <div className="p-5 flex flex-col justify-center">
      <div className="p-5 gap-5 grid grid-cols-2 grid-rows-2">
        <div>
          <label htmlFor="topText">Top Text</label>
          <input
            id="topText"
            type="text"
            placeholder="Top Text"
            className="w-full p-3 rounded-lg border indent-3"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bottomText">Bottom text</label>
          <input
            id="bottomText"
            type="text"
            placeholder="Bottom Text"
            className="w-full p-3 rounded-lg border indent-3"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full p-3 rounded-lg text-white font-bold text-lg col-span-2 border bg-customGradient"
          onClick={getImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      {meme && (
        <div className="relative p-5 text-white font-black text-5xl text-center">
          <img src={meme.randomImage} className=" w-full h-full" />
          <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-center">
            {meme.topText}
          </h2>
          <h2 className="absolute bottom-10 left-1/2 -translate-x-1/2 uppercase shadow-2xl shadow-black text-center">
            {meme.bottomText}
          </h2>
        </div>
      )}
    </div>
  );
}
