import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { GameListProvider } from "./contexts/GameListContext";
import { GameProvider } from "./contexts/GameContext";
import App from "./components/App/App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <GameListProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </GameListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
