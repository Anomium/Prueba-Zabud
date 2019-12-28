import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class RegisUser extends Component {

    state = {
        users: [],
        userName: "",
        pass: "",
        navigate: false
    }

    onChangeUsuario = (e) => {
        const userName = e.target.value
        this.setState({ userName })
    }

    onChangePass = (e) => {
        const pass = e.target.value
        this.setState({ pass })
    }

    getLogin = async () => {
        const res = await axios.post('http://localhost:8090/api/user', {
            userName: this.state.userName,
            pass: this.state.pass
        })
        this.setState({
            userName: '',
            pass: ''
        })
        console.log(res)
    }


    render() {
        return (
            <div>
                <div div className="row"></div>
                <div div className="row"></div>
                <div className="row">
                    <div className="col s4 m4 l4"></div>
                    <div className="col s6 m4 l3">
                        <div className="card-panel ">
                            <h1>Registrar</h1>
                            <form className="container justify-content center">
                                <div className="input-field">
                                    <input id="input_text" type="text" name="userName" value={this.state.userName} onChange={this.onChangeUsuario} />
                                    <label htmlFor="input_text" required>Usuario</label>
                                </div>
                                <div className="input-field">
                                    <input id="input_text" type="password" name="pass" value={this.state.pass} onChange={this.onChangePass} />
                                    <label htmlFor="input_text" required>Contraseña</label>
                                </div>
                                <div>
                                    {this.state.navigate === true ? <Redirect to='/login' /> : <p></p>}
                                </div>

                                <div className="row">
                                    <a className="waves-effect waves-light btn col s6" type="submit" onClick={this.getLogin}>Guardar</a>
                                    <a className="waves-effect waves-light btn" type="submit" onClick={() => this.setState({navigate: true})}>Regresar</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col s4 m4 l3"></div>
                </div>
                <div div className="row"></div>
            </div>
        )
    }
}
