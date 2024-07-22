import image from "/images/mount-fuji.svg";
export default function Card() {
  return (
    <div className="grid grid-cols-3 items-center gap-10 m-10 h-96">
      <div className="col-span-1">
        <img src={image} alt="card image" className="h-3/4 w-full" />
      </div>
      <div className="col-span-2 flex flex-col gap-8">
        <div className="flex items-center gap-2 text-lg">
          <i className="fa-solid fa-location-dot text-red-500"></i>
          <h6 className="uppercase tracking-widest">Japan</h6>
          <a href="" className="underline text-[#918E9B]" target="blank">
            View On Google Maps
          </a>
        </div>
        <h1 className="text-5xl font-bold">Mount Fuji</h1>
        <h5 className="font-semibold text-lg">12 Jan, 2021 - 24 Jan, 2021</h5>
        <p className="text-lg">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
