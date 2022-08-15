import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher/index";
import getGitHubUser from "./services/users";
import UserCard from "./containers/UserCard/index";

const App = () => {
	const containerStyle = {
		background: "whitesmoke",
		width: "80vw",
		height: "max-content",
		borderRadius: "16px",
		marginTop: "40px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		overflow: "hidden",
	};

	const [inputUser, setInputUser] = useState("jeffuy");
	const [userState, setUserState] = useState('inputUser');
	// eslint-disable-next-line no-unused-vars
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

		// eslint-disable-next-line no-console
		console.log(userState);
	};

	useEffect(() => {
		gettinUser(inputUser);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputUser]);

	return (
		<Container sx={containerStyle}>
			<Searcher inputUser={inputUser} setInputUser={setInputUser} />
			<UserCard userState={userState}/>
		</Container>
	);
};

export default App;
