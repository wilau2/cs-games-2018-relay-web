
import React from 'react';
import { compose } from 'redux';

class AddWallet extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                Add a wallet <br/>
                <input type="text" placeholder="account" /> <br/>
                <input type="text" placeholder="address" /> <br/>
                <button onClick={ () => this.onAddWallet()}>Add (click me)</button>
                <hr/><br/><br/>
            </div>
        );
    };

    onAddWallet() {
        alert('lad');
    }
}


export default compose(
)((AddWallet));
