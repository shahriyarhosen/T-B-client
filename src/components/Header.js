import React from "react";

// import Link
import { Link } from "react-router-dom";

// import Logo
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        {/* Authentication button */}
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="/login">
            Login
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to="signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
