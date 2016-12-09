import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Archives from "./pages/Archives";
import Features from "./pages/Features";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Todos from "./pages/Todos";

const app = document.getElementById('app');

//ReactDOM.render(<Layout/>, app);
ReactDOM.render(
				<Router history={hashHistory}>
					<Route path="/" component={Layout}>
						 <IndexRoute component={Features}></IndexRoute>
						 <Route path = "archives" component={Archives}></Route>
						 <Route path = "archives(/:article)" component={Archives}></Route>
						 <Route path = "settings" component={Settings}></Route>
						 <Route path = "todos" component={Todos}></Route>
					 </Route>
				</Router>, 
			app);