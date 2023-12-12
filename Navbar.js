import logo from './images/logo.png'
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div style={{fontFamily:'arial' , fontSize:'20px'}}>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link className="navbar-bran" to="/">
          <img src={logo} alt={logo} style={{ width: '50px', height: '50px', borderRadius: '50%' ,   marginRight:'100px' }} />
           </Link>
          
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <div className="home">
              <li className="nav-item">
                <Link className="nav-link active1" to="/" aria-current="page">
                  Home <span className="visually-hidden"></span>
                </Link>
              </li>
            </div>
              
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
                style={{marginLeft:'500px' , width:'300px'}}

              />
              <button
                className="glow-on-hover"
                type="submit"
                style={{  width:'100px'}}

              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
