import React, { Component } from "react";
import "./App.css";
import Word from "./Word";

class App extends Component {
	state = {
		words: [],
		isLoaded: false,
	};

	componentDidMount() {
		setTimeout(this.fatchData, 2500);
	}
	fatchData = () => {
		fetch("data/words.json")
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					words: data.words,
					isLoaded: true,
				});
			});
	};

	render() {
		const words = this.state.words.map((word) => (
			<Word key={word.id} english={word.en} polish={word.pl} />
		));
		return (
			<ul>
				{this.state.isLoaded ? (
					words
				) : (
					<div className='isLoaded'>Pobieram dane</div>
				)}
			</ul>
		);
	}
}

export default App;
