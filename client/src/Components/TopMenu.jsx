import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from './Pictures/Ra-Fa2.png';

class TopMenu extends Component {
    

    render() { 
        return ( 
            <React.Fragment>
                <img alt="Cég logó" src={logo} id="company-logo"/>
                <NavLink to="/"> Kezdőlap </ NavLink>
                <NavLink to="/Services">Szolgáltatásaink</NavLink>
                <NavLink to="/GoodToKnow">Hasznos információk</ NavLink>
                <NavLink to="/Quote">Kérjen ajánlatot!</NavLink>
                {this.props.authentication.isLoggedIn?
                <NavLink to="/Tasks">Feladatok</NavLink>:
                ""}
                {this.props.authentication.isAdmin?
                <NavLink to="/Admin">Admin</NavLink>:
                ""}
                <NavLink to="/Login">Belépés</NavLink>
            </React.Fragment>
         );
    }
}
 
export default TopMenu;
/*https://postimg.cc/delete/fpMt8Dcz/003ac5e7 https://i.postimg.cc/CxVBG9g6/Ra-Fa2.png*/