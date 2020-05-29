import React, { Component } from 'react';
import './tiket.css';


class Ticket extends Component {
    componentWillMount(){
        this.updateGamesState();
    }

    componentDidUpdate(prevProps, prevState){

        if(prevProps.ticket_games !== this.props.ticket_games){
            //Ajax call to server to get new data

            let oddSummary = 1;
            let oddsSummary = [];

            oddsSummary.push(this.props.ticket_games.map(game => game.odd));
            oddsSummary[0].map(el =>  oddSummary *= el);
            oddSummary = oddSummary.toFixed(2);

            this.setState({ games: this.props.ticket_games, oddSummary: oddSummary});
        }
    }

    state = { 
        games: [],
        oddSummary: 1
    }

    updateGamesState = () => {

        let oddSummary = null;
        let oddsSummary = [];

        oddsSummary.push(this.props.ticket_games.map(game => game.odd));
        oddsSummary[0].map(el =>  oddSummary *= el);

        this.setState({ games: this.props.ticket_games, oddSummary: oddSummary});

    }



    render() { 
        
        return ( 
            <div>
                <div className="ticket-title"><h4>Ticket</h4></div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Play</th>
                            <th>Odd</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.games.map(game => <tr key={game.id}><td>{game.name}</td><td>{game.play}</td><td>{game.odd}</td></tr>)}
                        <tr className="odds-summary">
                            <td>Odds Summary</td>
                            <td></td>
                            <td className="float-right"><strong>{this.state.oddSummary}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Ticket;