import logo from "/airbnb-logo.svg";
export default function Navbar() {
  return (
    <nav className="w-full h-28 flex px-40 py-6 shadow-lg sticky">
      <img src={logo} alt="logo" className=""  />
    </nav>
  );
}

