// src/pages/PlanetSelect.jsx
import Planet from "../components/Planet.jsx";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/PlanetStack.css";

export default function PlanetSelect() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();
    const planets = ["nessus", "moon", "earth", "neptune", "europe"];

    function handlePlanetClick(planetName) {
        navigate(`/planet/${planetName}`);
    }

    return (
        <div className="blurred-background-wrapper">
            <div className="background-layer" />
            <div className="content-layer">
                <Header />

                <div className="main">
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
                </div>

                <p className="tagline">The stars are waiting. Choose a planet.</p>
            </div>
        </div>
    );
}
