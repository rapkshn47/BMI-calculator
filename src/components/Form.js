import React, { useState } from "react";

function Form({ getData }) {
  const [weight, setWeight] = useState(""); //defined state
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);
  const getWeight = (e) => {
    setWeight(e.target.value);
    // console.log(e.target.value);
  };
  const getHeight = (e) => {
    setHeight(e.target.value);
    // console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      setAlert(true);
    } else {
      getData(weight, height);
      setAlert(false);
    }
    // console.log(height);
    // console.log(weight);
  };
  return (
    <div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <h1>BMI Calculator</h1>
          <div className="fields-container">
            <div className="height-container">
              <label htmlFor="height">Height (m)</label>
              <input
                type="text"
                id="height"
                value={height}
                onChange={getHeight}
                required
              />
            </div>
            <div className="weight-container">
              <label htmlFor="weight">Weight (kg)</label>
              <input
                type="text"
                name=""
                id="weight"
                value={weight}
                onChange={getWeight}
                required
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        {alert && <div className="alert-box">Please enter valid Data</div>}
        {/* Above stmt is inline if */}
      </div>
    </div>
  );
}

export default Form;
