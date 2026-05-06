import { useState } from "react";
import { getTracking } from "../features/tracking/trackingAPI";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Tracking() {
  const [id, setId] = useState("");

  return (
    <div className="min-h-screen bg-[#0A1F44] text-white flex flex-col items-center justify-center">
      
      <h1 className="text-3xl mb-6">Track Your Shipment</h1>

      <div className="flex gap-3">
        <Input
          placeholder="Enter tracking ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <Button>Track</Button>
      </div>
    </div>
  );
}