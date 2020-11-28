import React, {useState} from "react";
import {Route, Redirect} from 'react-router-dom';
import NavBar from "./modules/NavBar/NavBar";
import {ROUTERS} from "./routers";
import {isAuthorized} from "./services/auth.service";
import './App.css';
import LoginPage from "./modules/loginPage/LoginPage";

function App() {

    const renderRouters = () => {
        const isAuth = isAuthorized();
        if (!isAuth) {
            return <Redirect to='/login' />
        }
        return ROUTERS.map(router => (
            <Route path={router.path} component={router.component} />
        ));
    };

    const renderNavbar = () => {
        const isAuth = isAuthorized();
        if (isAuth) {
            return <NavBar />;
        }
        return '';
    };

    return (
      <div className="App">
          { renderNavbar() }
          <div className="Content" style={{padding: '0'}}>
              { renderRouters() }
              <Route path="/login" component={LoginPage}/>
          </div>

      </div>
    );
}

export default App;
