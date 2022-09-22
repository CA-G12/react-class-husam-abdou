import React,{useState,useEffect, Component} from 'react';

class Header extends Component {
    render() {
        return(
            <div style={{
                width: '100wh',
                height: '100vh',
                display:'flex',
                justifyContent: 'start',
                alignItems: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${this.props.firstMove.backdrop_path}?)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover'
            }}>
                <div style={{
                    width: '40%',
                    height:'50vh'
                }}>
                    <h1 style={{ marginLeft: '5px' }}>{this.props.firstMove.title}</h1>
                    <p style={{ marginLeft: '5px' }}>{this.props.firstMove.overview}</p>
                </div>
            </div>
       )
   }
}


export default Header;