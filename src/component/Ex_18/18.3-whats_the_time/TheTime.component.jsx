import React, { useState } from 'react';

const TheTime = ({ items }) => {
  const [time, setTime] = useState(null);

  const onInputChange = (event) => {
    if (event.target.name === "seconds") {
      setTime(event.target.value)
    }
    else if (event.target.name === "minutes") {
      setTime(event.target.value * 60)
    }
    else if (event.target.name === "hours") {
      setTime(event.target.value * 3600)
    }
  }


  return (
    <div>
      <label style={{ fontWeight:"bold",margin: "3px" }}
      >Seconds:
      <input
          type="number"
          name="seconds"
          value={time / 1}
          onChange={onInputChange}
          style={{ width: "100px", padding: "10px", margin: "10px" }}
        />
      </label>
      <label style={{ fontWeight:"bold",margin: "3px" }}>
        Minutes:
        <input
          type="number"
          name="minutes"
          value={time / 60}
          onChange={onInputChange}
          style={{ width: "100px", padding: "10px", margin: "10px" }}
        />
      </label>
      <label style={{ fontWeight:"bold",margin: "3px" }}>
        Hours:
        <input
          type="number"
          name="hours"
          value={time / 3600}
          onChange={onInputChange}
          style={{ width: "100px", padding: "10px", margin: "10px" }}
        />
      </label>
    </div>
  )
}
export default TheTime;