import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./global.css";

const container = document.getElementById("root");

// Verifica se o container existe e, em seguida, cria o root
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.error('Elemento com id "root" não foi encontrado.');
}
