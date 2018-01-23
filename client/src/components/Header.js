import React, { Component } from 'react';


class Header extends Component {


	render() {
		return (
			<div>
			  <nav>
			    <div className="nav-wrapper">
			      <a href="#" className="left brand-logo">&nbsp; Emaily</a>
			      <ul id="nav-mobile" class="right ">
			        <li><a href="sass.html">Login With Google</a></li>
			    
			      </ul>
			    </div>
			  </nav>
			</div>
		)
	}
}


export default Header;