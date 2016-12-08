import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
	
	navigate(){
		this.props.router.push("/");
	}	

	render(){

		const { location } = this.props;
		const containerStyle = {
			marginTop: "60px"
			//or "margin-top": "60px"
		};

		//console.log(this.props.router.isActive("archives"));
		return (
			/*<div>
					<h1>sidapple.net</h1>
					{this.props.children}
					<Link to="archives" activeClassName="test">archives</Link>&nbsp;
					<Link to="settings">settings</Link>&nbsp;
					 <button onClick={this.navigate.bind(this)}>featured</button>
			</div>*/
			 <div>

        <Nav location={location} />

		        <div class="container" style={containerStyle}>
		          <div class="row">
		            <div class="col-lg-12">
		              <h1>Sid.com</h1>

		              {this.props.children}

		            </div>
		          </div>
		          <Footer/>
		        </div>
		      </div>
			);
	}
}