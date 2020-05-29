import React from 'react';
import './game.css';

const Game = props => {
    return ( 
        <tr key={props.game.id}>
            <td className="game-id">{props.game.id}</td>
            <td className="game-date">{props.game.date}</td>
            <td className="game-time">{props.game.time}</td>
            <td className="game-name">{props.game.name}</td>
            <td className="btn_odds"><button onClick={() => props.onAddOddToTicket(props.game, Object.keys(props.game.odds)[0])} className="btn">{props.game.odds.home}</button></td>
            <td className="btn_odds"><button onClick={() => props.onAddOddToTicket(props.game, Object.keys(props.game.odds)[1])} className="btn">{props.game.odds.draw}</button></td>
            <td className="btn_odds"><button onClick={() => props.onAddOddToTicket(props.game, Object.keys(props.game.odds)[2])} className="btn">{props.game.odds.away}</button></td>
        </tr>
        );
}
 
export default Game;