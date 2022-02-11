import {NavLink} from "react-router-dom";
import "../assets/styles/sidebar.css"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <NavLink className="sidebar__link" to="/">
                Home
            </NavLink>
            <NavLink className="sidebar__link" to='/about'>
                About us
            </NavLink>
        </div>
    )
}

export default Sidebar