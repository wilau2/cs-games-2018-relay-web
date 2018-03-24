import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles/index';

import { createStructuredSelector } from 'reselect';
import { loadWallets } from './actions';
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

class Wallet extends React.Component { 
  // eslint-disable-line react/prefer-stateless-function
  // GABRIEL T: this and the following methods are used for wallect creation
  // followed tutorial at https://reactjs.org/docs/forms.html
  // This should probably go in a new file
  // Submitting doesn't create a new file yet. Need to add ot the wallets file. See handleSubmit()
  // I wish I knew react :')
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      currency: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({username: target.value});
    console.log(this.state);
  }
 
  handleSubmit(event) {
    // CREATE & SAVE WALLET

    alert('new submission: ' + this.state.username + ' ' + this.state.currency);
    event.preventDefault();
  }

    render() {
      return (
        <div>
        <h4>Create wallet</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Account username:
            <input style= {{ border: 'solid grey 1px'}} type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label><br />
          <label>
            Currency:
            <select name="currency" value={this.state.currency} onChange={this.handleChange}>
              <option value="PGG">PGG</option>
              <option value="CAD">CAD</option>
            </select>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        
        <button onClick={this.props.onLoadWallets} className={this.props.classes.test}>
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
                  <div><span>username: </span><span>{wallet.username }</span></div>
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
