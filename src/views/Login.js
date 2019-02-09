import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            senha: '',
            mensagem: ''
        }
    }

    enviaForm(evt) {
        evt.preventDefault();
        let dados = {
            email: this.state.email,
            senha: this.state.senha
        }
        fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
            .then(response => {
                if (!response.ok) {
                    this.setState({
                        mensagem: "Usuário e/ou senha incorretos"
                    })
                } else {
                    this.props.history.push("/");
                }
            })
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
                    <button type="submit" className="btn-secondary">Login</button>
                    <span style={{ color: 'red' }}>{this.state.mensagem}</span>
                </form>
                <h6>Ainda não é cadastrado?</h6>
                <Link to="/signin">Criar contaa</Link>
            </div>
        );
    }
}

export default withRouter(Login);
