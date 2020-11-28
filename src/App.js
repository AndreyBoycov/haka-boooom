import {Route} from 'react-router-dom';
import './App.css';
import React from "react";
import TablePage from '../src/modules/TablePage/TablePage';
import LoginPage from "./modules/loginPage/LoginPage";
import NavBar from "./modules/NavBar/NavBar";
import PersonalAccount from "./modules/PersonalAccount/PersonalAccount";
import AdminPage from "./modules/AdminPage/AdminPage";
import Switch from "@material-ui/core/Switch";

// let rout = "/login"

function App() {

  return (
    <div className="App">
        {/*<nav className="nav">*/}
            <NavBar>
            </NavBar>
        {/*</nav>*/}

        <div className="Content">
            <Route path="/login" component={LoginPage} />
            <Route path="/" exact render={() => <h1>HomePage</h1>} />
            <Route path="/table" component={TablePage} />
            <Route path="/personalAccount" component={PersonalAccount} />
            <Route path="/admin_panel" component={AdminPage} />
        </div>

    </div>
  );
}

export default App;
