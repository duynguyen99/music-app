import React, { Component } from 'react';
import logoImg from '../../../assets/images/logo.png';

class Logo extends Component {
    render() {
        return(
            <h1 className="logo">
                <a href="/#">
                    <img src={logoImg} alt="My Music"/>
                </a>
            </h1>
        );
    }
}

export default Logo;
