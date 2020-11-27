import {Route} from 'react-router-dom';
import './App.css';
import React from "react";
import TablePage from '../src/modules/TablePage/TablePage';
import LoginPage from "./modules/loginPage/LoginPage";
import NavBar from "./modules/NavBar/NavBar";
import PersonalAccount from "./modules/PersonalAccount/PersonalAccount";

function App() {
  return (
    <div className="App">
        <nav className="nav" exact>
            <NavBar>

            </NavBar>
        </nav>
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact render={() => <h1>HomePage</h1>} />
        <Route path="/table" component={TablePage} />
        <Route path="/personalAccount" component={PersonalAccount} />
    </div>
  );
}

export default App;
