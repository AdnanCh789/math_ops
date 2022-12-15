import React from "react";

function Divider() {
  const divVal = 21;
  const newVal = window.state;
  return (
    <div>
      <h1>Division</h1>
      {`${divVal} / ${newVal} = ${divVal / newVal}`}
    </div>
  );
}

export default Divider;
