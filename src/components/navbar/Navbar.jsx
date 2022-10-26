import React from "react";
import { Link } from "react-router-dom";


import "./Navbar.css";
function Navbar() {


  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/produkt">
        Porodukt
      </Link>
      <Link className="link" to="/reg">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;
