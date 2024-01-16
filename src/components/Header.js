import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header =()=>{
    return (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' alt="not rendered" src={LOGO_URL}></img>
        </div>
        <div className='nav-items'>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
}

export default Header;