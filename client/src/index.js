import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
  // @ https://stackoverflow.com/questions/48846289/why-is-my-react-component-is-rendering-twice
  // убрал strict mode из-за двойного ререндера
);
