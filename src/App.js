import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Switch, Route } from 'react-router-dom';

import './client/css/bootstrap.min.css';
import './client/css/main.css';

import Header from './client/components/Header';
import Footer from './client/components/Footer';

import Home from './client/views/Home';

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
