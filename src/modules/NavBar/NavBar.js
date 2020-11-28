import React, {Component} from "react";
import logoRooss  from "../../images/logoRooss.svg";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SvgIcon from "@material-ui/core/SvgIcon";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import {history} from '../../_helpers/history';
import Button from "@material-ui/core/Button";
import './NavBar.scss'
import {NavLink} from "react-router-dom";
import {TABLE_PAGE_PATH} from "../../routers";

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
                         gridTemplateColumns: 'auto 1fr 7em',
                         height: '8.5rem'}}>
                <img src={logoRooss} alt=";jgf"/>
                <div className='up_linear'>
                    <div className='top-body'>
                        <span className='text'>По приморскому краю</span>

                        <div className='account_panel'>
                            {false &&
                            <Button href={'/login'}
                                    className='out'>
                                <SvgIcon component={DirectionsWalkIcon}/>
                            </Button>
                            }

                            <Button href={"/personalAccount"}
                                    className='person-button'
                                    title='Personal Account'>
                                <SvgIcon component={AccountBoxIcon}/>
                                Личный кабинет
                            </Button>
                        </div>
                    </div>

                    <div className="bottom_block">
                        <span style={{width: '22rem'}} className='text text_20px'>Цифровое сообщество по рационализаторской деятельности</span>
                        <div className='menu_panel'>
                            <NavLink className="text_15px" to={TABLE_PAGE_PATH}>Добавить рац. предложение</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    // }
}
export default NavBar
