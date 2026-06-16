import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0A1F44] to-[#1E3A8A]" />

      {/* Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-cyan-400/20 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-8xl md:text-9xl font-black text-blue-400 drop-shadow-lg">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Lost in Transit
        </h2>

        <p className="mt-4 text-gray-300 text-lg">
          The page you're looking for seems to have taken a wrong route.
          Let's get you back on track.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition shadow-lg shadow-blue-500/30"
          >
            Back to Home
          </Link>

          <Link
            to="/tracking"
            className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Track Package
          </Link>
        </div>
      </div>
    </div>
  );
}