import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;