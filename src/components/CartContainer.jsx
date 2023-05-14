import { useCartContext } from "../context/CartContext"

const CartContainer = ()=>{
    const { cartList, clearCart } = useCartContext()
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
            <button onClick={clearCart}>Borrar todo</button>
        </>
    )
}

export default CartContainer