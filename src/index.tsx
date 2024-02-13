import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BPSample } from "./examples/budgetPlanner/budgetPlanner";
import { ExcercisesDataSample } from "./examples/excerciseDataSample/ExcerciseDataSample";
import { LiquidityPlanner } from "./examples/liquidityPlanner/LiquidityPlanner";
//import reportWebVitals from "./reportWebVitals";

const myElement: HTMLElement | null = document.getElementById("root")!;

const root = ReactDOM.createRoot(myElement);
root.render(
  <React.StrictMode>
    <LiquidityPlanner />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
