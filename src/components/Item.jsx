import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"


const Item = ({product})=>{
    return(
        <div className='cardItems'>
            <div className='cardImg'>
                <img src={product.img} alt='image'></img>
            </div>
            <div className='cardDetail'>
                <h2 className='cardTitle'>{product.title}</h2>
                <p className='descText'>{product.desc}</p>
                <span className='cardCant'>Stock: {product.stock}</span>
                <span className='cardPrice'>{product.price} $USD</span>
            </div>
            <div className="btnDetailsCont">
                {/*<ItemCount stock={product.stock} initial={1}/>*/}
                <Link to={`/detail/${product.id}`}><button className='btnDetails'>+ Detalles</button></Link>
            </div>
        </div>
    )
}

export default Item