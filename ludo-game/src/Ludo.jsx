import {useState} from "react";
export default function Ludo(){
    let[moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0})
    function updateBlue(){
        moves.blue+=1;
        setMoves({...moves});
    }
    function updateRed(){
        moves.red+=1;
        setMoves({...moves});
    }
    function updateGreen(){
        moves.green+=1;
        setMoves({...moves});
    }
    function updateYellow(){
        moves.yellow+=1;
        setMoves({...moves});
    }
    return(
        <>
        <h1><i></i>LUDO GAME</h1>
        <div style={{border:"solid 2px white" ,padding:"30px", margin:"10px" ,borderRadius:"20px"}}>
        <h2>Let the play begins!</h2>
        <div>
            <p>Blue Color : {moves.blue}</p>
            <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
            <p>Red Color : {moves.red}</p>
            <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
            <p>Green Color : {moves.green}</p>
            <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
            <p>Yellow Color : {moves.yellow}</p>
            <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>
        </div>
        </div>
        </>
    )
}