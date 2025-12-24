import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-row">
        <h1>YourBanK</h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/security"}>Security</Link>
          </li>
        </ul>

        <div className="signup">
          <p>Sign Up </p>
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
