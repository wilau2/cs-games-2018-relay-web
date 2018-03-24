import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles/index';

import { createStructuredSelector } from 'reselect';
import { loadTrades } from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { TRADES } from './constants';
import reducer from './reducer';
import saga from './saga';
import { selectTrades, makeSelectTrades } from './selectors';
import { makeSelectLoading } from '../../asyncDisplayer/containers/IsLoading/selectors';
import { makeSelectError } from '../../asyncDisplayer/containers/HasError/selectors';
import LoadingError from '../../asyncDisplayer/components/LoadingError';


const styles = () => ({
  test: {
    border: '2px solid',
  },
});

class Trade extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <button onClick={this.props.onLoadTrades} className={this.props.classes.test}>
          click here to load trades
        </button>
        <LoadingError
          loading={this.props.tradesLoading}
          error={this.props.tradesError}
          errorNode={<p>error</p>}
        >
          <div>
            {this.props.trades.map((trade, index) => (
              <div key={trade.date}>
                <h3>trade {index}:</h3>
                <div>
                  <div><span>price: </span><span>{trade.price}</span></div>
                  <div><span>currency: </span><span>{trade.currency }</span></div>
                  <div><span>quantity: </span><span>{trade.quantity }</span></div>
                  <div><span>date: </span><span>{trade.date }</span></div>
                  <div><span>fromWallet: </span><span>{trade.fromWallet }</span></div>
                  <div><span>toWallet: </span><span>{trade.toWallet }</span></div>
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
  trades: makeSelectTrades(),
  tradesLoading: makeSelectLoading(selectTrades),
  tradesError: makeSelectError(selectTrades),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadTrades: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadTrades());
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSurveyReducer = injectReducer({
  key: TRADES,
  reducer,
});

const withSurveySaga = injectSaga({
  key: TRADES,
  saga,
});


export default compose(
  withSurveyReducer,
  withSurveySaga,
  withConnect,
)(withStyles(styles)(Trade));
