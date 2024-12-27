import { useEffect, useState } from "react";
import "./App.css";
import Conversor from "./Conversor";
import Usuarios from "./Usuarios";
import Registro from "./Registro";

function App() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [logueado, setLogueado] = useState(false);
  const [recargar, setRecargar] = useState(false);

  function cambiarUsuario(e) {
    setUsuario(e.target.value);
  }

  function cambiarClave(e) {
    setClave(e.target.value);
  }

  function recargarAhora() {
    setRecargar(!recargar);
  }    

  async function ingresar() {
    const peticion = await fetch(
      "https://loginexpress-production-df9f.up.railway.app/login?usuario=" + usuario + "&clave=" + clave,
      {
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
    const peticion = await fetch("https://loginexpress-production-df9f.up.railway.app/validar", {
      credentials: "include",
    });
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
        <>
          <Registro recargarAhora={recargarAhora} />
          <Conversor />
          <Usuarios recargar={recargar} />
        </>
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
