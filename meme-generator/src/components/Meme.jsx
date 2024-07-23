import { useState } from "react";
import memeImages from "../memeData.js";
export default function Meme() {
  const [memeImage, setMemeImage] = useState("");
  const getImage = () => {
    const memeArray = memeImages.data.memes;
    const randomImage = memeArray[Math.floor(Math.random() * memeArray.length)];
    setMemeImage(randomImage.url);
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
          />
        </div>
        <div>
          <label htmlFor="bottomText">Bottom text</label>
          <input
            id="bottomText"
            type="text"
            placeholder="Bottom Text"
            className="w-full p-3 rounded-lg border indent-3"
          />
        </div>
        <button
          className="w-full p-3 rounded-lg text-white font-bold text-lg col-span-2 border bg-customGradient"
          onClick={getImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      {memeImage && <img src={memeImage} className="p-5 w-auto h-auto" />}
    </div>
  );
}
