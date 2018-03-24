import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles/index';

import { createStructuredSelector } from 'reselect';
import { loadOrders } from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { ORDERS } from './constants';
import reducer from './reducer';
import saga from './saga';
import { selectOrders, makeSelectOrders } from './selectors';
import { makeSelectLoading } from '../../asyncDisplayer/containers/IsLoading/selectors';
import { makeSelectError } from '../../asyncDisplayer/containers/HasError/selectors';
import LoadingError from '../../asyncDisplayer/components/LoadingError';


const styles = () => ({
  test: {
    border: '2px solid',
  },
});

class Order extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <button onClick={this.props.onLoadOrders} className={this.props.classes.test}>
          click here to load orders
        </button>
        <LoadingError
          loading={this.props.ordersLoading}
          error={this.props.ordersError}
          errorNode={<p>error</p>}
        >
          <div>
            {this.props.orders.map((order, index) => (
                <div>
                  <div><span>orderType: </span><span>{wallet.orderType}</span></div>
                  <div><span>price: </span><span>{wallet.price}</span></div>
                  <div><span>currency: </span><span>{wallet.currency}</span></div>
                  <div><span>quantity: </span><span>{wallet.quantity}</span></div>
                  <div><span>ownerWallet: </span><span>{wallet.ownerWallet}</span></div>
                </div>
            ))}
          </div>
        </LoadingError>
      </div>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  orders: makeSelectOrders(),
  ordersLoading: makeSelectLoading(selectOrders),
  ordersError: makeSelectError(selectOrders),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadOrders: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadOrders());
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSurveyReducer = injectReducer({
  key: ORDERS,
  reducer,
});

const withSurveySaga = injectSaga({
  key: ORDERS,
  saga,
});


export default compose(
  withSurveyReducer,
  withSurveySaga,
  withConnect,
)(withStyles(styles)(Order));
