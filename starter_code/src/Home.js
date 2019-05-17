import React from 'react';
import { Link, NavLink } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <ul>
                    <li><NavLink to="/beers"><div><img src="./img/beers.png" /><h1>All Beers</h1><p>lorem ipsum...</p></div></NavLink></li>
                    <li><NavLink to="/random-beer">Random Beer</NavLink></li>
                    <li><NavLink to="/new-beer">New Beer</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Home;
