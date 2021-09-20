import type { Component, lazy } from "solid-js";
import { Router, Routes, Route, Link } from "solid-app-router";

import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
