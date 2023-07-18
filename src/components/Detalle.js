import React from "react";
import { Link } from "react-router-dom";

function Detalle() {
  const handleRedirectToFacebook = () => {
    window.location.href = "https://www.facebook.com";
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
  };

  return (
    <div>
      <h2>Página en construcción</h2>
      {/* Contenido del detalle */}
      <button onClick={handleRedirectToFacebook}>Facebook</button>
      <button onClick={handleLogout}>Salir</button>
      <Link to="/home">
        <button>Volver a Home</button>
      </Link>
    </div>
  );
}

export default Detalle;
