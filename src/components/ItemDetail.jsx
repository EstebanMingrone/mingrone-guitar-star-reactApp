import React, { useState } from 'react'
import ItemCount from './ItemCount'
import BuyBtn from './BuyBtn'
import { useCartContext } from '../context/CartContext'
import '../styles/itemDetail.css'

const ItemDetail = ({product}) => {
    const [finishBtn, setFinishBtn] = useState('btn')
    const { addCart } = useCartContext();

    const onAdd = (cant) =>{
        console.log(cant);
        addCart( { ...product, quantity: cant})
        setFinishBtn('finish');
    }
  
  return (
    <>
        <div className='detailsItem'>
            <div className="containerLeft">
                <img alt="productImg" src={product.img}></img>
            </div>
            <div className="containerRight">
                <div className="cardDetail">
                    <h3 className="cardTitle">{product.title}</h3>
                    <div className="cardDesc">
                        <p className="descText">{product.desc}</p>
                    </div>
                    <span className="cardCant">Cantidad: {product.stock}</span>
                    <span className="cardPrice"> U$D {product.price}</span>
                </div>
                {
                    finishBtn == 'btn' ?
                        <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                    :
                        <BuyBtn/>
                }
            </div>
        </div>
    </>
  )
}

export default ItemDetail