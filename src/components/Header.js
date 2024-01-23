import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =()=>{
    const status=useOnlineStatus();
    console.log(status);
    return (
    <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50'>
        <div className='logo-container'>
            <img className='w-56' alt="not rendered" src={LOGO_URL}></img>
        </div>
        <div className='flex items-center'>
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status: {status ? "✅" : "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4">Cart</li>
            </ul>
        </div>
    </div>
    );
}

export default Header;