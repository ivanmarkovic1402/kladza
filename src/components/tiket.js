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

            let bet = document.getElementById('bet').value; 
            let total = (oddSummary*bet).toFixed(2);

            this.setState({ games: this.props.ticket_games, oddSummary: oddSummary, total: total});
        }
    }

    state = { 
        games: [],
        oddSummary: null,
        total: 0
    }

    updateGamesState = () => {

        let oddSummary = null;
        let oddsSummary = [];

        oddsSummary.push(this.props.ticket_games.map(game => game.odd));
        oddsSummary[0].map(el =>  oddSummary *= el);

        this.setState({ games: this.props.ticket_games, oddSummary: oddSummary});

    }

    deleteGameFromTicket = (gameId) =>{
        const newGames = this.state.games.filter(g => g.id !== gameId);

        let oddSummary = 1;
        let oddsSummary = [];

        oddsSummary.push(newGames.map(game => game.odd));
        oddsSummary[0].map(el =>  oddSummary *= el);
        oddSummary = oddSummary.toFixed(2);

        let bet = document.getElementById('bet').value; 
        let total = (oddSummary*bet).toFixed(2);

        this.setState({ games: newGames, oddSummary: oddSummary, total: total});
    }

    placeBet = (e) => {
        let bet = e.target.value;
        let total = (bet*this.state.oddSummary).toFixed(2);
        this.setState({total});
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.games.map(game => 
                            <tr key={game.id}>
                                <td>{game.name}</td>
                                <td>{game.play}</td>
                                <td>{game.odd}</td>
                                <td><button onClick={() => {
                                    this.deleteGameFromTicket(game.id); 
                                    this.props.onDeleteGameFromTicket(game.id); 
                                    this.props.onDeleteGame(game.id)}} className="close">&times;</button></td>
                            </tr>)}
                        <tr className="odds-summary">
                            <td>Odds Summary</td>
                            <td></td>
                            <td></td>
                            <td className="float-right"><strong>{this.state.oddSummary}</strong></td>
                        </tr>
                        <tr className="bet">
                            <td>Bet</td>        
                            <td colSpan="2"><input type="text" id="bet" name="bet" onChange={(event) => this.placeBet(event)} /></td>        
                            <td className="float-right"><strong>{this.state.total}</strong></td>        
                        </tr>
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Ticket;