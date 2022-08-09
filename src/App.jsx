import React from "react";
import { Container } from "@mui/material";
import Searcher from "./components/searcher/index";

const App = () => {
	const containerStyle = {
		background: "whitesmoke",
		width: "80vw",
		height: "500px",
		borderRadius: "16px",
		marginTop: "40px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};

	return (
		<Container sx={containerStyle}>
			<Searcher />
		</Container>
	);
};

export default App;
