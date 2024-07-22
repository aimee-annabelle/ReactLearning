export default function Meme(){
    return(
        <div>
            <form action=""className="p-5 gap-5 grid grid-cols-2 grid-rows-2">
                <input type="text" placeholder="Top Text" className="w-full p-3 rounded-lg border indent-3"/>
                <input type="text" placeholder="Bottom Text" className="w-full p-3 rounded-lg border indent-3"/>
                <button type="submit" className="w-full p-3 rounded-lg text-white font-bold text-lg col-span-2 border bg-customGradient">Get a new meme image 🖼</button>
            </form>
        </div>
    )
}