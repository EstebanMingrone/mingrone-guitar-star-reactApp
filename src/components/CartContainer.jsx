import { useCartContext } from "../context/CartContext"

const CartContainer = ()=>{
    const { cartList, clearCart, totalPrice } = useCartContext()
    return(
        <>
            {
                cartList.map(product =>(
                    <li key={product.id}>
                        <img src={product.img} alt="img"></img>
                        Nombre: {product.title} - Cantidad: {product.quantity}
                    </li>
                ))
            }
            <h3>Total: ${totalPrice()}</h3>
            <button onClick={clearCart}>Borrar todo</button>
        </>
    )
}

export default CartContainer