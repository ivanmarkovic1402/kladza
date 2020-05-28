import React, { Component } from 'react';
import Lista from './lista';
import Tiket from './tiket';

class Container extends Component {
    state = {
        ticket_games: [
            {  id: 1,
               name: 'Mancester United vs Real Madrid',
               play: 'draw',
               odd: 3.1
            },
            {  id: 2,
                name: 'Borusia Dortmund vs PSG',
                play: 'away',
                odd: 1.95
            },
        ]
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <Lista />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <Tiket ticket_games={this.state.ticket_games} />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Container;