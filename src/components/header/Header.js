import React, { Component } from 'react';
import Logo from './components/Logo';
import SearchBox from './components/SearchBox';
import Favorite from './components/Favorite';

class Header extends Component {
    render() {
        return(
            <header className="header">
                <div className="container">
                    <Logo />
                    <SearchBox />
                    <Favorite />
                </div>
            </header>
        );
    }
}

export default Header;
