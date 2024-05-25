import {LOGO} from "../utils/constants";
import {CART} from "../utils/constants";


const Header = () =>{
    return(
        <div className="header">
            <div className="logo-cont">
                <img className="logo" src={LOGO}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <img className="cart" src= {CART}/>
                </ul>
            </div>;

        </div>
    );
};

export default Header;