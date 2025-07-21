// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetSelect from "./pages/PlanetSelect";
import PlanetSplitScreen from "./pages/PlanetSplitScreen";
import PlanetContent from "./pages/PlanetContent";
import Header from "./components/Header"; // ✅ Import your header
import "./styles/App.css"; // ✅ GLOBAL STYLES

export default function App() {
  return (
    <BrowserRouter basename="/destiny2solar">
      <div className="app-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<PlanetSelect />} />
          <Route path="/planet/:planetId" element={<PlanetSplitScreen />} />
          <Route path="/planet/:planetId/:category" element={<PlanetContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}