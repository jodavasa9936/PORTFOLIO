import { useState } from "react";
import { NavBar } from "./NavBar.jsx";
import { About } from "./me/About.jsx";
import { Work } from "./me/Work.jsx";
import { Contact } from "./me/Contact.jsx";
import "./App.css";

function App() {
  const [option, setOption] = useState('About');

  return (
    <div>
      <NavBar setOption={setOption} />
      {option == "About" ? <About /> : null }
      {option == "Work" ? <Work /> : null}
      {option == "Contact" ? <Contact /> : null}
    </div>
  );
}

export default App;

/* import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("inicio");

  const handleInicioClick = () => {
    setPage("inicio");
  };

  const handleContactoClick = () => {
    setPage("contacto");
  };

  const handleTrabajosClick = () => {
    setPage("trabajos");
  };

  return (
    <div>
      {page === "inicio" && (
        <div>
          <h1>Página de Inicio</h1>
          <p>Texto de la página de Inicio</p>
        </div>
      )}
      {page === "contacto" && (
        <div>
          <h1>Página de Contacto</h1>
          <p>Texto de la página de Contacto</p>
        </div>
      )}
      {page === "trabajos" && (
        <div>
          <h1>Página de Trabajos</h1>
          <p>Texto de la página de Trabajos</p>
        </div>
      )}
      <button onClick={handleInicioClick}>Inicio</button>
      <button onClick={handleContactoClick}>Contacto</button>
      <button onClick={handleTrabajosClick}>Trabajos</button>
    </div>
  );
}

export default App; */
