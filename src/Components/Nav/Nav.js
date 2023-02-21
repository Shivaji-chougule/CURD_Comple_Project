import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <div>
      <header className="nav_header">
        <h1>User Data</h1>
        <Link to="/">Create User</Link>
        <Link to="/read">User Data</Link>
      </header>
    </div>
  );
}

export default Nav;
