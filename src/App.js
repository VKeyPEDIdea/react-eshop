import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Catalog from "./containers/Catalog/Catalog";
import Layout from "./containers/Layout/Layout";
import Promotion from './containers/Promotion/Promotion';
import Order from './containers/Order/Order';

function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<Layout>
					<Route path='/catalog' component={Catalog}/>
					<Route path='/promo' component={Promotion}/>
					<Route path='/order' component={Order}/>
				</Layout>
			</BrowserRouter>
    </div>
  );
}

export default App;
