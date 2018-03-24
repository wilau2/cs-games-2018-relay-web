/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
<<<<<<< HEAD
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import Wallet from '../Wallet';
import Trades from '../Trades';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <FormattedMessage {...messages.header} />
                <Trades/>
                <Wallet/>
            </div>
        );
    }
=======
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wallet from '../Wallet';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <Wallet />
      </div>
    );
  }
>>>>>>> 2c6c5d20088fe4aa86bc7e092ac09eb5beb5c839
}
