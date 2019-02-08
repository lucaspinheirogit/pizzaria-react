import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <p className="sobre">
                    Projeto feito por hobby, para desenvolver minhas habilidades tanto em Front-end quanto em Back-end. <br /><br />
                    O Front-end foi feito usando JavaScript Vanilla, HTML, CSS, BootsTrap4 e um pouco de JQuery. <br />
                    O Back-end foi feito usando Node.Js e alguns pacotes como express, cors, morgan , jwt, mysql, etc... <br /><br />
                    Todo o conteúdo (as pizzas) são trazidas de um banco de dados MySql e exibidas dinamicamente nas páginas.
            <br />
                    O site possui cadastro, login e autorização, para efetuar uma compra e acessar certas páginas, é necessário
            estar logado. <br />
                    Apesar do Back-end desse projeto ter sido um desafio com diversas tecnologias novas pra mim, eu,
            pessoalmente, gostei mais de ter feito o Front-end. <br /><br />
                    Todo o design foi feito pensando em um tema mais sombrio, pra combinar com uma pizzaria mais moderna.<br />
                    Apesar de nunca ter me interessado muito por essa área de UX/UI Design, sempre foco em deixar minhas
            páginas bonitas (e responsivas). <br /><br />
                    Enfim, caso queira conhecer mais profundamente a pessoa por trás de tudo isto, e/ou o código-fonte do
                    projeto:
        </p>
                <ul id="redes-sociais">
                    <li id="portfolio"><a target="_blank" href="#">Portfólio</a></li>
                    <li id="email">lucaspinheiroifsul@gmail.com</li>
                    <li id="celular">(51) 99935-1344</li>
                    <li id="github"><a target="_blank" href="https://github.com/lucaspinheirogit">GitHub</a></li>
                    <li id="linkedin"><a target="_blank" href="https://www.linkedin.com/in/lucas-pinheiro-aab282166/">LinkedIn</a></li>
                </ul>
                <p style={{ fontSize: '170%' }}>Desenvolvido por Lucas Pinheiro&copy;</p>
            </footer>
        );
    }
}

export default Footer;
