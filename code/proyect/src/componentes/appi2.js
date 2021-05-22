import { useState } from "react"



const Json2 = () =>{
    const [focus, datosFocus] = useState

 function datos2(){
     fetch("http://api.mediastack.com/v1/news?access_key=49a840cf6d0c43b8fbc0849043c93bd3&categories=health,-sports")
     .then(responda => responda.json())
     .then(focus => datosFocus(focus))
     .catch(err => console.log(err))
 }}