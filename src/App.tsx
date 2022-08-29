import React from 'react';
import './App.css';
import WholePage from "./UI kit/WholePage/WholePage";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./features/Routing/AppRouter";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
             <AppRouter/>
          </div>
      </BrowserRouter>
  );
}

export default App;
