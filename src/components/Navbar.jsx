import LOGO from "../assets/LOGO 3.png";
import "../styles/navbar.css"
import CartWidget from "./CartWidget";

const Navbar=()=>{
    return(
        <>
        <header className="header">
            <div className="logo">
                <img src={LOGO} alt="logo"/>
            </div>
            <div className="categories">
                <ul>
                    <li>Acústicas</li>
                    <li>Eléctricas</li>
                    <li>Bajos</li>
                </ul>
            </div>
            <CartWidget/>
        </header>
        </>
    )
}

export default Navbar;