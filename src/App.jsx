import React, {useState} from "react";
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

	const [userState, setUserState] = useState("octocat");
	const [inputUser, setInputUser] = useState("userState");

	return (
		<Container sx={containerStyle}>
			<Searcher inputUser={inputUser}  setInputUser={setInputUser} />
		</Container>
	);
};

export default App;
