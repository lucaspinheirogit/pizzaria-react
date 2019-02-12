import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import InputNumber from 'rc-input-number';

class Detalhes extends Component {

    componentDidMount() {
        fetch("http://localhost:5000/carrinho", {
            headers: {
                'Authorization': localStorage.getItem('token')
            },
        })
            .then(response => response.json())
            .then(result => console.log(result)
            );

    }

    render() {
        return (
            <h1>Carrinho</h1>
        );
    }
}

export default withRouter(Detalhes);
