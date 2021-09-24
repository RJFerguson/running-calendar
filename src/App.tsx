import { Routes, Route } from "solid-app-router";

import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

function App() {
  return (
    <>
      <Routes>
        <Route path="/saved" element={<Saved />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
