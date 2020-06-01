import React, { Component } from 'react';
import Lista from './lista';
import Tiket from './tiket';

class Container extends Component {
    state = {
        ticket_games: []
    }

    makeGameVisible;
    resetAll = false;

    handleAddOddToTicket= (game, play) =>{
        const ticket_games = [...this.state.ticket_games];
        const games = {
            id: game.id,
            name: game.name,
            play: play,
            odd: game.odds[play]
        }
        ticket_games.push(games);
        this.setState({ticket_games});
    }

    handleOnDeleteGame = (gameId) => {
        const newGames = this.state.ticket_games.filter(g => g.id !== gameId);
        this.setState({ticket_games: newGames});
    }

    handleOnDeleteGameFromTicket = (game_id) =>{
        this.makeGameVisible = game_id;
    }

    handleOnResetAll = () => {
        this.resetAll = true;
        this.setState({ ticket_games: []});
    }

    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <Lista onAddOddToTicket={this.handleAddOddToTicket} onResetAll={this.resetAll} onToggleGameDisplay={this.makeGameVisible}/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <Tiket 
                            ticket_games={this.state.ticket_games} 
                            onDeleteGame={this.handleOnDeleteGame} 
                            onDeleteGameFromTicket={this.handleOnDeleteGameFromTicket}
                            onResetAll={this.handleOnResetAll} />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Container;