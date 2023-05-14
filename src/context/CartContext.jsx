import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = ()=> useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addCart = (newProduct)=>{
        setCartList([
            ...cartList,
            newProduct
        ])
    }

    const clearCart = ()=>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{cartList, addCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}