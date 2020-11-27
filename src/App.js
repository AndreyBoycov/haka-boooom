import {Route} from 'react-router-dom';
import './App.css';
import React from "react";
import TablePage from '../src/modules/TablePage/TablePage';
import LoginPage from "./modules/loginPage/LoginPage";

function App() {
  return (
    <div className="App">
        <nav className="nav" exact>
            <a href="/">Home</a>
            <span>  </span>
            <a href="/login">Exit</a>
            <span>  </span>
            <a href="/table">Table</a>
        </nav>
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact render={() => <h1>HomePage</h1>} />
        <Route path="/table" component={TablePage} />
    </div>
  );
}

export default App;
