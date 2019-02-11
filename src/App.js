import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Switch, Route } from 'react-router-dom';

import './css/bootstrap.min.css';
import './css/main.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';
import Login from './views/Login';
import Detalhes from './views/Detalhes';

class App extends Component {

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
              <Route exact path="/detalhes/:id" component={Detalhes} />
            </Switch>
        </main>
        <Footer />

      </div>
    );
  }
}

export default App;
