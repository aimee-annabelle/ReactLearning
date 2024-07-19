import image from "/images/profile.png";
import About from "./About";
import Footer from "./Footer";
export default function Card() {
  return (
    <div className="w-2/5 h-[100vh] py-11 px-28 bg-zinc-800 flex justify-center">
    <div className="h-full w-9/12 bg-[#1a1b21] rounded-xl text-white text-center">
      <img
        src={image}
        alt=""
        className="w-full h-72 rounded-t-xl object-cover "
      />
      <div className="px-9 flex flex-col gap-2 my-5">
        <h1 className="font-bold text-2xl">Laura Smith</h1>
        <p className="text-xs text-[#F3BF99]">Frontend Developer </p>
        <p className="text-[10px]">laurasmith.website</p>
        <button className="w-full h-9 text-center rounded-md bg-white text-gray-700 font-medium text-sm">
          Email
        </button>
      </div>
      <About />
      <div className="bg-neutral-900 w-full rounded-b-xl px-8">
        <Footer />
      </div>
    </div>
    </div>
  );
}
