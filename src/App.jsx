
import reactLogo from './assets/react.svg'
import Planet from "./Planet.jsx"

import './App.css'
export default function App() {


  return (
    <>

      <div className="blurred-background-wrapper">
        <div className="background-layer" />
        <div className="content-layer">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>



          <Planet planetName='nessus' />
          <Planet planetName='moon' />
          <Planet planetName='earth' />
          <Planet planetName='neptune' />
          <Planet planetName='europe' />


          <h1>Hello, Traveler</h1>
          <p>The stars are waiting.</p>
        </div>
      </div>



    </>
  )
}


