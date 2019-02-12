import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import InputNumber from 'rc-input-number';

class Detalhes extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            img: 'placeholder.jpg',
            nome: '',
            preco_p: '',
            preco_m: '',
            preco_g: '',
            quantidade: 1
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:5000/pizzas/detalhe/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("erro");
                }
                return response.json();
            })
            .then(resposta => {
                this.setState({
                    id: id,
                    img: resposta[0].imagem,
                    nome: resposta[0].nome,
                    preco_p: resposta[0].preco_p,
                    preco_m: resposta[0].preco_m,
                    preco_g: resposta[0].preco_g
                })
            })
    }

    onChange = (value) => {
        console.log('onChange:', value);
        this.setState({ quantidade: value });
    }

    adicionaCarrinho(){
        console.log("adicionando ao carrinho");
        
        let dados = {
            id_produto: this.state.id,
            quantidade: this.state.quantidade,
            tamanho: 'grande',
            preco_unit: 22
        }

        fetch("http://localhost:5000/carrinho", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(dados)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error();
                } else {
                    return response.json();
                }
            }).then(result => {
                console.log(result); 
            })
            .catch(erro => console.log(erro));
            
    }

    render() {
        let { img, nome, preco_p, preco_m, preco_g } = this.state;
        const upHandler = (<div style={{ color: 'black' }}>+</div>);
        const downHandler = (<div style={{ color: 'black' }}>-</div>);
        return (
            <div id="detalhes" className="container">
                <div className="foto">
                    <h2>{nome}</h2>
                    <img className='img-fluid' alt='pizza' src={require('../imagens/' + img)} />
                    <p style={{ color: 'black', fontSize: '150%', padding: '1em' }}>
                        Pizza é uma preparação culinária que consiste em um disco de massa fermentada
                        de farinha de trigo, coberto com molho de tomate e os ingredientes variados
                        que normalmente incluem algum tipo de queijo, carnes preparadas ou defumadas
                         e ervas, normalmente orégano ou manjericão, tudo assado em forno
                    </p>
                </div>
                <div className="informacoes">
                    <div>
                        <h3>PEQUENA - R$ {preco_p}</h3>
                        <h3>MÉDIA - R$ {preco_m}</h3>
                        <h3>GRANDeE - R$ {preco_g}</h3>
                    </div>
                    <div className="quantidade">
                        <h3>Quantidade: </h3>
                        <InputNumber
                            min={1}
                            value={this.state.quantidade}
                            style={{ width: 100 }}
                            onChange={this.onChange}
                            upHandler={upHandler}
                            downHandler={downHandler}
                        />
                    </div>
                    <div className="button-group">
                        <button className="btn-primary">Comprar</button>
                        <button onClick={() => this.adicionaCarrinho()} className="btn-primary">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Detalhes);
