import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      
      <Navbar />

      {/* 🔵 BACKGROUND BASE */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0A1F44] to-[#1E3A8A] z-0" />

      {/* 💡 GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] top-[-100px] left-[-100px] z-0" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] bottom-[-100px] right-[-100px] z-0" />

      {/* ✨ GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] z-0" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-between px-10 pt-40">
        
        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">
            Delivering Trust <br /> Across Every Mile
          </h1>

          <p className="text-gray-300 mt-5">
            Fast, reliable, and secure logistics solutions for your business.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 px-6 py-3 rounded-lg shadow-lg shadow-blue-500/30">
              Get Started
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10">
              Track Package
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <img
          src="/assets/images/truck.png"
          alt="truck"
          className="w-[520px] relative z-10"
        />
      </div>
    </div>
  );
}