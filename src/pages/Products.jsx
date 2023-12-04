import React from "react";
import { useSearchParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sortByPrice } from "../index";

export default function Products() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.상품들);
	const [searchParams, setSearchParams] = useSearchParams();
	console.log({ searchParams: searchParams.get("sort") });
	const navigate = useNavigate();
	return (
		<>
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
				<div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
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
				<button
					onClick={() => {
						dispatch(sortByPrice());
					}}
				>
					가격순정렬
				</button>
			</section>
		</>
	);
}
