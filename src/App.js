import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");
  const [showBmi, setShowBmi] = useState(false);

  let calcbmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      setMsg("Enter Valid Details !!");
    } else {
      let bmi = weight / (height / 100) ** 2; // in kg and cm
      setBmi(bmi.toFixed());

      if (bmi < 18.5) {
        setMsg("You are Underweight.");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMsg("You are Normal and Healthy");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setMsg("You are Overweight");
      } else {
        setMsg("You are Obese.");
      }

      setShowBmi(true);
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <center>
          <h1>BMI Calculator</h1>
        </center>
        <br></br>
        <br></br>

        <form onSubmit={calcbmi}>
          <div>
            <label>Weight </label>
            <input
              type="text"
              placeholder="Weight (kgs)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
          </div>

          <div>
            <label>Height</label>
            <input
              type="text"
              placeholder="Height (cms)"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            ></input>
          </div>

          <br></br>

          <div>
            <button className="btn" type="submit">
              Check
            </button>
            <button className="btn btn-outline" type="button" onClick={reload}>
              Reload
            </button>
          </div>

          {showBmi && (
            <div className="msg-box">
              <h3>Your BMI is : {bmi}</h3>
              <p>{msg}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
