export default function Planet({ planetName }) {


    return (
        <>
            <div className="planet">
                <img src={`./img/planets/${planetName}.png`} alt="dude" />
            </div>
        </>
    )
}