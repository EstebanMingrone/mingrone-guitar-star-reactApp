import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { addDoc, collection, getFirestore} from "firebase/firestore"
import { useState } from "react"
import '../styles/cart.css'

const Cart = ()=>{
    const [id, setId] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: ''
    })

    const { cartList, clearCart, totalPrice, deleteItem, deleteProduct } = useCartContext()

    const submitOrder = async(event)=>{
        event.preventDefault()

        const order ={
            buyer: formData, 
            items: cartList.map(({id, title, price})=> ({id, title, price})), 
            total: totalPrice()
        }
        
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        
        addDoc(queryCollection, order)
        .then(answ => setId(answ.id))
        .catch(err=> console.log(err))
        .finally(()=>{
            clearCart()
        }) 
    }

    const handleOnChange= (event)=>{
        setFormData({
            ...formData,
            [event.target.name] : event.target.value               
        })

    }
    return(
        <>
            {id && <h2 className="order"> El ID de la orden su compra es: {id}</h2>}
            {cartList.length == 0 ?
                <div className="emptyCart">
                    <h2>Carrito Vacío</h2>
                    <Link to='/'><button>Inicio</button></Link>
                </div>
            :
                <div>
                    {
                        cartList.map(product =>(
                            <div className="cartOrder">
                                <li key={product.id}>
                                    <img src={product.img} alt="img"></img>
                                    <div className="cartDesc">
                                        <p>Nombre: {product.title}  - </p>
                                        <p>Cantidad: {product.quantity}</p>
                                        <p>Precio: ${product.price}</p>
                                    </div>
                                    <div className="cartBtns">
                                        <button onClick={()=> deleteProduct(product.id)}> - </button>
                                        <button onClick={()=> deleteItem(product.id)}> X </button>
                                    </div>
                                </li>
                            </div>
                        ))
                    }
                    <div className="formContainer">
                        <button onClick={clearCart}>Borrar todo</button>
                        <h3>Total: ${totalPrice()}</h3>
                        <div className="formCart">
                            <form onSubmit={submitOrder}>
                                <h3>Nombre</h3>
                                <input type="text" name="name" placeholder="Ingrese su nombre" onChange={handleOnChange} value={formData.name}></input>
                                <h3>Teléfono</h3>
                                <input type="tel" name="tel" placeholder="Ingrese su teléfono" onChange={handleOnChange} value={formData.tel}></input>
                                <h3>E-Mail</h3>
                                <input type="email" name="email" placeholder="Ingrese su email" onChange={handleOnChange} value={formData.email}></input>
                                <h3>Repita su E-Mail</h3>
                                <input type="email" name="emailRepeat" placeholder="Repita su email" onChange={()=>{}} value={''}></input>
                                <button onClick={submitOrder}>Terminar Compra</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart