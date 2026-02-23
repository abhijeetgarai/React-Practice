import {useState} from "react";

export default function Counter(){
    let [count,setCount]=useState(0);

    function click(){
        setCount(count+1);
        console.log(count);
    }
    return(
        <>
        <button onClick={click}>Click me</button>
        <h3>Counter:{count}</h3>
        </>
    )

}
