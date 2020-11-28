import React, {Component} from "react";
import logoRooss  from "../../images/logoRooss.svg";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SvgIcon from "@material-ui/core/SvgIcon";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import {history} from '../../_helpers/history';
import Button from "@material-ui/core/Button";
import './NavBar.scss'

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
                         height: '6rem'}}>
                <img src={logoRooss} alt=";jgf"/>
                <div className='up_linear'>
                    <div className='top-body'>
                        <span className='text'>платформа для инноваций</span>
                        <Button href={'/login'}
                                className='out'>
                            <SvgIcon component={DirectionsWalkIcon}/>
                        </Button>
                        <Button href={"/personalAccount"}
                                className='person-button'
                                title='Personal Account'>
                            <SvgIcon component={AccountBoxIcon}/>
                            Личный кабинет
                        </Button>
                    </div>
                    <div>
                    <a href="/">Home</a>
                    <span>  </span>
                    <a href="/table">Table</a>
                    </div>
                </div>
            </div>
        )
    // }
}
export default NavBar
