import React from "react";


export default class Todo extends React.Component{

	constructor(props) {
		super();
	}


	render(){
		return(
			<li>
				{this.props.text}
			</li>
			)
	}
}