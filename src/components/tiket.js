import React, { Component } from 'react';
import Lista from './lista'

class Tiket extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <Lista />
            </div>
         );
    }
}
 
export default Tiket;