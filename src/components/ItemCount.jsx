import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/itemCount.css'

const ItemCount = ({ stock, initial })=> {
    const [counter, setCounter] = useState(initial);

    const addCount = ()=>{
        if (counter<stock) {
            setCounter(counter+1)
        }
        if (stock=0){

        }
    }

    const subCount = ()=>{
        if (counter>1) {
            setCounter(counter-1)
        }
    }

    const onAdd = ()=>{
        if (counter>0) {
            alert("Usted ha seleccionado " + counter + " productos.")
        } else{
            
        }
    }
    
    return(
        <>
            <div className="contadorContainer">
                <div className="controls">
                    <button onClick={subCount}>-</button>
                    <p>{counter}</p>
                    <button onClick={addCount}>+</button>
                </div>
                <div>
                    <button className="cartBtn" onClick={()=>onAdd(counter)}>
                        <ShoppingCartIcon sx={{ fontSize: 21 }}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;