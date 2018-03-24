import { createSelector } from 'reselect';

const selectOrders = (state) => state.get('orders');

const makeSelectOrders = () => createSelector(
  selectOrders,
  (state) => state.getIn(['entity', 'orders']).toJS()
);

export {
  selectOrders,
  makeSelectOrders,
};
