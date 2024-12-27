import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Conversor() {
  const [textoAVoz, setTextoAVoz] = useState("");
  const [vozATexto, setVozATexto] = useState("");

  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value);
  }
  function convertirTextoAVoz() {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(textoAVoz);
    synth.speak(utterThis);
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "es-ES";
    recognition.start();
    recognition.onresult = function (event) {
      setVozATexto(event.results[0][0].transcript);
    };
  }
  return (
    <>
      <h1>Conversor TTS y STT </h1>
      <br />
      <h3>Conversor Texto a Voz</h3>
      <input
        type="text"
        id="texto a voz"
        value={textoAVoz}
        onChange={cambiarTexto}
      />
      <button onClick={convertirTextoAVoz}>Convertir</button> <br />
      <h3>Conversor Voz a Texto</h3>
      <button onClick={grabarVozATexto}>Grabar</button>
      {vozATexto}
    </>
  );
}

export default Conversor;
