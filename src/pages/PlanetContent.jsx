import { useParams } from "react-router-dom";
import planets from "../data/planets.json";

export default function PlanetContent() {
    const { planetId, category } = useParams();
    const planet = planets.find(p => p.id === planetId);

    const entries = planet.sections.filter(sec => sec.category === category);

    return (
        <main className="main-content">
            <div className="planet-content">
                <h1>{planet.name.toUpperCase()} — {category.toUpperCase()}</h1>
                {entries.map((entry, idx) => (
                    <div key={idx} className="content-section">
                        <h2>{entry.title}</h2>
                        <img src={entry.image} alt={entry.title} />
                        <p>{entry.content}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
