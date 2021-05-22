import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import './index.css';

const Json = () => {
  const [datosapi, setDatosapi] = useState( [] )

  function getDatosapi() {
    fetch('http://api.weatherstack.com/current?access_key=cbdaf3fb01e925c7b82cac53e2ec0d4f&query=New%20York')
      .then(response => response.json())
      .then(datos => setDatosapi(datos))
      .then(datos => console.log(datos))
  }
  useEffect(() => {
    getDatosapi()
  }, [])
  return (
    <table>
            <caption><b>Tabla R5</b></caption>
            <thead>
                <tr>
                    <th>{datosapi.request?datosapi.request.type:null}</th>
                    <th>Country</th>
                    <th>Region</th>
                    <th>Temperatura</th>     
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{datosapi.location?datosapi.location.name:null}</td>
                    <td>{datosapi.location?datosapi.location.country:null}</td>
                    <td>{datosapi.location?datosapi.location.region:null}</td>
                    <td>{datosapi.location?datosapi.current.temperature+"°C":null}</td>     
                </tr>
            </tbody>
        </table>
    

  )
}

const Cabezera = () => <header>Bienvenidos</header>
const App = () =>
<>
<Cabezera></Cabezera>
<Json/>
</>
ReactDOM.render(<App/>, document.getElementById('root'));