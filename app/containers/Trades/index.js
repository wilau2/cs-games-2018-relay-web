import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


class Trades extends React.Component {

  render() {
    return (
      <h2>Trades component</h2>
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
