import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart, count감소, count증가 } from "../index";
import { nanoid } from "@reduxjs/toolkit";

export default function Product() {
	const products = useSelector((state) => state.상품들);
	const cart = useSelector((state) => state.장바구니);
	const [size, setSize] = useState("");
	const [quantity, setQuantity] = useState(1);

	const { id } = useParams();
	const product = products.find((product) => product.id === id);

	const dispatch = useDispatch();

	const plusQuantity = () => {
		setQuantity(quantity + 1);
	};

	const minusQuantity = () => {
		setQuantity(Math.max(1, quantity - 1));
	};

	// const addPluse = () => {
	// 	dispatch(
	// 		updateCart({
	// 			id: product.id,
	// 			quantity: quantity + 1,
	// 		})
	// 	);
	// };

	// const addMinus = () => {};

	const optionId = nanoid();

	return (
		<>
			<div>
				<h1>상세 페이지</h1>
				<div
					style={{
						display: "flex",
						gap: "44px",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						style={{
							width: "200px",
							height: "240px",
							backgroundColor: "#068FFF",
							color: "white",
						}}
					>
						<div>{product.name}</div>
					</div>
					<div>
						<h3>가격: {product.price} 원</h3>
						<h3>좋아요: {product.likes} 개</h3>
						<h3>구매옵션</h3>
						<select
							style={{
								width: "100px",
							}}
							onChange={(e) => {
								setSize(e.target.value);
							}}
						>
							<option value="">선택하세요</option>
							{product.options.map((option) => {
								return (
									<option key={option} value={option}>
										{option}
									</option>
								);
							})}
						</select>
						<div>구매옵션: {size}</div>
						<div style={{ display: size === "" ? "none" : "block" }}>
							<h3>개수: {quantity}</h3>
							<button onClick={plusQuantity}>+</button>
							<button onClick={minusQuantity}>-</button>
						</div>
						<h3 style={{ display: size === "" ? "none" : "block" }}>
							총 금액: {product.price * quantity} 원
						</h3>

						<button
							onClick={() => {
								if (size === "") {
									alert("옵션을 선택해주세요");
								} else {
									alert("장바구니가 추가 되었습니다");
									dispatch(
										addToCart({
											...product,
											optionId,
											size,
											quantity,
											id: nanoid(),
										})
									);
								}
							}}
						>
							장바구니 추가하기
						</button>
					</div>
				</div>
				<h1>장바구니</h1>
				<div>
					{cart.map((상품) => {
						return (
							<div
								key={상품.id}
								style={{
									border: "1px solid black",
								}}
							>
								<div>
									<h3
										style={{
											fontSize: "36px",
											color: "#068FFF",
										}}
									>
										{상품.name}
									</h3>
									<h3>가격: {상품.price} 원</h3>
									<h3>좋아요: {상품.likes} 개</h3>
									<h3>구매옵션: {상품.size}</h3>
									<h3>개수: {상품.quantity} 개</h3>
									<button
										onClick={() => {
											dispatch(count증가({ id: 상품.id }));
										}}
									>
										+
									</button>
									<button
										onClick={() => {
											dispatch(count감소({ id: 상품.id }));
										}}
									>
										-
									</button>
									<h3>총 금액: {상품.price * 상품.quantity} 원</h3>
									<button
										onClick={() => {
											console.log("Removing from cart", 상품.id);
											dispatch(removeCart({ id: 상품.id }));
										}}
									>
										장바구니 삭제
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
