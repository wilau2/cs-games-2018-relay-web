import React from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { withStyles } from 'material-ui/styles/index';

// import { createStructuredSelector } from 'reselect';
// import { loadCreateWallets } from './actions';
// import injectReducer from '../../utils/injectReducer';
// import injectSaga from '../../utils/injectSaga';
// import { CreateWalletS } from './constants';
// import reducer from './reducer';
// import saga from './saga';
// import { selectCreateWallets, makeSelectCreateWallets } from './selectors';
// import { makeSelectLoading } from '../../asyncDisplayer/containers/IsLoading/selectors';
// import { makeSelectError } from '../../asyncDisplayer/containers/HasError/selectors';
// import LoadingError from '../../asyncDisplayer/components/LoadingError';

class CreateWallet extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <button onClick={this.props.onLoadWallets} className={this.props.classes.test}>
          click here to load wallets
      </button>
    );
  }
}

export default CreateWallet;
