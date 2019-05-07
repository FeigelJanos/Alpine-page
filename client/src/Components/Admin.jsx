import React, { Component } from 'react';
import Markdown from './Markdown';



class Admin extends Component {

    render() { 
        return ( 
        <React.Fragment>
            <div>Feladatok: </div>
            <div>
            <h2>Új cikk létrehozása:</h2>
            <Markdown />
            </div>
            
        </React.Fragment>
            
         );
    }
}
 
export default Admin;