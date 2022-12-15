import React from "react";

function Subtraction() {
  const subVal = 4;
  const newVal = window.state;

  return (
    <div>
      <h1>Subtraction</h1>
      {`${subVal} - ${newVal} = ${subVal - newVal}`}
    </div>
  );
}

export default Subtraction;
