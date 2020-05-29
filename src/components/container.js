import React, { Component } from 'react';
import Lista from './lista';
import Tiket from './tiket';

class Container extends Component {
    state = {
        ticket_games: []
    }

    handleAddOddToTicket= (game, play) =>{
        const ticket_games = [...this.state.ticket_games];
        const games = {
            id: game.id,
            name: game.name,
            play: play,
            odd: game.odds[play]
        }
        ticket_games.push(games);
        this.setState({ticket_games})
    }

    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <Lista onAddOddToTicket={this.handleAddOddToTicket} />
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