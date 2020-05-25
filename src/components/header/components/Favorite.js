import React, { Component } from 'react';
import favoriteImg from '../../../assets/images/favorite.svg';

class Favorite extends Component {
    render() {
        return(
            <div className="favorite">
                <img src={favoriteImg} alt="Favorite"/>
                <span>6+</span>
            </div>
        );
    }
}

export default Favorite;
