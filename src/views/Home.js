import React, { Component } from 'react';

import Pizza from '../components/Pizza';
var gif = require('../imagens/gif/loading.svg')

class Home extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      pizzas: []
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    fetch(`http://localhost:5000/pizzas`)
      .then(response => response.json())
      .then(pizzas => {
        console.log(pizzas);

        this.setState({
          pizzas,
          loading: false
        })
      })
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <img alt="loading gif..." src={gif} className={this.state.loading ? 'show' : 'hidden'} />
        <section id='pizzas' className={this.state.loading ? 'hidden' : 'show container'}>
          {this.state.pizzas.map(pizza => {
            return <Pizza key={pizza.id} {...pizza} ></Pizza>
          })}
        </section>
      </div>
    );
  }
}

export default Home;
