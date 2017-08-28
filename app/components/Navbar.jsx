import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar (props) {
	return (
	  <nav className="col-sm-12 no-padding">
	  	<div id="navbar" className="col-sm-12">
	    	<NavLink to="/campuses"> <h3 id="navtext">The Space Academy</h3> </NavLink>
	    </div>
	  </nav>
	);
}

export default Navbar;
