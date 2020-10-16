import React from 'react';
import BetHistoryListItem from '../../components/BetListItem/BetHistoryListItem';
import './BetHistoryPage.css';


const BetHistoryPage = (props) => {

    function performance(arr) {
        let win = 0;
        let loss = 0;
        arr.forEach(function(ele) {
            if(props.user && props.user._id === ele.user && ele.result === 'Win') {
                win += ele.amount 
            } else if(props.user && props.user._id === ele.user && ele.result === 'Loss') {
                loss += ele.amount
            }
        })
        return win - loss
    }

    function totalWagers(arr) {
        
        let count = 0;
        arr.forEach(function(ele) {
            if((props.user && props.user._id === ele.user) && (ele.result === 'Win' || ele.result === 'Loss' || ele.result === 'Tie')) {
                count++
            }
        })
        return count 
    }


    return (  
        <>

        <h1>Bet History</h1>

            <br/>
            <div class="">
                <h3>Performance: ${performance(props.bets)}</h3>
            </div>
            <br/>
            <div>
                <h3>Total Wagers: {totalWagers(props.bets)}</h3>
            </div>
            
            <br/>
                <div className="filter-form">
                    <form className="form-inline">
                        <select class="custom-select custom-select-sm">
                            <option disabled selected>Filter</option>
                            <option>Day</option>
                            <option>Week</option>
                            <option>Month</option>
                            <option>Year</option>
                        </select>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            <button className="btn btn-warning btn-sm" type="submit">Search</button>
                        </span>
                    </form>
                </div>
           
                <br/>
        <div className="Bet-History-table">
            
            <table className="table table-striped table-dark">
            <thead className="">
                <tr>
                    <th scope="col">Game</th>
                    <th scope="col">Team</th>
                    <th scope="col">Type</th>
                    <th scope="col">Odds</th>
                    <th scope="col">Amount</th>    
                    <th scope="col">Result</th>               
                </tr>
            </thead>
            <tbody>    
            {props.bets.filter(bet => (props.user && props.user._id === bet.user) && (bet.result === 'Win' || bet.result === 'Loss' || bet.result === 'Tie')).map(bet => 
                    <BetHistoryListItem
                    bet={bet}
                    key={bet._id} 
                    handleDeleteBet={props.handleDeleteBet}
                    
                    /> 
                )
                }
            </tbody>
        </table>
        </div>
        <br/>
        <br/>
        </>
    )
}

export default BetHistoryPage;