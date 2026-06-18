import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0A1F44] to-[#1E3A8A]" />

      {/* GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-400/20 blur-[120px]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* CONTENT */}
      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-12">
        
        {/* LEFT */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Delivering Trust <br />
            Across Every Mile
          </h1>

          <p className="text-gray-300 mt-5 text-lg">
            Fast, reliable, and secure logistics solutions for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
  <Link
    to="/tracking"
    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg shadow-blue-500/30 transition text-center"
  >
    Get Started
  </Link>

  <Link
    to="/tracking"
    className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition text-center"
  >
    Track Package
  </Link>
</div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src="/assets/images/truck.png"
            alt="truck"
            className="w-full max-w-[600px] drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]"
          />
        </div>
      </div>
    </div>
  );
}