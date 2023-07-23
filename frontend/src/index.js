import App from "./App";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ReactDOM.render(<App />, document.getElementById(""));

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
