import React, {Component} from "react";
import logoRooss  from "../../images/logoRooss.svg";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SvgIcon from "@material-ui/core/SvgIcon";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

class NavBar extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#ffffff',
                         display: 'grid',
                         alignItems: 'center',
                         gridTemplateColumns: 'auto 1fr 10em',
                         height: '6rem'}}>
                <img src={logoRooss} alt=";jgf"/>
                <div>
                <a href="/">Home</a>
                <span>  </span>
                <a href="/table">Table</a>
                </div>
                <div>
                    <a href="/login"
                       title='exit'>
                        <SvgIcon component={DirectionsWalkIcon}/>
                    </a>
                    <span>  </span>
                    <a href="/personalAccount"
                       title='Personal Account'>
                        <SvgIcon component={AccountBoxIcon}/>
                    </a>
                </div>
            </div>
        )
    }
}
export default NavBar
