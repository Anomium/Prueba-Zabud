import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navbar extends Component {
    render() {
        return (
            <nav>
            <div className="nav-wrapper">
                <Link className="brand-logo" to="/">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link className="nav-link" to="/regisCarro">Registrar Carro</Link></li>
                    <li><Link className="nav-link" to="/listCarros">Lista de carros</Link></li>
                    <li><Link className="nav-link" to="/login">Salir</Link></li>
                </ul>
            </div>
        </nav>
        )
    }
}
