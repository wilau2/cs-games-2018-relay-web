import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles/index';

import { createStructuredSelector } from 'reselect';
import { loadAccounts } from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { ACCOUNTS } from './constants';
import reducer from './reducer';
import saga from './saga';
import {makeSelectAccounts, selectAccounts} from './selectors';
import { makeSelectLoading } from '../../asyncDisplayer/containers/IsLoading/selectors';
import { makeSelectError } from '../../asyncDisplayer/containers/HasError/selectors';
import LoadingError from '../../asyncDisplayer/components/LoadingError';


const styles = () => ({
  test: {
    border: '2px solid',
  },
});

class Account extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LoadingError
          loading={this.props.accountsLoading}
          error={this.props.accountsError}
          errorNode={<p>error</p>}
        >
          <div>
              <button onClick={this.props.onLoadAccounts} className={this.props.classes.test}>
                  click here to load accounts
              </button>
              {this.props.accounts.map((account, index) => (
                  <h3>Username {account.username}:</h3>
              ))}
          </div>
        </LoadingError>
      </div>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  accounts: makeSelectAccounts(),
  accountsLoading: makeSelectLoading(selectAccounts),
  accountsError: makeSelectError(selectAccounts),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadAccounts: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadAccounts());
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSurveyReducer = injectReducer({
  key: ACCOUNTS,
  reducer,
});

const withSurveySaga = injectSaga({
  key: ACCOUNTS,
  saga,
});


export default compose(
  withSurveyReducer,
  withSurveySaga,
  withConnect,
)(withStyles(styles)(Account));
