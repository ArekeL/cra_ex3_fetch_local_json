import React from "react";
import "./Word.css";

const Word = (props) => (
	<li>
		<p>
			<strong>{props.polish}</strong> w języku angielskim to:{" "}
			<strong>{props.english}</strong>
		</p>
	</li>
);
export default Word;
