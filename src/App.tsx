import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./features/Routing/AppRouter";
import {useAppDispatch} from "./Store/hooks/hooks";
import {checkAuth} from "./utils/functions";


function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        checkAuth(dispatch)
    }, [])

  return (
      <BrowserRouter >
          <div className="App">
             <AppRouter/>
          </div>
      </BrowserRouter>
  );
}

export default App;
