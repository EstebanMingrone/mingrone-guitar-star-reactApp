import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = ()=> useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addCart = (newProduct)=>{
        const indexProduct = cartList.findIndex(product => product.id == newProduct.id)
        
        if (indexProduct == -1) {
            setCartList([
                ...cartList,
                newProduct
            ])
        } else {
            cartList[indexProduct].quantity += newProduct.quantity
            setCartList([ ...cartList ])
        }
    }

    const totalQuantity = ()=> cartList.reduce((totalQuantity, objProduct)=> totalQuantity = totalQuantity + objProduct.quantity, 0)

    const totalPrice = ()=>{
        return cartList.reduce((totalCost, objProduct)=> totalCost = totalCost + (objProduct.price * objProduct.quantity)  , 0)
    }

    const deleteItem = (itemId) =>{
        setCartList(cartList.filter(product => product.id !== itemId))
    }

    const deleteProduct = (itemId) =>{
        const indexProduct = cartList.findIndex(product => product.id == itemId)
        if (cartList[indexProduct].quantity>1) {
            cartList[indexProduct].quantity = cartList[indexProduct].quantity - 1
            setCartList( [...cartList] )
        } else {
            setCartList(cartList.filter(product => product.id !== itemId))
        }
    }

    const clearCart = ()=>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{cartList, addCart, clearCart, totalPrice, totalQuantity, deleteItem, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )
}