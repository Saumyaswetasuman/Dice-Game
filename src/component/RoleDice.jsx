import React from 'react'

const RoleDice = ({currentDice,roleDice}) => {

  
  return (
    <div  style={{display:"flex", marginTop:"48px", flexDirection:"column" ,alignItems:"center"}}>

    <div style={{cursor:"pointer"}} onClick={roleDice}>
      <img src={`/images/dice/dice_${currentDice}.png`} alt='dice 1'/>
    </div>
      <p style={{}}>Click on Dice to roll</p>
    </div>
  )
}

export default RoleDice
