import { createSelector } from 'reselect';

const selectTrades = (state) => state.get('trades');

const makeSelectTrades = () => createSelector(
  selectTrades,
  (state) => state.getIn(['entity', 'trades']).toJS()
);

export {
  selectTrades,
  makeSelectTrades,
};
