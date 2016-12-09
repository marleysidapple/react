import React from "react"
import Article from "../components/Article";

export default class Archives extends React.Component {
	render(){
		const { query } = this.props.location;
		const { params } = this.props;
		const { date, filter} = query;

		    const Articles = [
		      "Some Article",
		      "Some Other Article",
		      "Yet Another Article",
		      "Still More",
		      "Fake Article",
		      "Partial Article",
		      "American Article",
		      "Mexican Article",
		    ].map((title, i) => <Article key={i} title={title}/> );
		
		return (
			<div>
				<h1>Archives : {params.article}</h1>
				<h4>date: {date}, filter: {filter}</h4>
				<div class="row">{Articles}</div>
			</div>
				);
	}
}