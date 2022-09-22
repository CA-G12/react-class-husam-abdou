import { Component } from "react";
import Cart from "./Cart";

class Carts extends Component {
    render() {
        console.log(this.props.moves)
        return (
            <div style={{
                backgroundColor:'#607d8b4a',
                width: '98.8vw',
                minHeight: '100vh',
                display: 'flex',
                alignItems:'center',
                flexDirection:'column'
            }} >
                <h1>popular moves</h1>
                <div style={{
                    width: '80%',
                    height: '100%',
                    display: 'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    flexWrap:'wrap',
                }}>
                   {
                    this.props.moves.map(item=>{
                        return <Cart src={item.poster_path }/>
                    })
                   }
                </div>


            </div>
        )
    }
}

export default Carts