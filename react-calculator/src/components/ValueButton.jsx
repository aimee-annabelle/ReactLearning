/* eslint-disable react/prop-types */
export default function ValueButton(props) {
  return (
    <button
      className={`border border-gray-300 px-5 py-3 text-2xl font-semibold ${
        props.value === "0" ? "col-span-2" : "col-span-1"
      } ${props.isYellow ? "bg-orange-300 text-white" : "bg-gray-100 text-gray-900"}`}
      onClick={() => props.onClick(props.id)}
    >
      {props.value}
    </button>
  );
}
