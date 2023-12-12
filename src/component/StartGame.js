import React from 'react'
import "./StartGame.css"
const StartGame=({toggle})=> {
  return (
    <div className='container'>
    <div><img src='./images/dices .png'/>
    </div>
        
        <div className='content'>
            <h1>DICE GAME</h1>
            <button onClick={toggle}>play now</button>
        </div>
    </div>
  )
}

export default StartGame