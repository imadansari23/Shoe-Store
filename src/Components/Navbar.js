import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <h2 style={{ color: "white" }}>Shoe Store</h2>
            <ul className="nav_links">
                <Link className="navLi" to="/" >HOME</Link>
                <Link className="navLi" to="products" >PRODUCTS</Link>
                <Link className="navLi" to="cart" >CART(0)</Link>
            </ul>
        </div>
    )
}

export default Navbar;
