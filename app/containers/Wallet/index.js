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

  constructor(props){
    super(props);
    this.exchange = 1.25;
    this.exchangePwg = 2000;
    this.state = {
      filter: undefined
    };
    this.filter = (term) => {
      this.props.onLoadWallets();
      this.setState({...this.state, filter: term });
    };
  }

  render() {
    return (
      <div>
        <h1> Current CDN Exchange Rate: {this.exchange}x</h1>
        <h1> Current PWG Exchange Rate: {this.exchangePwg}x</h1>
        <button onClick={this.filter.bind(null, "flying-penguin")} className={this.props.classes.test}>
          Only flying-penguin
        </button>
        <button onClick={this.filter.bind(null, "dying-penguin")} className={this.props.classes.test}>
          Only dying-penguin
        </button>
        <button onClick={() => {this.setState({filter: undefined }); this.props.onLoadWallets();}} className={this.props.classes.test}>
          click here to load wallets
        </button>
        <LoadingError
          loading={this.props.walletsLoading}
          error={this.props.walletsError}
          errorNode={<p>error</p>}
        >
          <div>
            {this.props.wallets.map((wallet, index) => (
              (this.state.filter === undefined || wallet.username === this.state.filter) &&
              <div key={wallet.address}>
                <h3>wallet {index}:</h3>
                <div>
                  <div><span>address: </span><span>{wallet.address}</span></div>
                  <div><span>username: </span><span>{wallet.username }</span></div>
                  <div><span>amount: </span><span>{wallet.currency} {wallet.amount}</span></div>
                  <div><span>converted PGG/CDN: </span>{
                  wallet.currency === 'PGG' ?
                    <span>CDN {wallet.amount * this.exchange}</span> : <span>PGG {wallet.amount / this.exchange}</span>
                }</div>
                  <div><span>converted PGG/PGW: </span>{
                    wallet.currency === 'PGG' ?
                      <span>CDN {wallet.amount * this.exchangePwg}</span> : <span>PGG {wallet.amount / this.exchangePwg}</span>
                  }</div>
                  <div><span>converted CDN/PGW: </span>{
                    wallet.currency === 'CDN' ?
                      <span>CDN {wallet.amount * this.exchangePwg}</span> : <span>PGG {wallet.amount / this.exchangePwg}</span>
                  }</div>
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
