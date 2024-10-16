import React from "react";
import ReactDOM from "react-dom/client";
import "./app-assets/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
console.log("😆😆😆😆😆");

// document.addEventListener('contextmenu', function(event) {
//   event.preventDefault();
// });

document.addEventListener("copy", function (event) {
  event.preventDefault();
});

document.addEventListener("cut", function (event) {
  event.preventDefault();
});

document.addEventListener('paste', function(event) {
  event.preventDefault();
});