import React, { useState } from "react";
import Subtraction from "./Subtraction";
import Multiplier from "./Multiplier";
import Divider from "./Divider";

function Counter(props) {
  const [count, setCount] = useState(7);

  window.state = count;

  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>+ Button</button>
      <button onClick={() => setCount(count - 1)}>- Button</button>
      <div>
        <Subtraction />
      </div>
      <div>
        <Multiplier />
      </div>
      <div>
        <Divider />
      </div>
    </div>
  );
}

export default Counter;
