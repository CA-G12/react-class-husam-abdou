import React, { Component } from 'react';
class Navbar extends Component {
    render() { 
        return (
            <div style={{
                backgroundColor: '#000',
                padding:'10px 0'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent:'space-around'
                }}>
                <h1 style={{
                    color: 'rgba(255,255,255,.5',
                }}>Moves</h1>
                    <input type='saerch'  style={{
                        borderRadius: '15px',
                        border: '0',
                        paddingLeft:'1rem',
                        backgroundColor: 'rgba(255,255,255,.5)',
                        fontSize:'1.2rem'
                    }} />
                </div>
            </div>
        );
    }
}
 
export default Navbar;