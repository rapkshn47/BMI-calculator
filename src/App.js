import { useState } from "react";
import "./App.css";
import BmiIndex from "./components/BmiIndex";
import BmiList from "./components/BmiList";
import Form from "./components/Form";

function App() {
  const [bmi, setBmi] = useState("00");
  const [bmiType, setBmiType] = useState("Not Calculated");
  const [changeWeight, setchangeWeight] = useState({weight:"", type:""});
  const [bmiRange, setbmiRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });
  const onFormSubmit = (w, h) => {
    let b = callBMI(w, h);
    setBmi(b);
    // setBmi(callBMI(w,h));or use this insead of above
    // let bType = weightType(b); or just use
    // setBmiType(bType);
    setBmiType(weightType(bmi));
    console.log(w, h);

    const range = {
      underWeight: { low: callWeight(18.5,h) },
      normal: { low: callWeight(18.5,h), high: callWeight(24.9,h) },
      overWeight: { low: callWeight(25,h), high: callWeight(24.9,h) },
      obesityOne: { low: callWeight(30,h), high: callWeight(34.9,h) },
      obesityTwo: { low: callWeight(35,h), high: callWeight(39.9,h) },
      obesityThree: { high: callWeight(40,h) },
    };
    setbmiRange(range);
    setchangeWeight(weightChange(b, w, range))
  };

  const callBMI = (w, h) => {
    return (w / (h * h)).toFixed(2);
  };

  // or we can write simply as:
  // const callBMI = (w,h) => (w/(h * h)).toFixed(2);
  // This is used when only one stmt is returned.

  const callWeight = (b, h) => (b * h * h).toFixed(2);

  const weightType = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    else if (18.5 < bmi && bmi < 24.9) return "Normal";
    else if (24.9 < bmi && bmi < 29.9) return "Overweight";
    else if (29.9 < bmi && bmi < 34.9) return "Obesity Class";
    else if (34.9 < bmi && bmi < 39.9) return "Obesity Class I";
    else if (bmi > 39.9) return "Obesity Class II";
    else return "Obesity Class III";
  };

  const weightChange = (b, w, range) => {
    let changeObj;
    if(b> 24.9){
      changeObj  = {
        weight : (w - range.normal.high).toFixed(2),
        type : "positive"
      }
      return changeObj;
    }
    else if(b < 18.5){
      changeObj = {
        weight: (range.normal.low - w).toFixed(2),
        type : "negative"
      }
      return changeObj;
    }
    else{
      changeObj = { weight: 0, type: "normal"};
      return changeObj;
    }
  }
  

  return (
    <>
      <div className="container">
        {/* <h2>Get ideal BMI of Maddy</h2> */}
        <div>
          <Form getData={onFormSubmit} />
        </div>
        <div className="two">
          <BmiIndex bmiNo={bmi} bmiName={bmiType} changeWeight = {changeWeight}/>
          <BmiList range={bmiRange} bmi={bmi} />
        </div>
      </div>
    </>
  );
}

export default App;
