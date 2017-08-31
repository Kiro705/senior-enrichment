import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar (props) {
	return (
	  <nav className="col-sm-12 no-padding">
	  	<div id="navbar" className="col-sm-12">
	  		<NavLink className="NavItem" to="/home"> <h3 className="navtext">The Space Academy</h3> </NavLink>
	    	<NavLink className="NavItem" to="/campuses"> <h5 className="navtext">Campuses</h5> </NavLink>
	    	<NavLink className="NavItem" to="/students"> <h5 className="navtext">Enrolled Students</h5> </NavLink>
	    	<div className="navright">
	    		<a className="NavItem" href="https://www.youtube.com/watch?v=ksINobeCZiE&feature=youtu.be" target="_blank">
	    			<h5 className="navtext">Demo Video</h5>
	    		</a>
	    		<a className="NavItem" href="https://github.com/Kiro705/senior-enrichment" target="_blank">
	    			<h5 className="navtext">Source Code</h5>
	    		</a>
	    	</div>
	    </div>
	  </nav>
	);
}

export default Navbar;
