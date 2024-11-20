import React, { useState } from "react";
import "../../styles/index.css";

function TrafficLight() {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  function handleLightClick(selectedColor) {
    setColor(selectedColor);
  }

  function toggleColor() {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  }

  function addPurpleLight() {
    if (!colors.includes("purple")) {
      setColors(colors.concat("purple"));
    }
  }

  return (
    <div id="trafficTop">
      <div id="container">
        {colors.map(function (currentColor) {
          return (
            <div
              key={currentColor}
              className={`light ${currentColor} ${
                color === currentColor ? "selected" : ""
              }`}
              onClick={function () {
                handleLightClick(currentColor);
              }}
            ></div>
          );
        })}
      </div>
      <button onClick={toggleColor}>Cambiar color 🤪 </button>
      <button onClick={addPurpleLight}>Añadir color púrpura 😈 </button>
    </div>
  );
}

export default TrafficLight;
