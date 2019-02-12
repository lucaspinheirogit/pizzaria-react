import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from 'react-router-dom';

import './css/bootstrap.min.css';
import './css/main.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';
import Login from './views/Login';
import Signin from './views/Signin';
import Detalhes from './views/Detalhes';
import Carrinho from './views/Carrinho';

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      auth: localStorage.getItem('token') !== null
    }
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pizzaria - React</title>
        </Helmet>

        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/detalhes/:id" component={Detalhes} />
            <PrivateRoute authed={this.state.auth} path='/carrinho' component={Carrinho} />
          </Switch>
        </main>
        <Footer />

      </div>
    );
  }
}

export default App;
