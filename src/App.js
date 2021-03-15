import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Catalog from "./containers/Catalog/Catalog";
import Layout from "./containers/Layout/Layout";
import Promotion from './containers/Promotion/Promotion';
import Order from './containers/Order/Order';
import { api } from './services/apiServies';

function App() {
	api.getCategories();
  return (
    <div className="App">
			<BrowserRouter>
				<Layout>
					<Route path='/catalog' exact component={Catalog}/>
					<Route path='/promo' component={Promotion}/>
					<Route path='/order' component={Order}/>
				</Layout>
			</BrowserRouter>
    </div>
  );
}

export default App;
