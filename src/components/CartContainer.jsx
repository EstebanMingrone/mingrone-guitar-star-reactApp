import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

const CartContainer = ()=>{
    const { cartList, clearCart, totalPrice, totalQuantity, deleteItem, deleteProduct } = useCartContext()
    return(
        cartList.length == 0 ?
            <div>
                <h2>No hay productos</h2>
                <Link to='/'><button>Inicio</button></Link>
            </div>
        :
            <div>
                {
                    cartList.map(product =>(
                        <li key={product.id}>
                            <img src={product.img} alt="img"></img>
                            Nombre: {product.title} - Cantidad: {product.quantity}
                            <button onClick={()=> deleteProduct(product.id)}> - </button>
                            <button onClick={()=> deleteItem(product.id)}> X </button>
                        </li>
                    ))
                }
                <h3>Total: ${totalPrice()}</h3>
                <button onClick={clearCart}>Borrar todo</button>
            </div>
    )
}

export default CartContainer