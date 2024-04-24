import { LOGO_URL } from "../utils/constants";
import { useState } from "react"; // named variable
import { Link } from "react-router-dom";

const Header = () => {

  // let btnName = "Login";

  // const [btnNameReact] = useState("Login") // This is also simple js variable untile set part is not introduced
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // setBtnNameReact - function to update the variable
  // when this setBtnNameReact will change, react will re-render the Hedaer component and all the updated values will be there
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to='/'>
            Home
          </Link></li>
          {/* Using normal achor tag, never use this in react here used for demonstration purpose*/}
          <li>
            <a href="/about">About Us</a>
          </li>
          {/* always use this  */}
          <li>
            <Link to='/contact'>
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button className="Login" onClick={() => {
            // btnName = "Logout"
            btnNameReact === "Login" ?
              setBtnNameReact("Logout") :
              setBtnNameReact("Login")
            // console.log("btnName", btnName)
            console.log("btnNameReact", btnNameReact)
          }}>
            {/* {btnName} */}
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header