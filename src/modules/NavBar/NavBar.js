import React, {Component} from "react";
import logoRooss  from "../../images/logoRooss.svg";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SvgIcon from "@material-ui/core/SvgIcon";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import {history} from '../../_helpers/history';
import Button from "@material-ui/core/Button";
import './NavBar.scss'
import {NavLink} from "react-router-dom";
import {ADMIN_PANEL_PAGE_PATH, TABLE_PAGE_PATH} from "../../routers";
import LK from '../../images/LK.svg'

// class NavBar extends Component {

const NavBar = (props) => {
    const [activeTab, setActiveTab] = React.useState('objects');
    // render() {

    const handleNavBarSelect = (catalog) => {
        setActiveTab(catalog);
        history.push("/" + catalog);
    };
        return (
            <div style={{backgroundColor: '#ffffff',
                         display: 'grid',
                         alignItems: 'center',
                         gridTemplateColumns: 'auto 1fr',
                         height: '5rem'}}>
                <img style={{height: '3em'}} src={logoRooss} alt=";jgf"/>
                <div className='up_linear'>
                    {/*<div className='top-body'>*/}
                    {/*    <span className='text'>По приморскому краю</span>*/}

                    {/*    <div className='account_panel'>*/}
                    {/*        {false &&*/}
                    {/*        <Button href={'/login'}*/}
                    {/*                className='out'>*/}
                    {/*            <SvgIcon component={DirectionsWalkIcon}/>*/}
                    {/*        </Button>*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*</div>*/}

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
                    </div>
                </div>
            </div>
        )
    // }
}
export default NavBar
