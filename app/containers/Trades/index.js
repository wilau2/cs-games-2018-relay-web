import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {loadTrades} from './actions';
import reducer from './reducer';
import injectReducer from '../../utils/injectReducer';


class Trades extends React.Component {

      /* Pas eu le temps, mais le reducer `trades` met le state dans le store so on peux juste maintenant afficher toute ici une fois que le store se fait peupler. */
      /* PLS CONSIDER <3*/
  render() {
    return (
      <h2>Trades component</h2>
    );
  }
}


export const mapStateToProps = state => {
  return {
    trades: state.trades,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  // TODO: Faire le call, pis juste afficher toute dans render
  //onLoadWallets: dispatch()
  //},
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

//const withSurveyReducer = injectReducer({
  //key: WALLETS,
  //reducer,
//});
//
//
const withSurveyReducer = injectReducer({
  key: "trades",
  reducer,
});

//const withSurveySaga = injectSaga({
  //key: WALLETS,
  //saga,
//});


export default compose(
  withSurveyReducer,
  //withSurveySaga,
  withConnect,
)(Trades);
