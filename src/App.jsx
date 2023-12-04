// import 하기
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import { Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

function App() {
	const products = useSelector((state) => state.상품들);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Main />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<Product />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Route>
				<Route
					path="*"
					element={
						<>
							<div>없는 페이지입니다.</div>
							<Link to="/">홈으로 이동</Link>
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
