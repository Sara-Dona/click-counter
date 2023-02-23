import React from "react";
import "../stylesheet/Contador.css";

function Contador ({ numClic }) {
  return (
  <button className= "contador-clic">{numClic}</button>
  )
};

export default Contador;