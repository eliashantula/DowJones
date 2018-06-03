//import react, because we want to build off a React component
import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
//Example HelloWorld Component
class HelloWorld extends Component {
	//this is where you put the JSX to render on the page
	render() {
		let today = new Date().toISOString().slice(0, 10);
		return (
			<div
				style={{
					width: "100%",
					position: "fixed",
					zIndex: "1",
					paddingTop: "20px",
					backgroundColor: "white"
				}}
			>
				<h1>
					<img
						src="assets/wsj-logo.svg"
						style={{
							width: "80%",
							display: "block",
							margin: "auto"
						}}
					/>
				</h1>
				<p style={{ textAlign: "center", marginBottom: "-00px" }}>
					{" "}
					{today}
				</p>
			</div>
		);
	}
}

//this is where you can define fallbacks for any props that don't get sent
HelloWorld.defaultProps = {};

//export this, or other files can't use this
export default HelloWorld;
