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
            marginBottom: "20px",
        }
    };

    return (
        <nav style={layout.nav}>
             <Link to="/" >Home</Link>
             <Link to="/books">Books</Link>
             <Link to="/authors">Authors</Link>
        </nav>
    )


}
export default NavBar;