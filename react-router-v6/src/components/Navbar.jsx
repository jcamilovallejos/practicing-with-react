import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                //NavLink set the active class to the link
                <Link to="/" className="btn btn-outline-primary">Home</Link>
                <Link to="/about" className="btn btn-outline-primary">About Us</Link>
                <Link to="/blog" className="btn btn-outline-primary">Blog</Link>
                <Link to="/contact" className="btn btn-outline-primary">Contact Us</Link>
            </div>
        </div>
    );
}

export default Navbar;