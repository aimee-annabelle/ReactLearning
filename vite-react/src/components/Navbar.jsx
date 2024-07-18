import logo from "../assets/react-logo.png";

export default function Navbar() {
  return (
    <nav className="navigation">
      <img src={logo} alt="logo" className="logo" />
      <h3 className="heading">ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
