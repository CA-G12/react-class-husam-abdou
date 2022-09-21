import React, { Component } from 'react';
import Header from './component/Header';
import './App.css'
import Carts from './Components/Carts';

class App extends Component {

    render() { 
        return (
            <div>
                <Header />
                <Carts/>
            </div>
        );
    }
}

export default App;