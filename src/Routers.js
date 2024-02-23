import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const Routers = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path = "/" element={<Home />}/>		{/*route for homepage*/}
			</Routes>
		</BrowserRouter>
	)
};

export default Routers;
