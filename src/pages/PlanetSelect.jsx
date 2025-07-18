// src/pages/PlanetSelect.jsx
import Planet from "../components/Planet.jsx";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/PlanetStack.css";
import "../styles/App.css";

export default function PlanetSelect() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();
    const planets = ["nessus", "moon", "earth", "neptune", "europa"];

    function handlePlanetClick(planetName) {
        navigate(`/planet/${planetName}`);
    }

    return (
        <div className="blurred-background-wrapper">
            <div
                className="background-layer"
                style={{
                    backgroundImage: `url('${import.meta.env.BASE_URL}img/planets/starscape.png')`,
                }}
            />
            <div className="content-layer">

                <main className="main-content">
                    <h1 className="headline">
                        “Every world has a history. Where will you begin?”
                    </h1>

                    <div className="planet-stack">
                        {planets.map((planet, i) => (
                            <Planet
                                key={planet}
                                planetName={planet}
                                index={i}
                                total={planets.length}
                                isHovered={hoveredIndex === i}
                                onHover={() => setHoveredIndex(i)}
                                onLeave={() => setHoveredIndex(null)}
                                onClick={() => handlePlanetClick(planet)}
                            />
                        ))}
                    </div>

                    {/* ✅ Positioned clearly below planet stack */}
                    <p className="tagline">The stars are waiting. Choose a planet.</p>
                </main>
            </div>
        </div>
    );
}
