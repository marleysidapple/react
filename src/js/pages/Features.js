import React from "react"
import Article from "../components/Article";

export default class Features extends React.Component {
	render(){
		const Articles = [
		"Some Article",
		"Some Article 1",
		"Some Article 2",
		"Some Article 3",
		"Some Article 4",
		"Still More",
		].map((title, i) => <Article key={i} title={title}/>);


		const adText = [
		 "Ad spot #1",
		 "Ad spot #2",
		 "Ad spot #3",
		 "Ad spot #4",
		 "Ad spot #5",
		];

		const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];

		 return (
		      <div>
		        <div class="row">
		          <div class="col-lg-12">
		            <div class="well text-center">
		              {randomAd}
		            </div>
		          </div>
		        </div>

		        <div class="row">{Articles}</div>
		      </div>
		    );
	}
}