import { useEffect, useState } from "react";
import "./App.css";

function Registro({ recargarAhora }) {
  const [usuarioRegistro, setUsuarioRegistro] = useState("");
  const [claveRegistro, setClaveRegistro] = useState("");

  function cambiarUsuarioRegistro(e) {
    setUsuarioRegistro(e.target.value);
  }
  function cambiarClaveRegistro(e) {
    setClaveRegistro(e.target.value);
  }

  async function registrar() {
    const peticion = await fetch(
      "http://localhost:3000/registro?usuario=" +
        usuarioRegistro +
        "&clave=" +
        claveRegistro,
      { credentials: "include" }
    );
    if (peticion.ok) {
      alert("Usuario registrado");
      recargarAhora();
    } else {
      alert("No se pudo registrar el usuario");
    }
  }

  useEffect(() => {}, []);

  return (
    <>
      <h1>Registro</h1>
      <input
        type="text"
        name="usuario"
        id="usuario"
        placeholder="Usuario"
        value={usuarioRegistro}
        onChange={cambiarUsuarioRegistro}
      />
      <input
        type="password"
        name="clave"
        id="clave"
        placeholder="Clave"
        value={claveRegistro}
        onChange={cambiarClaveRegistro}
      />
      <button onClick={registrar}>Registrar</button>
      {claveRegistro}
    </>
  );
}

export default Registro;
