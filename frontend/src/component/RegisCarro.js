import React, { Component } from 'react'
import Navbar from './navbar'
import axios from 'axios'

export default class RegisCarro extends Component {

    componentDidMount() {
        this.getCarros()
    }

    state = {
        carros: [],
        id: "9",
        url: "",
        marca: "",
        precio: "",
        edit: false
    }

    getCarros = async () => {
        const res = await axios.get('http://localhost:8090/api/carro')
        this.setState({ carros: res.data })
        console.log(this.state.carros)
    }

    onChangeImage = (e) => {
        const url = e.target.value
        this.setState({ url })
    }

    onChangeMarca = (e) => {
        const marca = e.target.value
        this.setState({ marca })
    }

    onChangePrice = (e) => {
        const precio = e.target.value
        this.setState({ precio })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.edit) {
            this.editCarro()
            this.setState({
                url: '',
                marca: '',
                precio: '',
                edit: false
            })
        } else {
            await axios.post('http://localhost:8090/api/carro', {
                url: this.state.url,
                marca: this.state.marca,
                precio: this.state.precio
            })
            this.getCarros()
            this.setState({
                url: '',
                marca: '',
                precio: ''
            })
        }

    }

    editCarro = async () => {
        const updateCarro = {
            id: this.state.id,
            url: this.state.url,
            marca: this.state.marca,
            precio: this.state.precio
        }
        console.log(updateCarro)
        await axios.put(`http://localhost:8090/api/carro/` + this.state.id, updateCarro)
        this.getCarros()
    }

    ediVa = (id1, url1, marca1, precio1) => {
        this.setState({
            id: id1,
            url: url1,
            marca: marca1,
            precio: precio1,
            edit: true
        })
    }

    editCancel = () => {
        this.setState({
            id: '',
            url: '',
            marca: '',
            precio: '',
            edit: false
        })
    }

    deleteCarro = async (id) => {
        await axios.delete(`http://localhost:8090/api/carro/${id}`)
        this.getCarros()
    }
    render() {
        return (
            <div className="row">
                <Navbar/>
                <form onSubmit={this.onSubmit} className="col s12 m3 l4">
                    <div className="input-field col s11 m10 l10">
                        <input id="input_text" type="text" name='marca' value={this.state.marca} onChange={this.onChangeMarca} required />
                        <label htmlFor="input_text">Marca</label>
                    </div>
                    <div className="input-field col s11 m10 l10">
                        <input id="input_text" type="text" name='precio' value={this.state.precio} onChange={this.onChangePrice} required />
                        <label htmlFor="input_text">Precio</label>
                    </div>
                    <div className="input-field col s11 m10 l10">
                        <input id="input_text" type="text" name='url' value={this.state.url} onChange={this.onChangeImage} />
                        <label htmlFor="input_text">Url</label>
                    </div>
                    <div className="col s8 m6 l6 offset-s4 offset-m3 offset-l6">
                        <button className="waves-effect waves-light btn" type="submit">Guardar</button>
                    </div>
                </form>
                <table className="table table-hover">
                    <thead>
                        <tr className="row">
                            <th className="col s2">Carro</th>
                            <th className="col s4">Marca</th>
                            <th className="col s4">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.carros.map(carro => (
                                <tr key={carro.id} onDoubleClick={() => this.deleteCarro(carro.id)} className="row">
                                    <img src={carro.url} className="col s2"></img>
                                    <td className="col s4" >{carro.marca}</td>
                                    <td className="col s4" >{carro.precio}</td>
                                    <td className="col s1" ><a className="waves-effect waves-light btn" onClick={() => this.ediVa(carro.id, carro.url, carro.marca, carro.precio)}>Editar</a></td>
                                    <td className="col s1" ><a className="waves-effect waves-light btn" onClick={() => this.editCancel()}>Cancelar</a></td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}