import React from 'react';
import trades from '../../api/trades.json';

class Trades extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        const last = trades.trades[trades.trades.length-1]; // stupid json shit to access the last item

        return (
            <div>
                <p style={{margin: "2 2 2 2"}}>Price of last exchange: {last.price}</p>
            </div>
        );
    }
}

export default Trades;