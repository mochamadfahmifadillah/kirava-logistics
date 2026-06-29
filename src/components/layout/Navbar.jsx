import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-transparent absolute w-full z-50">
      <Link
        to="/"
        className="text-white text-xl font-bold hover:text-gray-300 transition"
      >
        Kirava
      </Link>

      <div className="flex gap-8 text-gray-300">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tracking">Tracking</Link>
        <Link to="/services">Services</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}