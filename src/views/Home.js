import React, { Component } from 'react';

import Pizza from '../components/Pizza';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      pizzas: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:5000/pizzas`)
      .then(response => response.json())
      .then(pizzas => {
        console.log(pizzas);

        this.setState({
          pizzas
        })
      })
  }

  render() {
    return (
      this.state.pizzas.map(pizza => {
        return <Pizza key={pizza.id} {...pizza} ></Pizza>
      })
    );
  }
}

export default Home;
