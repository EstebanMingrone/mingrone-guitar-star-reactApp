import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/navbar.css'

const CartWidget = ()=>{
    return(
        <div className='cartContainer'>
            <ShoppingCartIcon sx={{ fontSize: 40 }} className='cartIcon'/>
            <p>2</p>
        </div>
    )
}

export default CartWidget