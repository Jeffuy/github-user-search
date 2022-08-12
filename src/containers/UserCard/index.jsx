/* eslint-disable react/prop-types */
import { Grid, Avatar, Stack } from "@mui/material";
import React from "react";
import PrincipalInformation from "../../components/PrincipalInformation";
import Description from "../Description";

const UserCard = (props) => {
	const { userState } = props;
	const avatarUrl = userState.avatar_url;

	const avatarStyle = {
		width: "100%",
		height: "auto",
		marginLeft: "5px",
	};

	const containerStyle = {
		marginTop: "15px",
	};

	const stackStyle = {
		margin: "30px"
	}

	return (
		<Grid container spacing={2} sx={containerStyle}>
			<Grid item xs={3}>
				<Avatar alt="GitHub User" src={avatarUrl} sx={avatarStyle} />
			</Grid>
			<Grid item xs={9}>
				<Stack direction="column" spacing={1} sx={stackStyle}>
					<PrincipalInformation userState={userState} />
					<Description userState={userState} />
				</Stack>
			</Grid>
		</Grid>
	);
};

export default UserCard;