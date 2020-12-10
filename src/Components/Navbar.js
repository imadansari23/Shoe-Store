import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link style={{textDecoration:'none'}} to="/"><h2 style={{ color: "white" }}>Shoe Store</h2></Link>
            <ul className="nav_links">
                <Link style={{textDecoration:'none'}} className="navLi" to="/" >HOME</Link>
                <Link style={{textDecoration:'none'}} className="navLi" to="products" >PRODUCTS</Link>
            </ul>
        </div>
    )
}

export default Navbar;
