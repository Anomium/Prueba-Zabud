import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

export default class login extends Component {

    componentDidMount() {
        this.setState({
            navigate: false,
            regist: false
        })
        this.getLogin()
    }

    state = {
        users: [],
        userName: "",
        pass: "",
        navigate: false,
        regist: false
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
        const res = await axios.get('http://localhost:8090/api/user')
        this.setState({ users: res.data })

        this.state.users.map(user => {

            if (this.state.userName === user.userName && this.state.pass === user.pass) {

                this.setState({ navigate: null })
                console.log(this.state.navigate)
            }
        })
        //console.log(this.state.users)
    }

    handleClick = () => {
        this.setState({ navigate: true });
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
                            <form className="container justify-content center">
                                <div className="input-field">
                                    <input id="input_text" type="text" name="userName" value={this.state.userName} onChange={this.onChangeUsuario} />
                                    <label htmlFor="input_text">Usuario</label>
                                </div>
                                <div className="input-field">
                                    <input id="input_text" type="password" name="pass" value={this.state.pass} onChange={this.onChangePass} />
                                    <label htmlFor="input_text" >Contraseña</label>
                                </div>
                                <div>
                                    {this.state.navigate === null ? <Redirect to='/listCarros' /> : <p></p>}
                                    {this.state.regist ? <Redirect to='/registUser' /> : <p></p>}
                                </div>

                                <div className="row">
                                    <a className="waves-effect waves-light btn col s6" type="submit" onClick={this.getLogin}>Iniciar</a>
                                    <a className="waves-effect waves-light btn " type="submit" onClick={() => this.setState({regist: true})}>Registrar</a>
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
