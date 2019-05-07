import React from 'react';
import {NavLink} from 'react-router-dom';

const ToKnow = ()=> {
 
        return ( 
            <React.Fragment>
                <p>Tudnivalók</p>

                <NavLink to="/Admin">Új cikk írása</NavLink>
            </React.Fragment>
         );
}
 
export default ToKnow;