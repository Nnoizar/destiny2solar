export default function Planet({ planetName, index, total }) {
    const offset = 200;
    const x = (index - (total - 1) / 2) * offset;
    const y = Math.abs(index - (total - 1) / 2) * 10;

    return (
        <div
            className="planet"
            style={{
                transform: `translate(${x}px, ${y}px)`,
                zIndex: 100 - index,
            }}
        >
            <img src={`./img/planets/${planetName}.png`} alt={planetName} />
        </div>
    );
}