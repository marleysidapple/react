import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	
	navigate(){
		this.props.router.push("/");
	}	

	render(){
		return (
			<div>
					<h1>sidapple.net</h1>
					{this.props.children}
					<Link to="archives">archives</Link>&nbsp;
					<Link to="settings">settings</Link>&nbsp;
					 <button onClick={this.navigate.bind(this)}>featured</button>
			</div>
			);
	}
}