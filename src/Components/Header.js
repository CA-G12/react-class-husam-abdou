import React,{useState,useEffect, Component} from 'react';

class Header extends Component {
    render() {
        console.log(this.props.firstMove.backdrop_path,55)
        return(
            <div style={{
                width: '100wh',
                height: '100vh',
                display:'flex',
                justifyContent: 'start',
                alignItems: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${this.props.firstMove.backdrop_path})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover'
            }}>
                <div style={{
                    width: '40%',
                    height:'50vh'
                }}>
                    <h1>{this.props.firstMove.title}</h1>
                    <p>{this.props.firstMove.overview}</p>
                </div>
            </div>
       )
   }
}


export default Header;