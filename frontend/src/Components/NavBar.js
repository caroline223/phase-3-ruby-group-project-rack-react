import React from 'react'
import { Link } from 'react-router-dom'


function NavBar(props) {

    const layout = {
        nav: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            height: "30px",
            padding: "35px",
            marginBottom: "30px",
        }
    };

    return (
        <nav style={layout.nav} className="navBackground">
             <Link to="/" className="navTitle">Home</Link>
             <Link to="/books" className="navTitle">Books</Link>
             <Link to="/brequests" className="navTitle">Add A Book</Link>
        </nav>
    )


}
export default NavBar;