import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import { routes } from './router';

function App() {
	const routeList = getRoutes(routes);

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
					{routeList}
				</Layout>
			</BrowserRouter>
    </div>
  );
}

export default App;
