import React from 'react';
import './modal.css';

const Modal = props =>{
    
    let modalShow = "Modal modal hide";
    if(props.show){
        modalShow = "Modal";
    }

    return (
        <div className={modalShow}>
            <div className="float-right"><button onClick={() => props.modalOpen(false)} className="closeModal">&times;</button></div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="3"><strong>Ticket</strong></th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td><strong>Game</strong></td>
                            <td><strong>Play</strong></td>
                            <td><strong>Odd</strong></td>
                        </tr>
                    {props.gamesOnTicket.map(game => 
                        <tr key={game.id}>
                            <td>{game.name}</td>
                            <td>{game.play}</td>
                            <td>{game.odd}</td>
                        </tr>
                    )}
                    <tr><td style={{borderTop: "1px solid black"}}>Odds Summary</td><td colSpan="2" style={{borderTop: "1px solid black"}}><span className="float-right">{props.oddSummary}</span></td></tr>
                    <tr><td>Total:</td><td colSpan="2"><span className="float-right">{props.total}</span></td></tr>
                </tbody>
            </table>
        </div>
    );

}


export default Modal;       
//  console.log(gamesOnTicket);
// console.log(modalShown);