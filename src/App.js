import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar/NavBar";

function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<Route path='/catalog' exact component={NavBar}/>
				<Route path='/promo' render={() => (
					<>
						<NavBar />
						<h1>Акции</h1>
					</>
				)}/>
			</BrowserRouter>
    </div>
  );
}

export default App;
