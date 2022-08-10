import React, {useState, useEffect} from "react";
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

	const [userState, setUserState] = useState("JeffUy");
	const [inputUser, setInputUser] = useState("userState");

	const gettinUser = async (user) => {
		const userResponse = await getGitHubUser(user)
		console.log(userResponse)
	}
	useEffect(() => {
		gettinUser(userState);
	})

	return (
		<Container sx={containerStyle}>
			<Searcher inputUser={inputUser}  setInputUser={setInputUser} />
		</Container>
	);
};

export default App;
