import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Conversor from "./Conversor";
import { use } from "react";

function App() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [logueado, setLogueado] = useState(false);

  function cambiarUsuario(e) {
    setUsuario(e.target.value);
  }

  function cambiarClave(e) {
    setClave(e.target.value);
  }

  async function ingresar() {
    const peticion = await fetch(
      "http://localhost:3000/login?usuario=" + usuario + "&clave=" + clave, {
        credentials: "include",
        method: "GET",
      }
    );
    if (peticion.ok) {
      setLogueado(true);
    } else {
      alert("Usuario o clave incorrectos");
    }
  }

  async function validar() {
    const peticion = await fetch(
      "http://localhost:3000/validar", { credentials: "include", });
    if (peticion.ok) {
      setLogueado(true);
    } 
  }

  useEffect(() => {
    validar();
  }, []);

  if (logueado) {
    return (
      <>
        <Conversor />
      </>
    );
  }

  return (
    <>
      <h1>Inicio de Sesion</h1>
      <input
        placeholder="Usuario"
        type="usuario"
        name="clave"
        id="usuario"
        value={usuario}
        onChange={cambiarUsuario}
      />
      <input
        placeholder="Clave"
        type="password"
        name="clave"
        id="clave"
        value={clave}
        onChange={cambiarClave}
      />
      <button onClick={ingresar}>Ingresar</button>
    </>
  );
}

export default App;
