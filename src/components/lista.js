import React, { Component } from 'react';

import Game from './game';

import './lista.css';

class Lista extends Component {
    state = { 
        games: [
            {id:1, 
             name: 'Borusia Dortmund vs PSG', 
             date: '15-06-2020',
             time: '20:45',
             odds: {
                    home: 2.4,
                    draw: 3,
                    away: 1.95
                },
                isAdded: false
            },
            {   id:2, 
                name: 'Mancester United vs Real Madrid',
                date: '15-06-2020',
                time: '20:45',
                odds: {
                    home: 2.4,
                    draw: 3.1,
                    away: 2
                },
                isAdded: false
            },
            {   id:3, 
                name: 'Monaco vs Barselona',
                date: '15-06-2020',
                time: '20:45',
                odds: {
                    home: 2.9,
                    draw: 3,
                    away: 1.75
                },
                isAdded: false
            },
            {   id:4, 
                name: 'Bayern Munchen vs Napoli',
                date: '15-06-2020',
                time: '20:45',
                odds: {
                    home: 1.7,
                    draw: 3.4,
                    away: 2.7
                },
                isAdded: false
            },
            {   id:5, 
                name: 'Red Star vs Liverpool',
                date: '16-06-2020',
                time: '20:45',
                odds: {
                    home: 2.4,
                    draw: 3,
                    away: 1.80
                },
                isAdded: false
            },
            {   id:6, 
                name: 'Juventus vs Manchester City',
                date: '16-06-2020',
                time: '20:45',
                odds: {
                    home: 2,
                    draw: 3.1,
                    away: 2.1
                },
                isAdded: false
            },
            {   id:7, 
                name: 'Ajax vs Benfica',
                date: '16-06-2020',
                time: '20:45',
                odds: {
                    home: 2,
                    draw: 3.4,
                    away: 2.6
                },
                isAdded: false
            },
            {   id:8, 
                name: 'Chelsea vs Inter',
                date: '16-06-2020',
                time: '20:45',
                odds: {
                    home: 2.2,
                    draw: 3.2,
                    away: 2.4
                },
                isAdded: false
            },
        ],
     }

     handleGameClick = (gameId) => {
        this.state.games.filter(g => {
            if(g.id === gameId){
                g.isAdded = !g.isAdded;
            }
        });
        // this.setState({gamess});     //OVDE STAO     
     }
    
    render() { 
        return ( 
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr className="list-head">
                            <th>Game ID</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th className="list-head-game-name">Game Name</th>
                            <th>Home Wins</th>
                            <th>Draw</th>
                            <th>Away Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.games.map(game => <Game key={game.id} blockClickOnGame={this.handleGameClick} onAddOddToTicket={this.props.onAddOddToTicket} game={game} />)}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Lista;