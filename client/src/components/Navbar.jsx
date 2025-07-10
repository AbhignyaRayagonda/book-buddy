import {NavLink} from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav
        style={{
            "display" : "flex",
            "justifyContent" : "space-between",
            "padding" : "30px",
            "alignItems" : "center",
            "background" : "#fffcf2",
            "boxShadow" : "0px 0.5px  8px  rgb(0,0,0, 0.8)",
            "fontFamily" : "'Trebuchet MS', sans-serif",
            "borderRadius" : "0 0 12px 12px",
            // "" : "",
            // "" : "",
            // "" : "",
            // "" : "",
            // "" : "",
            // "" : "",
            // "" : "",
            // "" : "",
        }}
        >
            <img src={logo} className="h-17 m-[-20px] ml-[-10px]" />
            <div className="flex gap-8 ml-12">
                <NavLink to="/" className={({isActive}) => isActive? "font-bold text-yellow-900" : ""}>Home</NavLink>
                <NavLink to = "/search" className={({isActive}) => isActive? "font-bold text-yellow-900" : ""}>Search</NavLink>
                <NavLink to="/library" className={({isActive}) => isActive? "font-bold text-yellow-900 " : ""}>Library</NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
            </div>

            <p>Profile</p>
        </nav>
    )
}

export default Navbar