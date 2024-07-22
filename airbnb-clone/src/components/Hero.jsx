import heroImg from "/hero-image.svg";
export default function Hero() {
  return (
    <div className="flex flex-col p-20">
      <img src={heroImg} alt="hero image" className="w-3/4 self-center" />
      <div className="px-20 mt-10">
        <h1 className="font-bold text-6xl mb-6">Online Experiences</h1>
        <p className="text-xl lg:w-1/2">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
