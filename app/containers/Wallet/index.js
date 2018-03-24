import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles/index';

import { createStructuredSelector } from 'reselect';
import { loadWallets } from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { WALLETS } from './constants';
import reducer from './reducer';
import saga from './saga';
import { selectWallets, makeSelectWallets } from './selectors';
import { makeSelectLoading } from '../../asyncDisplayer/containers/IsLoading/selectors';
import { makeSelectError } from '../../asyncDisplayer/containers/HasError/selectors';
import LoadingError from '../../asyncDisplayer/components/LoadingError';


const styles = () => ({
  test: {
    border: '2px solid',
  },
});

class Wallet extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {amount: '', account: ''};

    this.handleChangeWalletValue = this.handleChangeWalletValue.bind(this);
    this.handleSubmitChangeAccount = this.handleSubmitNewWallet.bind(this);
  }

  handleChangeWalletValue(event) {
    this.setState({amount: event.target.value});
  }

  handleSubmitChangeAccount(event) {
    this.setState({account: event.target.value});
  }

  handleSubmitNewWallet(event) {
    alert('New wallet ' + this.state.amount);
    this.props.onLoadWallets();
    console.log(this.props.walletsLoading);
    console.log(this.props.wallets);
    event.preventDefault();
  }

  handleSubmitChangeAccount(event) {
    alert('New wallet ' + this.state.amount);
    this.props.onLoadWallets();
    console.log(this.props.walletsLoading);
    console.log(this.props.wallets);
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
          errorNode={<p>error</p>}
        >
        <form onSubmit={this.handleSubmitNewWallet}>
          <label>
            Create wallet:
            amount
            <input type="number" onChange={this.handleChangeWalletValue} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <form onSubmit={this.handleSubmitChangeAccount}>
          <select onChange={this.handleChangeAccount} >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </form>


          <div>
            {this.props.wallets.map((wallet, index) => (
              <div key={wallet.address}>
                <h3>wallet {index}:</h3>
                <div>
                  <div><span>address: </span><span>{wallet.address}</span></div>
                  <div><span>username: </span><span>{wallet.username }</span></div>
                </div>
              </div>
            ))}
          </div>
        </LoadingError>
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
