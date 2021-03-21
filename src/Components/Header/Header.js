import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import 'firebase/auth';
import { isLoggedIn, loggedInInfo } from '../Login/Manager';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const isLogged = isLoggedIn();

    const signOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
    };

    const loggedUser = loggedInInfo()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <h1 className="header">Your Rider</h1>
    <a className="name" href="#"><b>Choose your rider</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
                        <Link style={{ textDecoration: 'none' }} to="/home"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Home </p>
                        </li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/Blog"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Blog </p>
                        </li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/Destination"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Destination </p>
                        </li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/Contact"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Contact </p>
                        </li></Link>
                        
                        {
                            loggedInUser.email || isLogged ? <button style={{ textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-info btn-info" onClick={signOut}>Sign Out, {loggedInUser.name || loggedUser.name ? loggedInUser.name || loggedUser.name : loggedInUser.displayName || loggedUser.displayName}</button> :
                                <Link to="/login"><button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-info btn-info">Sign In</button></Link>
                        }
                    </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;