import { Link } from 'react-router-dom'
import '../styles/itemCount.css'

const BuyBtn = () => {
  return (
    <>
        <Link to='/cart' >
            <div className="buyBtn">
                <button >Terminar Compra</button>
            </div>
        </Link>
    </>
  )
}

export default BuyBtn