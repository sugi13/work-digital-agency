import { Link } from "react-router-dom";
import '../App.css';

export const Navbar = () =>{
    return(
      <div className="nav">
        <div className="brand">
            <h1>Work</h1>
        </div>
        <div className="nav-link">
            <li>
              <Link to= '/' className="Link">Home</Link>
            </li>
            <li>
              <Link to = '/AboutUs' className="Link">What We do</Link>
            </li>
            <li>
              <Link to= '/Signup' className="Link">Sign up</Link>
            </li>
        </div>
      </div>
    )
}