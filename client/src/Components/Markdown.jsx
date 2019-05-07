import React, {Component} from 'react';
let marked = require('marked'); 


class Markdown extends Component {
    
    render() { 
        return ( <React.Fragment>
                    <div>
                        <form>
                            <label for="articletitle">Cikk címe:</label>
                            <input type="text" id="articletitle" name="articletitle"/>
                            <label for="articlebody">Cikk tartalma:</label>
                            <textarea id="articlebody" name="articlebody"/>
                            <button>Publikálás</button>
                        </form>
                    </div>
                    <div>
                        <h2>Cikk előnézet:</h2>
                        <div></div>
                        
                    </div>
                </React.Fragment> 
        );
    }
}
 
export default Markdown;