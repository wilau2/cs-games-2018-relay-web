import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles/index';

import { createStructuredSelector } from 'reselect';
import { createWallet, loadWallets } from './actions';
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
  btn: {
    border: '1px solid',
  },
  section: {
    border: '1px solid',
  },
});

class Wallet extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div>
          <span>Account: </span>
          <select>
            <!--{this.props.accounts.map(account => (
              <option value={account}>{account}</option>
            ))}-->
          </select>
        </div>
        <button onClick={this.props.onCreateWallet} className={this.props.classes.btn}>
          create wallet
        </button>
        <button onClick={this.props.onLoadWallets} className={this.props.classes.btn}>
          click here to load wallets
        </button>
        <LoadingError
          loading={this.props.walletsLoading}
          error={this.props.walletsError}
          errorNode={<p>error</p>}
        >
          <div>
            {this.props.wallets.map((wallet, index) => (
              <div key={wallet.address}>
                <h3>wallet {index}:</h3>
                <div>
                  <div><span>address: </span><span>{wallet.address}</span></div>
                  <div><span>currency: </span><span>{wallet.currency }</span></div>
                  <div><span>amount: </span><span>{wallet.amount }</span></div>
                </div>
                <div className={this.props.classes.section}>
                  <h2>Deposit</h2>
                  <div>
                    <span>currency: </span>
                    <select>
                      <option value="CAD">CAD</option>
                      <option value="PGG">PGG</option>
                    </select>
                  </div>
                  <div><span>amount: </span><input type="number"/></div>
                  <button className={this.props.classes.btn}>Deposit</button>
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
  onCreateWallet: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    // dispatch(createWallet());
  },
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
