import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//eliminiamo la strcimode per evitare inutili re-remder dei componeti
createRoot(document.getElementById("root")).render(<App />);
