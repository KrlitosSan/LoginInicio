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

  async function Registar() {
    const peticion = await fetch(
      "https://loginexpress-production-df9f.up.railway.app/registro?usuario=" +
        usuarioRegistro +
        "&clave=" +
        claveRegistro,
      {
        credentials: "include",
      }
    );
    if (peticion.ok) {
      alert("Usuario registrado");
      recargarAhora();
    } else {
      alert("Usuario no registrado");
    }
  }

  useEffect(() => {}, []);

  return (
    <>
      <h1>Registro</h1>
      <input
        placeholder="Usuario"
        type="text"
        name="usuario"
        id="usuario"
        value={usuarioRegistro}
        onChange={cambiarUsuarioRegistro}
      />
      <input
        placeholder="Clave"
        type="password"
        name="clave"
        id="clave"
        value={claveRegistro}
        onChange={cambiarClaveRegistro}
      />
      <button onClick={Registar}>Registrar</button>
    </>
  );
}

export default Registro;
