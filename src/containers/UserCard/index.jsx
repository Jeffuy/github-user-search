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
		height: "min-content",
		aspectRatio: 1,
		marginLeft: "5px",

		"@media (max-width: 600px)": {
			width: "30%",
			height: "min-content",
			marginLeft: "0px",
		}
	};

	const containerStyle = {
		marginTop: "15px",
	};

	const stackStyle = {
		margin: "30px",

		"@media (max-width: 600px)": {
			margin: "0px",
		}
	};

	return (<Grid container spacing={2} sx={containerStyle}>
			<Grid container item xs={12} sm={3} lg={3} justifyContent="center">
				<Avatar alt="GitHub User" src={avatarUrl} sx={avatarStyle}/>
			</Grid>
		
		<Grid item xs={12} sm={9} lg={9} >
				<Stack direction="column" spacing={1} sx={stackStyle}>
					<PrincipalInformation userState={userState} />
					<Description userState={userState} />
				</Stack>
			</Grid>
		</Grid>
	);
};

export default UserCard;
