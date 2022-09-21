import { Component } from "react";
import Cart from "./Cart";

class Carts extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: 'red',
                width: '100vw',
                minHeight: '100vh',
                display: 'flex',
                justifyContent:'center'
            }} >
                <div style={{
                    width: '80%',
                    height: '100%',
                    backgroundColor:'yellow',
                    display: 'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    flexWrap:'wrap',
                }}>
                     <Cart/>
                     <Cart/>
                     <Cart/>   
                     <Cart/>
                     <Cart/>
                </div>


            </div>
        )
    }
}

export default Carts