import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import { typicalRoutes, singularRoutes } from './router';

function App() {
	const routeList = getRoutes(typicalRoutes);
	const singularRouteList = getRoutes(singularRoutes);

	function getRoutes(config) {
		return config.map(route => {
			return <Route
				key={route.ref}
				path={route.ref}
				component={route.component}/>;
		});
	}

  return (
    <div className="App">
			<BrowserRouter>
				<Layout>
					<Switch>
						{singularRouteList}
						{routeList}
					</Switch>
				</Layout>
			</BrowserRouter>
    </div>
  );
}

export default App;
