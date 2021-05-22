import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import './index.css';

const Json = () => {
  const [datosapi, setDatosapi] = useState( [] )

          function getDatosapi() {
            fetch('http://api.mediastack.com/v1/news?access_key=49a840cf6d0c43b8fbc0849043c93bd3')
              .then(response => response.json())
              .then(datos => setDatosapi(datos))
              .then(datos => console.log(datos))
          }
          useEffect(() => {
            getDatosapi()
          }, [])

                return (
                      <table>
                      <thead>
                        <tr>
                          <th>Pais</th>
                          <th>Lenguaje</th>
                          <th>Fuente</th>
                          <th>Categoria</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>  {datosapi.data? datosapi.data.map((dato, index) => {
                                        return(<ol key={index}>{dato.country}</ol>)}):null}</td>
                          <td>{datosapi.data? datosapi.data.map((dato, index) => {
                                        return(<ol key={index}>{dato.language}</ol>)}):null}</td>
                          <td>{datosapi.data? datosapi.data.map((dato, index) => {
                                        return(<ol key={index}>{dato.source}</ol>)}):null}</td>
                          <td>{datosapi.data? datosapi.data.map((dato, index) => {
                                        return(<ol key={index}>{dato.category}</ol>)}):null}</td>
                        </tr>
                        </tbody>
                    </table>

                        )
          }

const Cabezera = () => <header>Bienvenidos</header>
const App = () =>
<>
<Cabezera/>
<Json/>
</>
ReactDOM.render(<App/>, document.getElementById('root'));