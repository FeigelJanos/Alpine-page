import React from 'react';


const BottomBar = ()=> {

     
        return ( 
            <div>
                <h3>Ra-Fa Kft. 2019</h3>
                <p>1111 Budapest Valami út 1.</p>
                <p>Adószám: 123-456</p>
                <p>Email: ra-fa@fa.hu</p>
                <p>Tel: +36 1/123-456</p>

                <h3>Üzenjen nekünk!</h3>
                <form>
                    <label for="name">Név:</label>
                    <input type="text" id="name" name="name" />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label for="tel">Tel:</label>
                    <input type="tel" id="tel" name="tel" />

                    <label for="message">Üzenet:</label>
                    <input type="text" id="message" name="message" />  

                    <button type="submit">Küldés</button>    
                </form>
                <button>Facebook</button>
            </div>       
         );
    
}
 
export default BottomBar;