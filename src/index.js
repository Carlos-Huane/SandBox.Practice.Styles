//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";
let hour = new Date().getHours();
let saludo, estilo;
if (hour < 12) {
  saludo = "Good Morning";
  estilo = {
    color: "red"
  };
} else if (hour < 18) {
  saludo = "Good Afternoon";
  estilo = {
    color: "green"
  };
} else {
  saludo = "Good evening";
  estilo = {
    color: "blue"
  };
}
ReactDom.render(
  <h1 className="heading" style={estilo}>
    {saludo}{" "}
  </h1>,
  document.getElementById("root")
);
