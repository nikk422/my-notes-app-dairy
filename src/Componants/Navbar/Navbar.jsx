import "./navbar.css"
import {Link} from "react-router-dom";

const Navbar=()=>{
    return (
        <div className="navbar-container">
            <div className="navbar-header">
            <Link to="/">
                <h2 className="nav-heading">My Notes</h2>
                </Link>
                <Link to="/login">
                <i className="fa fa-user  userIcon"/>
                </Link>
            </div>
        </div>
    )
}
export default Navbar;