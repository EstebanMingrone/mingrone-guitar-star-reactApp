import React from 'react'
import ItemCount from './ItemCount'
import '../styles/itemDetail.css'

const ItemDetail = ({product}) => {
  const onAdd = (cant) =>{
    console.log(cant)
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
            
                <div className="btns">
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemDetail