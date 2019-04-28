import React, { Component } from 'react';

class Login extends Component {

    render() { 
        return ( 
           <form>
               <label for="name">Felhasználónév:</label>
               <input type="text" id="name" name="name" />

               <label for="password">Jelszó:</label>
               <input type="password" id="password" name="password" />

               <button type="submit">Belépés</button>
           </form>
         );
    }
}
 
export default Login;