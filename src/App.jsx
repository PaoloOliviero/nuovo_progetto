import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ClassImage from "./components/ClassImage";

const App = () => {
  return (
    <div>
      <h1>Ciao</h1>
      <ButtonComponent text="Cliccami" />
      <ClassImage
        src="https://media.istockphoto.com/id/814423752/it/foto/occhio-di-modello-con-make-up-artistico-colorato-primo.jpg?s=612x612&w=0&k=20&c=OFhqyikwC47uoihOoQdQ4hnyVPo3qhyFPWldANTEjzk="
        alt="Immagine"
        width={300}
      />
    </div>
  );
};

export default App;
