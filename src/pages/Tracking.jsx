import { useState } from "react";
import { getTracking } from "../features/tracking/trackingAPI";

export default function Tracking() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const handleTrack = async () => {
    const result = await getTracking(id);
    setData(result);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Tracking</h1>

      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter tracking ID"
      />

      <button onClick={handleTrack}>Track</button>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}