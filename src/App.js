import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css'
import Carts from './Components/Carts';

class App extends Component {
    
    
    state = {
        result: null,
        isLoading:true
    }
    componentDidMount() {
        const getData = () => {
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=7b275ef8c426a1457421f07013981104')
                .then(data => data.json())
                .then(result => this.setState({
                    result,
                    isLoading:false
                }))
                .catch()
        }
        getData()
    }
    render() {
        console.log(this.state.result)
        if(!this.state.result) return <h1>Loading...</h1>
        return (
            <div>
                <Header firstMove={this.state.result.results[0]} />
                <Carts moves={this.state.result.results}/>
            </div>
        );
    }
}

export default App;