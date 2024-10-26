import { useState } from 'react'
import './App.css'

function App() {

  let[counter,setCounter]=useState(0);
      const addValue=()=>{
        if(counter==20){
          setCounter(counter);
        }
        else{
          setCounter(counter+1);
        }        
      }
      const removeValue=()=>{
        if(counter==0){
          setCounter(counter);
        }
        else{
        setCounter(counter-1);
        }
      }
  return (
    <>
      <h2>Counter ={counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br/>
      
    </>
  )
}

export default App
