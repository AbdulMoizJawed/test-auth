import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h5>Test</h5>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link to="/">Home</Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link to="/login">Login</Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link to="/signup">Signup</Link>
                            
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar