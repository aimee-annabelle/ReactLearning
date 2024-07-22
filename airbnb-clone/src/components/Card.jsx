/* eslint-disable react/prop-types */
// import athlete from "/images/athlete.svg";
export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "sold out";
  } else if (props.location === "Online") {
    badgeText = "online";
  }
  return (
    <div className="w-80 h-fit flex flex-col space-y-2 relative text-xl font-light">
      {badgeText && (
        <div className="absolute top-5 left-3 uppercase p-2 font-normal bg-white rounded-md">
          {badgeText}
        </div>
      )}
      <img src={props.img} alt="athlete" className="w-full" />
      <div className="flex gap-2 align-center text-xl font-light">
        <i className="fa-solid text-red-400 self-center fa-star"></i>
        <p className="align-text-top">
          {props.rating}
          <span className="text-[#918E9B]">
            {" "}
            ({props.reviewCount}) • {props.location}
          </span>
        </p>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="font-semibold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
