/* eslint-disable react/prop-types */
import { Grid, CardMedia } from "@mui/material";
import React from "react";

const UserCard = (props) => {
	const { userState } = props;
	const avatarUrl = userState.avatar_url;

	return (
		<Grid container>
			<Grid item xs={3}>
				<CardMedia
					component="img"
					alt="GitHub User"
					image={avatarUrl}
				/>
			</Grid>
			<Grid item xs={9} />
		</Grid>
	);
};

export default UserCard;
