import React from 'react'

function BmiIndex({bmiNo, bmiName, changeWeight}) {
  console.log(changeWeight);
  return (
    <div className="bmi-container">
      <p>Your BMI score</p>
      <div className="score-container">
        <p className="score">{bmiNo}</p>
      </div>
      <h3 className="type">{bmiName}</h3>
      {changeWeight.type ==="positive" && (
        <h3 className="suggestion">
        "You need to lose <strong>{changeWeight.weight+" kg"}</strong>"
      </h3>
      )}
      {changeWeight.type ==="negative" && (
        <h3 className="suggestion">
        "You need to gain <strong>{changeWeight.weight+" kg"}</strong>"
      </h3>
      )}  
      {changeWeight.type ==="normal" && (
        <h3 className="suggestion">
        "Way to go.. You've the normal BMI"
      </h3>
      )}
    </div>
  )
}

export default BmiIndex