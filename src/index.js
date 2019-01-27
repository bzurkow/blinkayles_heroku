/*

I've set my app up with react, redux and react-router.

I only use redux for my basic auth gate, but it was nice to put in regardless.

I've tried to include a little bit of everything in this app, be it react, redux, react-router, material-ui, axios, etc. I'm looking forward to talking through everything!

*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import Header from './header';
import SubHeader from './subHeader';
import SimGame from './simGame';
import SimTourney from './simTourney';
import SimGames from './simGames';
import Home from './home';

import store from './store';

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <div style={styles.all}>
          <Header />
          <SubHeader />
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/sim-game' component={SimGame}/>
          <Route path='/sim-games' component={SimGames}/>
          <Route path='/sim-tourney' component={SimTourney}/>
        </div>
      </Provider>
      )
  }
}


// Questrial is what Blink Health uses, so I used it.
const styles = {
  all: {
    fontFamily: 'Questrial, sans-serif'
  }
}

ReactDOM.render(
	<Router history={history}>
		<Route path='/' component={App} />
	</Router>,
	document.getElementById('root'));