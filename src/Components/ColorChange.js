import React, { useState } from "react";
import "./style/colorchange.css";

export default function ColorChange() {
  const [Red, setred] = useState(false);
  const [Orange, setOrange] = useState(false);
  const [Green, setGreen] = useState(false);

  return (
    <div className="maincontainer">
      <ul>
        <li
          style={{
            backgroundColor: Red ? "red" : "bisque",
          }}
        >
          <a href="">Apple</a>
          <button onClick={() => setred(!Red)}>Red</button>
        </li>
        <li
          style={{
            backgroundColor: Orange ? "Orange" : "bisque",
          }}
        >
          <a href="">Orange</a>
          <button onClick={() => setOrange(!Orange)}>Orange</button>{" "}
        </li>
        <li
          style={{
            backgroundColor: Green ? "Green" : "bisque",
          }}
        >
          <a href="">Jackfruit</a>{" "}
          <button onClick={() => setGreen(!Green)}>Green</button>
        </li>
      </ul>
    </div>
  );
}
