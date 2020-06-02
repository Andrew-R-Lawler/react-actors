import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className='header'>
                <footer style={{background: "black", color: "white"}}>&copy; React Actors</footer>
            </div>
        )
    }
}

export default Footer;