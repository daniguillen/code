import { useState } from "react"


const Json1 = () =>{
    const [health, setHealth] = useState([])
}
 function datos1(){
     fetch("http://api.mediastack.com/v1/news?access_key=49a840cf6d0c43b8fbc0849043c93bd3&categories=health,-sports")
     .then(responda => responda.json)
     .then(health => setHealth(health))
     .catch(err => console.log(err))}
     useEffect(() => {
        datos1()
      }, [])
    return(
        <ul>
        <li> {health.data}</li>
       </ul>
    )