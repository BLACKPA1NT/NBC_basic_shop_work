import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";

export default function Product() {
	const [selectedOption, setSelectedOption] = useState("");

	const navigate = useNavigate();

	const [items, setItems] = useState([
		{
			id: 1,
			name: "멋진 바지",
			price: "20000",
			like: "100",
			option1: "28",
			option2: "30",
			option3: "32",
		},
		{
			id: 2,
			name: "멋진 셔츠",
			price: "10000",
			like: "200",
			option1: "small",
			option2: "medium",
			option3: "large",
		},
		{
			id: 3,
			name: "멋진 신발",
			price: "30000",
			like: "300",
			option1: "230",
			option2: "240",
			option3: "250",
			option4: "260",
			option5: "270",
		},
	]);

	const { id } = useParams();
	const itemId = parseInt(id); // 또는 const itemId = +id;
	const itemDetail = items.find((item) => item.id === itemId);
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

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
							color: "#fff",
							display: "flex",
							justifyContent: "center",
							fontWeight: "700",
						}}
					>
						상품{id}
					</div>
					<div>
						<h3>가격: {itemDetail.price}</h3>
						<h3>좋아요: {itemDetail.like}</h3>
						<h3>구매옵션</h3>
						<select
							style={{
								width: "100px",
							}}
							value={selectedOption}
							onChange={handleOptionChange}
						>
							{itemDetail.id === 1 || itemDetail.id === 2
								? [
										itemDetail.option1,
										itemDetail.option2,
										itemDetail.option3,
								  ].map((option, index) => (
										<option key={index} value={option}>
											{option}
										</option>
								  ))
								: [
										itemDetail.option1,
										itemDetail.option2,
										itemDetail.option3,
										itemDetail.option4,
										itemDetail.option5,
								  ].map((option, index) => (
										<option key={index} value={option}>
											{option}
										</option>
								  ))}
						</select>
						<p>구매옵션: {selectedOption}</p>
					</div>
				</div>
			</div>
			<footer
				style={{
					marginTop: "24px",
					display: "flex",
					justifyContent: "space-between",
					padding: "24px",
					backgroundColor: "#EEEEEE",
					color: "black",
					position: "fixed",
					bottom: "0",
					width: "100%",
					boxSizing: "border-box",
				}}
			>
				<div>문의하기</div>
				<div>SNS 채널들</div>
			</footer>
		</>
	);
}
