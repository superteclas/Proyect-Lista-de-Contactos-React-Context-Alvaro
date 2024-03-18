import React from "react";
import rigoImage from "../../img/react.png";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello React Router</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			Si ves este botón no se ha roto nada
		</a>
	</div>
);
