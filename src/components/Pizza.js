import React, { Component } from 'react';

class Pizza extends Component {

    render() {
        var { id, nome, img, preco_p, preco_m, preco_g, } = this.props;
        return (
            <div className="pizza">
                <img src={require('../imagens/'+img)} />
                <div className="pizza-desc">
                    <div className="nome-pizza">
                        <h2>{nome}</h2>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="hidden" name="id" value={id} />
                            <h4> Pequena - R$ {preco_p} </h4>
                            <h4> Média - R$ {preco_m} </h4>
                            <h4> Grande - R$ {preco_g} </h4>
                        </div>
                        <button style={{ marginRight: '.5em' }} className="btn-primary">Comprar</button>
                        <button style={{ marginLeft: '.5em' }} className="btn-primary">+Detalhes</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Pizza;