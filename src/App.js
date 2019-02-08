import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Switch, Route } from 'react-router-dom';

import './css/bootstrap.min.css';
import './css/main.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';

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
            </Switch>
        </main>
        <Footer />

      </div>
    );
  }
}

export default App;
