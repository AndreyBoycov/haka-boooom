import React, {useState} from "react";
import logoRooss from "../../images/logoRooss.svg";
import Button from "@material-ui/core/Button";
import './NavBar.scss'
import {NavLink, Redirect} from "react-router-dom";
import {ADMIN_PANEL_PAGE_PATH, TABLE_PAGE_PATH} from "../../routers";
import LK from '../../images/LK.svg'
import {ExitToApp} from "@material-ui/icons";
import {isAuthorized, logout} from "../../services/auth.service";

const NavBar = (props) => {
    const [isRedirect, setRedirectMode] = useState(false);

    const logoutApp = () => {
        logout();
        setRedirectMode(true);
        setTimeout(() => {
            window.location.replace('/login');
        });
    };

    const getLogoutBtn = () => {
        const isAuth = isAuthorized();
        if (isAuth) {
            return <Button onClick={() => logoutApp()}>
                        <ExitToApp/>
                    </Button>
        }
        return '';
    };

    return (
        <div style={{
            backgroundColor: '#ffffff',
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: 'auto 1fr',
            height: '5rem'
        }}>
            <img style={{height: '3em'}} src={logoRooss} alt=";jgf"/>
            <div className='up_linear'>

                <div className="bottom_block">
                    <span style={{width: '22rem', fontSize: '13px'}} className='text text_20px'>Цифровое сообщество по рационализаторской деятельности</span>
                    <div className='menu_panel'>
                        <NavLink className="text_15px" to={TABLE_PAGE_PATH}>Добавить рац. предложение</NavLink>
                        <NavLink className="text_15px" to={ADMIN_PANEL_PAGE_PATH}>Администрирование</NavLink>
                    </div>
                    <Button href={"/personalAccount"}
                            style={{width: '10em'}}
                            title='Personal Account'>
                        <img title='Личный кабинет' src={LK} alt=""/>

                    </Button>

                    {getLogoutBtn()}
                    {isRedirect && <Redirect to="/login" />}
                </div>
            </div>
        </div>
    )
}
export default NavBar
