import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <img style={{
        height: '250px',
        width: '250px',
        objectFit:'cover',
        marginTop:'1rem'
    }} src={`https://image.tmdb.org/t/p/w500${this.props.src}`} />
    
    )
  }
}
