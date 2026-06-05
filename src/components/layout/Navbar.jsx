import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-transparent absolute w-full z-50">
      <h1 className="text-white text-xl font-bold">Kirava</h1>

      <div className="flex gap-8 text-gray-300">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tracking">Tracking</Link>
        <Link to="/service">Service</Link>
        <Link to="/testimoni">Testimoni</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button className="bg-blue-600 px-4 py-2 rounded-lg text-white">
        Get Started
      </button>
    </nav>
  );
}