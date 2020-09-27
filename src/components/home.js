import React, { Component } from 'react';

import {Link} from 'react-router-dom';

export default class home extends Component {
    render() {
        return (
            <div>
                <h1>Bem Vindo a Home</h1>
                <Link to="/about">About</Link>
            </div>
        )
    }
}
