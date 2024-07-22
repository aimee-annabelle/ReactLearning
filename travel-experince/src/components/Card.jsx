/* eslint-disable react/prop-types */
export default function Card(props) {
  console.log(props);
  return (
    <div className="grid grid-cols-3 items-center gap-10 m-10 h-96">
      <div className="col-span-1">
        <img
          src={props.imageUrl}
          alt="card image"
          className="h-3/4 w-full object-cover"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-8">
        <div className="flex items-center gap-2 text-lg">
          <i className="fa-solid fa-location-dot text-red-500"></i>
          <h6 className="uppercase tracking-widest">{props.location}</h6>
          <a
            href={props.googleMapsUrl}
            className="underline text-[#918E9B]"
            target="blank"
          >
            View On Google Maps
          </a>
        </div>
        <h1 className="text-5xl font-bold">{props.title}</h1>
        <h5 className="font-semibold text-lg">
          {props.startDate} - {props.endDate}
        </h5>
        <p className="text-lg">{props.description}</p>
      </div>
    </div>
  );
}
