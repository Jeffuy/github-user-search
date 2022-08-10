import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Searcher from "./components/searcher/index";
import getGitHubUser from "./services/users";

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

	const [inputUser, setInputUser] = useState("jeffuy");
	const [userState, setUserState] = useState(inputUser);
	const [notFound, setNotFound] = useState(false);

	const gettinUser = async (user) => {
		const userResponse = await getGitHubUser(user);

		if (userState.toLowerCase === "jeffuy") {
			localStorage.setItem("jeffuy", userResponse);
		}

		if (userResponse.message === "Not Found") {
			const { jeffuy } = localStorage;
			setInputUser(jeffuy);
			setNotFound(true);
		} else {
			setNotFound(false);
			setUserState(userResponse);
		}

		console.log(userState);
	};

	useEffect(() => {
		gettinUser(inputUser);
	}, [inputUser]);

	return (
		<Container sx={containerStyle}>
			<Searcher inputUser={inputUser} setInputUser={setInputUser} />
		</Container>
	);
};

export default App;
