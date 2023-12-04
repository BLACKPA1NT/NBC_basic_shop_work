import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export default function Main() {
	const navigate = useNavigate();
	const products = useSelector((state) => state.상품들);
	return (
		<>
			<main>
				{/* 케러셀 */}
				<section
					style={{
						backgroundColor: "#4E4FEB",
						color: "white",
						height: "300px",
						lineHeight: "300px",
						textAlign: "center",
						fontSize: "24px",
					}}
				>
					케러셀
				</section>
				{/* 여름 추천템 */}
				<section
					style={{
						marginTop: "56px",
						textAlign: "center",
					}}
				>
					<h2
						onClick={() => {
							alert("이동하시겠습니까?");
							navigate("/products");
						}}
					>
						🔥 여름 추천템 🔥
					</h2>
					<Link to="/products">더보기</Link>
					<div
						style={{ display: "flex", justifyContent: "center", gap: "24px" }}
					>
						{products.map((product) => {
							return (
								<Link to={`/products/${product.id}`}>
									<div
										style={{
											width: "200px",
											height: "240px",
											backgroundColor: "#068FFF",
										}}
									>
										<div>{product.name}</div>
										<div>{product.price}</div>
									</div>
								</Link>
							);
						})}
					</div>
				</section>

				{/* 추가적인 데이터 */}
				<section
					style={{
						marginTop: "56px",
						textAlign: "center",
					}}
				>
					<h2>🔥 세일 상품 🔥</h2>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "24px",
						}}
					>
						<div
							style={{
								width: "200px",
								height: "240px",
								backgroundColor: "#EEEEEE",
							}}
						>
							상품1
						</div>
						<div
							style={{
								width: "200px",
								height: "240px",
								backgroundColor: "#EEEEEE",
							}}
						>
							상품2
						</div>
						<div
							style={{
								width: "200px",
								height: "240px",
								backgroundColor: "#EEEEEE",
							}}
						>
							상품3
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
