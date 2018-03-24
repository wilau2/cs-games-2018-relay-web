import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withStyles} from 'material-ui/styles/index';

import {createStructuredSelector} from 'reselect';
import {loadWallets} from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import {WALLETS} from './constants';
import reducer from './reducer';
import saga from './saga';
import {selectWallets, makeSelectWallets} from './selectors';
import {makeSelectLoading} from '../../asyncDisplayer/containers/IsLoading/selectors';
import {makeSelectError} from '../../asyncDisplayer/containers/HasError/selectors';
import LoadingError from '../../asyncDisplayer/components/LoadingError';


const styles = () => ({
    test: {
        border: '2px solid',
    },
});

class Wallet extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
            createFormOn: false,
            addressInput: "",
            selectedAccount: null
        };
        this.updateAddressInput = this.updateAddressInput.bind(this);
        this.updateSelectedAccount = this.updateSelectedAccount.bind(this);
        this.onSubmitNewWallet = this.onSubmitNewWallet.bind(this);
    }

    clickToggleCreateForm() {
        this.setState({
            createFormOn: true
        });
    }

    updateAddressInput(event) {
        this.setState({addressInput: event.target.value});
    }

    updateSelectedAccount(event) {
        this.setState({selectedAccount: event.target.value});
    }

    onSubmitNewWallet(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onLoadWallets} className={this.props.classes.test}>
                    click here to load wallets
                </button>
                <LoadingError
                    loading={this.props.walletsLoading}
                    error={this.props.walletsError}
                    errorNode={<p>error</p>}>
                    <div>
                        {this.props.wallets.map((wallet, index) => (
                            <div key={wallet.address}>
                                <h3>wallet {index}:</h3>
                                <div>
                                    <div><span>address: </span><span>{wallet.address}</span></div>
                                    <div><span>username: </span><span>{wallet.username}</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </LoadingError>
                <div>
                    {
                        this.state.createFormOn ?
                            (
                                <form onSubmit={this.onSubmitNewWallet}>
                                    <label>Wallet address:</label>
                                    <input name="address" type="text" value={this.state.addressInput}
                                           onChange={this.updateAddressInput}/>
                                    <label>Account</label>
                                    <select name="account" value={this.state.selectedAccount}
                                            onChange={this.updateSelectedAccount}>
                                        {
                                            // List every account
                                        }
                                    </select>
                                    <button type="submit">
                                        Add wallet to account
                                    </button>
                                </form>
                            ) : (
                                <button onClick={this.clickToggleCreateForm.bind(this)}> Create a wallet </button>
                            )
                    }
                </div>
            </div>
        );
    }
}

export const mapStateToProps = createStructuredSelector({
    wallets: makeSelectWallets(),
    walletsLoading: makeSelectLoading(selectWallets),
    walletsError: makeSelectError(selectWallets),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoadWallets: (evt) => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        dispatch(loadWallets());
    },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSurveyReducer = injectReducer({
    key: WALLETS,
    reducer,
});

const withSurveySaga = injectSaga({
    key: WALLETS,
    saga,
});


export default compose(
    withSurveyReducer,
    withSurveySaga,
    withConnect,
)(withStyles(styles)(Wallet));
