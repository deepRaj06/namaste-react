import { LOGO_URL } from "../utils/constants";
import { useState } from "react"; // named variable
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {

  // let btnName = "Login";

  // const [btnNameReact] = useState("Login") // This is also simple js variable untile set part is not introduced
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // setBtnNameReact - function to update the variable
  // when this setBtnNameReact will change, react will re-render the Hedaer component and all the updated values will be there

  // onlinestatus

  const onlineStatus = useOnlineStatus();

  // getting data from UserContext, to get data from UserContext we need to pass UserContext in useContext
  // we can have as many context as many we want 
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:lg-green-50">
      <div className="logo-container">
        <img
          className="w-56"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4"> 
            {/* <Link to='/'> */}
              Online Status: {onlineStatus ? '🟢' : '🔴'}
            {/* </Link> */}
          </li>
          <li className="px-4"> <Link to='/'>
            Home
          </Link></li>
          {/* Using normal achor tag, never use this in react here used for demonstration purpose*/}
          <li className="px-4">
            <a href="/about">About Us</a>
          </li>
          {/* always use this  */}
          <li className="px-4">
            <Link to='/contact'>
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to='/grocery'>
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>
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

          {/* logged in user info */}
          <li className="px-4">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header