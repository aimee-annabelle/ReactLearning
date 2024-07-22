import logo from '../../public/logo.svg'
export default function Navbar() {
  return (
    <div className="w-full bg-customGradient h-20 flex items-center justify-between px-10 text-white">
      <div className='flex gap-2'>
      <img src={logo} alt="" />
      <h1 className="font-bold text-xl">Meme Generator</h1>
      </div>
      
      <p>React Course - Project 3</p>
    </div>
  );
}
