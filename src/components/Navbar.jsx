import { Link, NavLink } from "react-router-dom";
import LOGO from "../assets/LOGO 3.png";
import "../styles/navbar.css"
import CartWidget from "./CartWidget";

const Navbar=()=>{
    return(
        <>
        <header className="header">
            <div className="logo">
                <NavLink to='/'><img src={LOGO} alt="logo"/></NavLink>
            </div>
            <div className="categories">
                <ul>
                    <NavLink className={({isActive})=> isActive ? 'activeCategoryBtn' : 'inactiveCategoryBtn' } to='/category/acustica'><li>Acústicas</li></NavLink>
                    <NavLink className={({isActive})=> isActive ? 'activeCategoryBtn' : 'inactiveCategoryBtn' } to='/category/electrica'><li>Eléctricas</li></NavLink>
                    <NavLink className={({isActive})=> isActive ? 'activeCategoryBtn' : 'inactiveCategoryBtn' } to='/category/bajo'><li>Bajos</li></NavLink>
                </ul>
            </div>
            <NavLink className={({isActive})=> isActive ? 'activeCategoryBtn' : 'inactiveCategoryBtn' } to='/category'><CartWidget/></NavLink>
        </header>
        </>
    )
}

export default Navbar;