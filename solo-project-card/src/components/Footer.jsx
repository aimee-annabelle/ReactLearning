import twitter from "/icons/Twitter.svg";
import facebook from "/icons/Facebook.svg";
import instagram from "/icons/Instagram.svg";
import linkedin from "/icons/Linkedin.svg";
import github from "/icons/GitHub.svg";
export default function Footer() {
  return (
    <footer className="gap-6 py-5 flex justify-between h-full">
      <img src={twitter} alt="" />
      <img src={facebook} alt="" />
      <img src={instagram} alt="" />
      <img src={linkedin} alt="" />
      <img src={github} alt="" />
    </footer>
  );
}
