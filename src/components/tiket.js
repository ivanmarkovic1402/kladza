import React, { Component } from 'react';


class Ticket extends Component {
    componentDidMount(){
        this.updateGamesState();
    }
    // componentDidUpdate(){
    //     console.log(this.state.games);

    // }
    state = { 
        games: [],
        oddSummary: 1
    }

    updateGamesState = () => {
        let x = 1;
        console.log(x);

        let oddsSummary = [];
        this.setState({ games: this.props.ticket_games})

        oddsSummary.push(this.props.ticket_games.map(game => game.odd));
        oddsSummary.map(el =>  x *= el);
        console.log(x);
    }



    render() { 
        
        return ( 
            <div>
                <div><h4>Ticket</h4></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Play</th>
                            <th>Odd</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.games.map(game => <tr key={game.id}><td>{game.name}</td><td>{game.play}</td><td>{game.odd}</td></tr>)}
                        <tr>
                            <td></td>
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


// const Tiket = (props) => {
//     let oddSummary = 1;
//     const oddSummaryFinal = props.ticket_games.map(g => {
//         return oddSummary *= (+ g.odd)
//     });

