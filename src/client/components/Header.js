import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand mx-auto" to='/home'>
                        <h1 id="logo">Pizzaria</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarColor01">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a id="nav-login" className="nav-link" href="./html/login.html">Login</a>
                            </li>
                            <li className="nav-item active">
                                <a href='home' id="nav-carrinho" className="nav-link" >Meu Carrinho</a>
                            </li>
                            <li className="nav-item active">
                                <a href='home' id="nav-logout" className="nav-link" >LogOut</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="carrinho">
                    <h3>Itens do carrinho:</h3>
                    <div className="itens-carrinho"> </div>
                    <button className="btn btn-secondary">Finalizar Compra</button>
                    <div className="seta"></div>
                </div>
            </header>
        );
    }
}

export default Header;
