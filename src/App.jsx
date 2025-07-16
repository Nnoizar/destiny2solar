import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetSelect from "./pages/PlanetSelect";
import PlanetSplitScreen from "./pages/PlanetSplitScreen";
import PlanetContent from "./pages/PlanetContent";

export default function App() {
  return (
    <BrowserRouter basename="/destiny2solar">
      <Routes>
        <Route path="/" element={<PlanetSelect />} />
        <Route path="/planet/:planetId" element={<PlanetSplitScreen />} />
        <Route path="/planet/:planetId/:category" element={<PlanetContent />} />
      </Routes>
    </BrowserRouter>
  );
}
