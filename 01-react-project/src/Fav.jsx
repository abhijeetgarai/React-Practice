import { useState } from 'react'
import './App.css'

function Fav() {

    let[color,setColor]=useState("Red");
      const Red=()=>{
        setColor("Red");
      }
      const Blue=()=>{
        setColor("Blue");
      }
      const Green=()=>{
        setColor("Green");
      }
      return(
          <>
          <h1>My favourite Color is {color} !</h1>
          <button onClick={Red}>Red</button>
          <button onClick={Blue}>Blue</button>
          <button onClick={Green}>Green</button>
          </>
      )
  }
  
  export default Fav
  