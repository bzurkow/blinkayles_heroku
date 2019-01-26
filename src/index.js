//import React from 'react';
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