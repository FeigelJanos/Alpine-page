import React, { Component } from 'react';

class TopMenu extends Component {
   
    render() { 
        return ( 
            <React.Fragment>
                <img alt="Cég logó" src="https://i.postimg.cc/CxVBG9g6/Ra-Fa2.png" id="company-logo"/>
                <button onClick={console.log("Kezdőlap")}>Kezdőlap</button>
                <button onClick={console.log("Szolgáltatások")}>Szolgáltatásaink</button>
                <button onClick={console.log("Tudnivalók")}>Hasznos tudni!</button>
                <button onClick={console.log("Ajánlat")}>Kérjen ajánlatot!</button>
                <button onClick={console.log("Belépés")}>Belépés</button>
            </React.Fragment>
         );
    }
}
 
export default TopMenu;
/*https://postimg.cc/delete/fpMt8Dcz/003ac5e7 */