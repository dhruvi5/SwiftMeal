import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { CART } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
// const b = "Login";
// const c = "Logout";

const Header = () => {
  const [log_i, set_log] = useState("Login");
  return (
    <div className="header">
      <div className="logo-cont">
        <img className="logo" src={LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            {/* //never use an anchor tag */}
            <a href="/about">ABOUT US</a>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <img className="cart" src={CART} />
          <button
            className="login"
            onClick={() => {
              set_log("Logout");
            }}
          >
            {log_i}
          </button>
        </ul>
      </div>
      ;
    </div>
  );
};

export default Header;
