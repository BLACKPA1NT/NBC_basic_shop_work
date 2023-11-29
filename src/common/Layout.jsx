import React from "react";
import { Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/Login";

export default function Layout() {
	const navigate = useNavigate();
	return (
		<>
			{/* Header */}
			<header
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "24px",
					backgroundColor: "#000000",
					color: "white",
					cursor: "pointer",
				}}
			>
				<div
					onClick={() => {
						navigate("/");
					}}
				>
					로고
				</div>
				<div
					style={{
						display: "flex",
						gap: "12px",
					}}
				>
					<div
						onClick={() => {
							navigate("/login");
						}}
					>
						로그인
					</div>
					<div
						onClick={() => {
							navigate("/signup");
						}}
					>
						회원가입
					</div>
				</div>
			</header>
			<Outlet />
			{/* footer */}
			<footer
				style={{
					marginTop: "24px",
					display: "flex",
					justifyContent: "space-between",
					padding: "24px",
					backgroundColor: "#EEEEEE",
					color: "black",
				}}
			>
				<div>문의하기</div>
				<div>SNS 채널들</div>
			</footer>
		</>
	);
}
