import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-row">
          <h1>YourBanK</h1>

          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">About</a>
            </li>

            <li>
              <a href="">Security</a>
            </li>
          </ul>

          <div className="signup">
            <p>Sign Up </p>
            <button>Login</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
