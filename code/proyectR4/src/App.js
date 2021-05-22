import './App.css';
import { useState, useEffect } from "react"


const Json1 = () =>{
    const [health, setHealth] = useState([])

 function datos1(){
     fetch("http://api.mediastack.com/v1/news?access_key=49a840cf6d0c43b8fbc0849043c93bd3&categories=health,-sports")
     .then(responda => responda.json)
     .then(healths => setHealth(healths))
     .catch(err => console.log(err))}
     useEffect(() => {
      datos1()
    }, [])
     return(
        <ul>
        <li>{health.pagination.limit}</li>
       </ul>
    )}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Json1/>
      </header>
    </div>
  );
}

export default App;
