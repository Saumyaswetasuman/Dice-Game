import React from "react";
import "./NumberSelector.css";
const NumberSelector = ({SelectedNumber, SetSelectedNumber,error,setError}) => {
  const arrayNum = [1, 2, 3, 4, 5, 6];
  
 const numberSelectorHandler=(value)=>{
  SetSelectedNumber(value);
  setError("")
 }

  return (
    <div className="NumberSelectorContainer">
    <p style={{color:"red"}}>{error}</p>
    <div className="flex">
      {arrayNum.map((value, i) => (
        <div
          className="box"
          style={{
            backgroundColor: value === SelectedNumber ? "black" : "",
            color: value === SelectedNumber ? "white" : " ",
          }}
          key={i}
          onClick={() => numberSelectorHandler(value)}
        >
          {value}
        </div>
      ))}
    </div>
    <p>Select Number</p>
    </div>
  );
};

export default NumberSelector;
