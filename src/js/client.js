import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Archives from "./pages/Archives";
import Features from "./pages/Features";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

//ReactDOM.render(<Layout/>, app);
ReactDOM.render(
				<Router history={hashHistory}>
					<Route path="/" component={Layout}>
						 <IndexRoute component={Features}></IndexRoute>
						 <Route path = "archives" component={Archives}></Route>
						 <Route path = "archives/:article" component={Archives}></Route> //with params (:article mandatory)
						 //<Route path = "archives(/:article)" component={Archives}></Route> //with params (:article optional)
						 <Route path = "settings" component={Settings}></Route>
					 </Route>
				</Router>, 
			app);