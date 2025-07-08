

import Planet from "./Planet.jsx"
import Header from "./Header.jsx"
import './App.css'
export default function App() {

  const planets = ['nessus', 'moon', 'earth', 'neptune', 'europe'];
  return (
    <>

      <div className="blurred-background-wrapper">
        <div className="background-layer" />
        <div className="content-layer">


          <Header />


          <div className="main">
            <h1>“Every world has a history. Where will you begin?”</h1>
            <div className="planet-stack">
              {planets.map((planet, i) => (
                <Planet key={planet} planetName={planet} index={i} total={planets.length} />
              ))}
            </div>
          </div>


          <p style={{
            fontFamily: '"Orbitron", sans-serif', margin: `40px`
          }}>
            The stars are waiting. Choose a planet.
          </p>
        </div>
      </div >



    </>
  )
}


