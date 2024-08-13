import { useSelector } from "react-redux";
export default function Profile() {
  const user = useSelector((state) => state.user.value);
  const fontColor = useSelector((state) => state.theme.value);
  console.log(fontColor)
  return (
    <div className={`py-2 text-${fontColor}-200`} style={{color:fontColor }}>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  );
}
