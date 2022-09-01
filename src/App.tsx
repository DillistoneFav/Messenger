import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./features/Routing/AppRouter";
import {useAppSelector} from "./Store/hooks/hooks";
import {RootState} from "./Store/store";


function App() {
    const {} = useAppSelector((state: RootState) => state.userReducer.user)
  return (
      <BrowserRouter>
          <div className="App">
             <AppRouter/>
          </div>
      </BrowserRouter>
  );
}

export default App;
