import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initialState = [
	{
		id: nanoid(),
		name: "멋진 바지",
		price: 20000,
		options: [28, 30, 32],
		likes: 100,
	},
	{
		id: nanoid(),
		name: "멋진 셔츠",
		price: 10000,
		options: ["small", "medium", "large"],
		likes: 200,
	},
	{
		id: nanoid(),
		name: "멋진 신발",
		price: 30000,
		options: [230, 240, 250, 260, 270],
		likes: 300,
	},
];

const products = createSlice({
	name: "상품들",
	initialState,
	reducers: {
		sortByPrice: (state) => {
			state.sort((a, b) => a.price - b.price);
		},
		reset: () => initialState,
	},
});

const cartProducts = createSlice({
	name: "장바구니상품들",
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			state.push(action.payload);
		},
		removeCart: (state, action) => {
			const productIdToRemove = action.payload.id;
			console.log("Removing from cart", productIdToRemove);
			return state.filter((상품) => 상품.id !== productIdToRemove);
		},

		count증가: (state, action) => {
			return state.map((상품) => {
				if (상품.id === action.payload.id) {
					return { ...상품, quantity: 상품.quantity + 1 };
				}
				return 상품;
			});
		},

		count감소: (state, action) => {
			return state.map((상품) => {
				if (상품.id === action.payload.id) {
					if (상품.quantity > 1) {
						return { ...상품, quantity: 상품.quantity - 1 };
					}
				}
				return 상품;
			});
		},
	},
});

const store = configureStore({
	reducer: {
		상품들: products.reducer,
		장바구니: cartProducts.reducer,
	},
});

export const { addToCart, removeCart, count증가, count감소 } =
	cartProducts.actions;

export const { sortByPrice, reset } = products.actions;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
