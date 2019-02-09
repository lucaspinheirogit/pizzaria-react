import React, { Component } from 'react';

import Pizza from '../components/Pizza';

class Home extends Component {

  render() {
    return (
      <section id='pizzas' className='container'>
        <Pizza id='1' nome='Bacon' img='pizza-bacon.jpg' preco_p='20' preco_m='25' preco_g='30' />
        <Pizza id='2' nome='Calabresa' img='pizza-calabresa.jpg' preco_p='30' preco_m='35' preco_g='40' />
      </section>
    );
  }
}

export default Home;
