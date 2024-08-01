/* eslint-disable react/prop-types */
export default function Output(props) {
  return (
    <div className="w-full bg-gray-500 flex justify-end items-center px-5 col-span-4 text-white font-medium text-4xl">
      <p>{props.value}</p>
    </div>
  );
}
