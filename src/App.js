import React, { useState } from 'react'
import StartGame from './component/StartGame'
import GamePlay from './component/GamePlay';

function App() {
 const[isGamwStarted,setIsGameStarted]=useState(false);
 const toggleGamePlay=()=>{
  setIsGameStarted((prev)=>!prev);
 }
  return (
    <div>
    {isGamwStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>}
    
    </div>
  )
}

export default App