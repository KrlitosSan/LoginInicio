import { useEffect, useState } from "react";
import "./App.css";

function Usuarios({ recargar }) {
  const [usuarios, setUsuarios] = useState([]);

  async function obtenerUsuarios() {
    const peticion = await fetch(
      "https://loginexpress-production-df9f.up.railway.app/usuarios",
      {
        credentials: "include",
      }
    );
    if (peticion.ok) {
      const respuesta = await peticion.json();
      setUsuarios(respuesta);
    }
  }

  async function eliminarUsuario(id) {
    const peticion = await fetch(
      "https://loginexpress-production-df9f.up.railway.app/usuarios?id=" + id,
      {
        credentials: "include",
        method: "DELETE",
      }
    );
    if (peticion.ok) {
      alert("Usuario eliminado");
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
            <th>Id</th>
            <th>Usuario</th>
            <th>Clave</th>
            <th>Opcion</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <th>{usuario.Id}</th>
              <th>{usuario.usuario}</th>
              <th>{usuario.clave}</th>
              <th>
                <button
                  onClick={() => {
                    eliminarUsuario(usuario.Id);
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
