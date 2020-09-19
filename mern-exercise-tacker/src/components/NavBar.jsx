import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg" > 
                <Link to="/"  className="nav-brand" > ExerciseTracker </Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/users" className="nav-link" >User Tracker</Link> 
                        </li>
                        <li className="navbar-item">
                            <Link to="/createExercise" className="nav-link" >Create Exercise</Link> 
                        </li>
                        <li className="navbar-item">
                            <Link to="/createUser" className="nav-link" >Create User </Link>
                        </li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default NavBar;