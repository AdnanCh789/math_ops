import React from "react";

function Multiplier() {
  const mulVal = -5;
  const newVal = window.state;
  return (
    <div>
      <h1>Multiplication</h1>
      {`${mulVal} * ${newVal} = ${mulVal * newVal}`}
    </div>
  );
}

export default Multiplier;
