import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

var gif = require('../imagens/gif/loading.svg')

class Login extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            email: '',
            senha: '',
            mensagem: ''
        }
    }

    enviaForm(evt) {
        evt.preventDefault();
        this.setState({
            loading: true
        })
        let dados = {
            email: this.state.email,
            senha: this.state.senha
        }
        fetch("http://localhost:5000/signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
            .then(response => {
                this.setState({
                    loading: false
                })
                if (!response.ok) {
                    throw new Error();
                } else {
                    return response.json();
                }
            }).then(token => {
                localStorage.setItem("token", token)
                this.props.history.push("/");
            })
            .catch(erro => this.setState({
                mensagem: "Usuário já existe"
            }))
    }

    setValue(event, input) {
        this.setState({
            [input]: event.target.value,
            mensagem: ''
        })
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={(evt) => this.enviaForm(evt)}>
                    <h3>Cadastro</h3>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input onChange={(evt) => this.setValue(evt, 'email')} type="email" className="form-control" id="email" name="email" placeholder="Digite seu email..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha: </label>
                            <input onChange={(evt) => this.setValue(evt, 'senha')} type="password" className="form-control" id="senha" name="senha" placeholder="Digite sua senha..." />
                        </div>
                    </fieldset>
                    <button type="submit" className={this.state.loading ? 'hidden' : 'show btn-secondary'}>Criar conta</button>
                    <img alt="loading gif..." src={gif} className={this.state.loading ? 'show' : 'hidden'} />
                    <span style={{ color: 'red' }}>{this.state.mensagem}</span>
                </form>
                <Link to="/"><h5>Voltar</h5></Link>
            </div>
        );
    }
}

export default withRouter(Login);
