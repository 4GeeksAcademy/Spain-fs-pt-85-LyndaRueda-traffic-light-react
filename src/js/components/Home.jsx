import React from "react";
import TrafficLight from "./TrafficLight.jsx"; // Importa el semáforo

function Home() {
  return (
    <div className="home-container">
      <h1>Simulador de Semáforo hecho por Lynda 👩‍💻</h1>
      <TrafficLight /> {/* Muestra el semáforo */}
    </div>
  );
}


export default Home;
