import React, { Component } from 'react';

class TopMenu extends Component {
   
    render() { 
        return ( 
            <React.Fragment>
                <button onClick={}>Kezdőlap</button>
                <a href="#">Szolgáltatásaink</a>
                <a href="#">Hasznos tudni!</a>
                <a href="#">Kérjen ajánlatot!</a>
                <a href="#">Belépés</a>
            </React.Fragment>
         );
    }
}
 
export default TopMenu;