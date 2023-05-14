import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/navbar.css'
import { useCartContext } from '../context/CartContext';

const CartWidget = ()=>{
    const {totalQuantity} = useCartContext()
    return(
        <div className='cartContainer'>
            <ShoppingCartIcon sx={{ fontSize: 40 }} className='cartIcon'/>
            <p>{totalQuantity()}</p>
        </div>
    )
}

export default CartWidget