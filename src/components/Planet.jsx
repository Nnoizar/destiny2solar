export default function Planet({
    planetName,
    index,
    total,
    isHovered,
    onHover,
    onLeave,
    onClick, // ✅ receive click handler
}) {
    const offset = 200;
    const x = (index - (total - 1) / 2) * offset;
    const y = Math.abs(index - (total - 1) / 2) * 10;

    return (
        <div
            className="planet"
            style={{
                left: "50%",
                top: 0,
                position: "absolute",
                transform: `translate(calc(${x}px - 50%), ${y}px)`,
                zIndex: isHovered ? 999 : 100 - index,
                pointerEvents: "auto", // ✅ ensure it's clickable
            }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick} // ✅ attach it here
        >
            <div className="planet-wrapper">
                <img
                    className="planet-image"
                    src={`${import.meta.env.BASE_URL}img/planets/${planetName}.png`}
                    alt={planetName}
                />
                <div className="planet-name">{planetName}</div>
            </div>
        </div>
    );
}
