import React from "react";
import { Link } from "react-router-dom";
import styled from "./Navbar.module.css";
import logo1 from "../icones/logo1.png";

const Navbar = () => {
  return (
    <div className={styled.navbar}>
      <div className={styled.navbarInnerDiv}>
        <div>
          <img src={logo1} alt="Logo" className={styled.Logo} />
        </div>
        <div className={styled.navbarLinks}>
          <Link to="/" className={styled.navLinks}>
            Fitness
          </Link>

          <Link to="/" className={styled.navLinks}>
            Nutrition
          </Link>

          <Link to="/" className={styled.navLinks}>
            Gyms
          </Link>

          <Link to="/" className={styled.navLinks}>
            Become WTF Partner
          </Link>

          <Link to="/" className={styled.navLinks}>
            About Us
          </Link>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
