import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css'
import Carts from './Components/Carts';

class App extends Component {


    state = {
        result: [],
        pageNumber: 1
    }
    componentDidMount() {
        const getData = () => {
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=7b275ef8c426a1457421f07013981104')
                .then(data => data.json())
                .then(result => this.setState({
                    result: result.results,
                }))
                .catch()
        }
        getData()
    }
    componentDidUpdate(_, prevState) {
        const getData = () => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7b275ef8c426a1457421f07013981104&page=${this.state.pageNumber}`)
                .then(data => data.json())
                .then(data => {
                    if (this.state.pageNumber !== prevState.pageNumber) {
                        this.setState({
                            result: [...this.state.result, ...data.results],
                        })
                    }
                })

                .catch()
        }

        getData()
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            pageNumber: this.state.pageNumber + 1
        })
    }
    render() {
        if (!this.state.result.length) return <h1>Loading...</h1>
        return (
            <div>
                <Header firstMove={this.state.result[0]} />
                <Carts moves={this.state.result} />
                <div style={{
                    display: 'flex',
                    alignContent:'center',
                    justifyContent:'center'
                }} >
                    <button
                        style={{
                            padding:'.5rem 1rem',
                            backgroundColor:'gray' 
                            // width: "100%",
                        }}
                        onClick={this.handleClick} > More </button>
                </div>
            </div>
        );
    }
}

export default App;