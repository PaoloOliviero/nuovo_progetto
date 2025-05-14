import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ClassImage from "./components/ClassImage";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome.jsx";
//import AllTheBooks from "./components/AllTheBooks.jsx";
import SingleBook from "./components/SingleBook.jsx";
import fantasyBooks from "./assets/fantasy.json";
import BookList from "./components/BookList.jsx";

const App = () => {
  return (
    <div>
      <MyNav />
      <h1>Ciao</h1>
      <ButtonComponent text="Cliccami" />
      <ClassImage
        src="https://media.istockphoto.com/id/814423752/it/foto/occhio-di-modello-con-make-up-artistico-colorato-primo.jpg?s=612x612&w=0&k=20&c=OFhqyikwC47uoihOoQdQ4hnyVPo3qhyFPWldANTEjzk="
        alt="Immagine"
        width={300}
      />
      <div className="container">
        <MyFooter />
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <SingleBook book={fantasyBooks[0]} />
      </div>
      <div>
        <BookList books={fantasyBooks} />
      </div>
    </div>
  );
};

export default App;
