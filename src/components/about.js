import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class about extends Component {
    render() {
        return (
            <div>
                <h1>Bem Vindo a About</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}