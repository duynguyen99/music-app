import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return(
            <div className="search-box">
                <input name="search-input" placeholder="Search..."/>
            </div>
        );
    }
}

export default SearchBox;
