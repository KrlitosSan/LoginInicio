import { useEffect, useState } from "react";
import "./App.css";

function Usuarios({ recargar }) {
  const [usuarios, setUsuarios] = useState([]);

  async function obtenerUsuarios() {
    const peticion = await fetch("http://localhost:3000/usuarios", {
      credentials: "include",
    });
    if (peticion.ok) {
      const respuesta = await peticion.json();
      setUsuarios(respuesta);
    }
  }

  async function eliminarUsuarios(id) {
    const peticion = await fetch("http://localhost:3000/usuarios?id=" + id, {
      credentials: "include",
      method: "DELETE",
    });
    if (peticion.ok) {
      obtenerUsuarios();
    }
  }

  useEffect(() => {
    obtenerUsuarios();
  }, [recargar]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Usuario</th>
            <th>Clave</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <th>{usuario.id}</th>
              <th>{usuario.usuario}</th>
              <th>{usuario.clave}</th>
              <th>
                <button
                  onClick={() => {
                    eliminarUsuarios(usuario.id);
                  }}
                >
                  X
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Usuarios;
