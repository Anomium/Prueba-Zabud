import React, { Component } from 'react'
import axios from 'axios'
import Carro from './carro'
import Navbar from './navbar'

export default class listar extends Component {

    state = {
        carros: []
    }

    componentDidMount() {
        this.getCarros()
    }

    getCarros = async () => {
        const res = await axios.get('http://localhost:8090/api/carro')
        this.setState({ carros: res.data })
        console.log(this.state.carros)
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="row">
                <div>
                    {
                        this.state.carros.map(carro => (
                            <Carro
                                key={carro._id}
                                imgCard={carro.url}
                                titleCard={carro.marca}
                                priceCard={carro.precio}
                            />
                        ))

                    }
                </div>
            </div>
            </div>
        )
    }
}
