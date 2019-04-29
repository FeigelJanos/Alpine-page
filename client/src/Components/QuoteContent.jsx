import React, { Component } from 'react';
import Calendar from './CalendarModule';

class Quote extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <h1>Kérjen ajánlatot!</h1>
                <form>
                    <div>
                        <h2>Kontakt információk:</h2>

                        <label for="name1">Vezeték név:</label>
                        <input type="text" id="name1" name="name1" />

                        <label for="name2">Kereszt név:</label>
                        <input type="text" id="name2" name="name2" />

                        <label for="adress">Elvégzendő munka címe:</label>
                        <input type="text" id="adress" name="adress" />

                        <label for="tel">Telefonszám:</label>
                        <input type="tel" id="tel" name="tel" />
                        
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    
                    <div>
                        <h2>Választható szolgáltatások:</h2>

                        <label for="removal">Fa kivágás</label>
                        <input type="checkbox" id="removal" name="service" />

                        <label for="pruning">Korona ritkítás</label>
                        <input type="checkbox" id="pruning" name="service" />

                        <label for="care">Fa ápolás</label>
                        <input type="checkbox" id="care" name="service" />

                        <label for="other">Egyéb</label>
                        <input type="checkbox" id="other" name="service" />
                    </div>
                    <div>
                        <h2>Kérem írja le röviden miben segíthetünk:</h2>

                        <label for="notes">Megjegyzések:</label>
                        <input type="text" id="notes" name="notes" />
                    </div>
                    <div>
                        <h2>Fénykép feltöltése:</h2>
                        <label for="picture">Megjegyzések:</label>
                        <input type="file" id="picture" name="picture" />
                        
                        <p>A minél pontosabb ajánlat érdekében kövesse fotó készítési útmutatónkat:</p>
                        <a href="#">Hogyan készítsen fotókat megrendeléséhez</a>

                    </div>
                    <div>
                        <h2>Vagy válasszon időpontot személyes szemléhez:</h2>
                        <button>Időpont választása</button>
                        <p>A személyes felmérés Budapesti cím vagy 500.000Ft feletti megrendelés esetén díjmentes, egyéb esetekben kiszállási díjat számítunk fel.</p>
                    </div>
                    <div>
                        <Calendar />
                    </div>
                </form>
            </React.Fragment>
           
         );
    }
}
 
export default Quote;