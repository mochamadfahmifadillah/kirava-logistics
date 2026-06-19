import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Tracking() {
  const [id, setId] = useState("");

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* Navbar */}
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0A1F44] to-[#1E3A8A]" />

      {/* Glow Effect */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-400/20 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">
              Track Your Shipment
            </h1>

            <p className="text-gray-300 mt-3">
              Enter your tracking number to get real-time delivery updates.
            </p>
          </div>

          {/* Input */}
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Enter tracking ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            <Button>
              Track Package
            </Button>
          </div>

          {/* Result Card */}
          <div className="mt-8 border border-white/10 rounded-2xl p-5 bg-white/5">

            <div className="flex justify-between items-center">
              <span className="text-gray-400">Tracking ID</span>
              <span className="font-semibold">KRV-123456</span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span>Status</span>
                <span className="text-green-400 font-semibold">
                  In Transit
                </span>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full mt-3">
                <div className="h-2 w-3/4 bg-blue-500 rounded-full"></div>
              </div>

              <p className="text-gray-400 text-sm mt-3">
                Package is currently on the way to destination.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}