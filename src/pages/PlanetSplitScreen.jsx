import { useParams, useNavigate } from "react-router-dom";
import planets from "../data/planets.json";
import "../styles/SplitScreen.css";

export default function PlanetSplitScreen() {
    const { planetId } = useParams();
    const planet = planets.find(p => p.id === planetId);
    const navigate = useNavigate();

    return (
        <div className="split-screen">
            <h1>DESTINY 2 SOLAR INDEX</h1>
            <div className="choices">
                <div className="choice" onClick={() => navigate(`/planet/${planetId}/gameplay`)}>
                    <img src="/img/gameplay-bg.jpg" />
                    <h2>GAMEPLAY</h2>
                </div>
                <div className="choice" onClick={() => navigate(`/planet/${planetId}/lore`)}>
                    <img src="/img/lore-bg.jpg" />
                    <h2>LORE</h2>
                </div>
            </div>
        </div>
    );
}
