import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div className="bg-[#0A1F44] min-h-screen text-white relative overflow-hidden">
      
      <Navbar />

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-3xl top-[-100px] left-[-100px]" />

      {/* Content */}
      <div className="flex items-center justify-between px-10 pt-40">

        {/* Left */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">
            Delivering Trust <br /> Across Every Mile
          </h1>

          <p className="text-gray-300 mt-5">
            Fast, reliable, and secure logistics solutions for your business.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 px-6 py-3 rounded-lg">
              Get Started
            </button>

            <button className="border border-gray-500 px-6 py-3 rounded-lg">
              Track Package
            </button>
          </div>
        </div>

        {/* Right (Truck Image) */}
        <img
          src="/assets/images/truck.png"
          alt="truck"
          className="w-[500px]"
        />
      </div>
    </div>
  );
}