import {Route} from 'react-router-dom';
import './App.css';
import React from "react";
import TablePage from '../src/modules/TablePage/TablePage';
import LoginPage from "./modules/loginPage/LoginPage";
import NavBar from "./modules/NavBar/NavBar";
import {ROUTERS} from "./routers";

function App() {

    const renderRouters = () => {
      return ROUTERS.map(router => (
          <Route path={router.path} component={router.component} />
      ));
    };

  return (
    <div className="App">
        <nav className="nav" exact>
            <NavBar>

            </NavBar>
        </nav>

        <div className="Content">
            { renderRouters() }
            <Route path="/" exact render={() => <h1>HomePage</h1>} />
        </div>

    </div>
  );
}

export default App;
