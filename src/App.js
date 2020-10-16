import React, {Component} from 'react';
import {Link } from "react-router-dom";
import './index.css';
import './Register.js';

class App extends Component {

    init_localStorage() {
        localStorage.clear();
    }

    render() {

        return (
            <div  className="App">
                <div class="relative1">
                  <textBox class="textBox text"><h1>Conference Online Registration</h1></textBox>
                </div>
                <img src="cityPhoto.gif"/>
                <Link to="/register">
                <div class="relative">
                    <button class="btn register" onClick = {this.init_localStorage}>Register</button>
                  </div>
                </Link>

            </div>

        );
    }
}

export default App;