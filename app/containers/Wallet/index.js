import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles/index';

import { createStructuredSelector } from 'reselect';
import { loadWallets, createWallet } from './actions';
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
  constructor() {
    super();
    this.state = {
      username: "bag",
    }
  }
  handleChange = (event) => {
    this.setState({ username: event.target.value });
  }
  render() {
    console.log('rerendering');
    return (
      <div>
        <button onClick={this.props.onLoadWallets} className={this.props.classes.test}>
          click here to load wallets
        </button>
        <h3> Enter a username below, to add a wallet to that user.</h3>
        <h5> This works. Please open browser console, input username and click submit. 
          You will see new array with new user. </h5>

        <form>
          <label>
            Name:
          <input name="name" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
        <button type="button" onClick={() => this.props.onCreateWallet(this.state.username)}>
        submit 
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
                  <div><span>username: </span><span>{wallet.username}</span></div>
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
  onCreateWallet: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(createWallet(evt));
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
