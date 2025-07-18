import { useParams, useNavigate } from "react-router-dom";

import "../styles/SplitScreen.css";

export default function PlanetSplitScreen() {
    const { planetId } = useParams();
    const navigate = useNavigate();

    const gameplayImg = `${import.meta.env.BASE_URL}/img/${planetId}/gameplay/gameplay.jpg`;
    const loreImg = `${import.meta.env.BASE_URL}/img/${planetId}/lore/lore.jpg`;

    return (
        <div className="split-screen">

            <div className="choices">
                <div
                    className="choice"
                    onClick={() => navigate(`/planet/${planetId}/gameplay`)}
                >
                    <img src={gameplayImg} alt="Gameplay" />
                    <h2>GAMEPLAY</h2>
                </div>
                <div
                    className="choice"
                    onClick={() => navigate(`/planet/${planetId}/lore`)}
                >
                    <img src={loreImg} alt="Lore" />
                    <h2>LORE</h2>
                </div>
            </div>
        </div>
    );
}
