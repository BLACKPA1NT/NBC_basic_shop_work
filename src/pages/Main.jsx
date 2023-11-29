import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Main() {
	const navigate = useNavigate();

	const [items, setItems] = useState([
		{
			id: 1,
			name: "멋진 바지",
			price: "20000",
			like: "100",
		},
		{
			id: 2,
			name: "멋진 셔츠",
			price: "10000",
			like: "200",
		},
		{
			id: 3,
			name: "멋진 신발",
			price: "30000",
			like: "300",
		},
	]);

	const addNewItem = () => {
		const newItem = {
			id: items.length + 1,
			name: "새 상품",
			price: "0",
			like: "0",
		};
		setItems([...items, newItem]);
	};
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
					<div
						style={{ display: "flex", justifyContent: "center", gap: "24px" }}
					>
						{items.map((item) => (
							<Link
								key={item.id}
								to={{
									pathname: `/products/${item.id}`,
									state: { product: item },
								}}
							>
								<div
									style={{
										width: "200px",
										height: "240px",
										backgroundColor: "#068FFF",
										color: "#fff",
										display: "flex",
										justifyContent: "center",
										fontWeight: "700",
									}}
								>
									{item.name} <br />
									{item.price}원
								</div>
							</Link>
						))}
						<Link to="/products">더보기</Link>
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
			;
		</>
	);
}
