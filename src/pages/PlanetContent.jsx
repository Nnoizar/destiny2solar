// src/pages/PlanetContent.jsx
import { useParams } from "react-router-dom";
import planets from "../data/planets.json";
import "../styles/PlanetContent.css";

export default function PlanetContent() {
    const { planetId, category } = useParams();
    const planet = planets.find(p => p.id === planetId);

    if (!planet) {
        return <p>Planet not found.</p>;
    }

    const entries = planet.sections.filter(sec => sec.category === category);

    return (
        <div className="planet-content">
            <h1>{planet.name.toUpperCase()} — {category.toUpperCase()}</h1>

            {entries.map((entry, idx) => (
                <div key={idx} className="content-section">
                    <h2>{entry.title}</h2>
                    <div className="separator" />
                    <img src={`${import.meta.env.BASE_URL}${entry.image}`} alt={entry.title} />
                    <p>{entry.content}</p>
                </div>
            ))}

        </div>
    );
}
