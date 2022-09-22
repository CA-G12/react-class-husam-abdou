import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css'
import Carts from './Components/Carts';
import Navbar from './Components/Navbar';



class App extends Component {


    state = {
        result: [],
        pageNumber: 1,
        name:''
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
                    this.setState({
                        ...this.state,
                        result: [...this.state.result, ...data.results],
                    })
                })
                
                .catch()
            }
            if (this.state.pageNumber !== prevState.pageNumber) {
                getData()
            }
        const search = () => {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=7b275ef8c426a1457421f07013981104&query=${this.state.name}`)
                .then(data => data.json())
                .then(data => {
                    console.log(data.results, 2)
                    if (data.results.length)
                    {
                        this.setState({
                            ...this.state,
                            result: data.results,
                        })
                        
                    } else
                    {
                        this.setState({
                            ...this.state,
                            result: 'not Found',
                        })
                    }
                })
                .catch()
            }
            if (this.state.name !== prevState.name && this.state.name)
            {
                search()
            }
        }
    

    handleClick = () => {
        this.setState({
            ...this.state,
            pageNumber: this.state.pageNumber + 1
        })
    }

    handleName = (e) => {
        this.setState({
            ...this.state,
            name:e.target.value
        })
    }
    render() {
        if (!this.state.result.length) return <h1>Loading...</h1>
        return (
            <div>
                <Navbar state={this.state} setState={this.handleName} />
                {this.state.result == 'not Found' ? 'Not Found' : (
                <>
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
                    </>
                    )} 
                
            </div>
        );
    }
}

export default App;