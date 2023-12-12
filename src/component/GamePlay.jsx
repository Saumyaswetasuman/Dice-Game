import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Rule from "./Rule";

function GamePlay() {
  const [score, setscore] = useState(0);
  const [SelectedNumber, SetSelectedNumber] = useState();
  const [currentDice, setCurrrentDice] = useState(1);
  const [error, setError] = useState();
  const[showrules,setShowRules]=useState()

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!SelectedNumber) {
      setError("you have not selected any number");
      return;
    }
    setError(" ");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrrentDice((prev) => randomNumber);

    if (SelectedNumber === randomNumber) {
      setscore((prev) => prev + randomNumber);
    } else {
      setscore((prev) => prev - 2);
    }
    SetSelectedNumber(undefined);
  };
  const resetScore=()=>{
    setscore(0);
  }

  return (
    <div>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "end",
          paddingTop: "30px",
        }}>

        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          SelectedNumber={SelectedNumber}
          SetSelectedNumber={SetSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div style={{display:"flex",flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      gap:"10px"}}>
        <button onClick={resetScore}> Reset</button>
        <button onClick={()=>setShowRules((prev)=>!prev)}>{
          showrules ? "hide ":"show "
        } Rules</button>
      </div>

      {showrules && <Rule/>}
    </div>
  );
}

export default GamePlay;
