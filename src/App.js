import React from "react"
import Init from "./Init"
import Game from "./Game"
import "./assets/css/reset.css"
import "./assets/css/style.css"

export default function App(){
    const [start, setStart] = React.useState(true)
    return(
       <div className="container">
           {start ? <Init  setStart={setStart} /> : <Game />}
       </div>
        
    );
}