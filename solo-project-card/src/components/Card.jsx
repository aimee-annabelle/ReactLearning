import image from "../../public/images/profile.png";
export default function Card() {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="intro">
        <h1>Laura Smith</h1>
        <p>Frontend Developer </p>
        <p>laurasmith.website</p>
        <button>Email</button>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3>Interests</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
