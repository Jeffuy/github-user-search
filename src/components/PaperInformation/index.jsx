/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const PaperInformation = (props) => {
	const { userState } = props;
	const { public_repos, followers, following } = userState;

	const mainStackStyle = {
		justifyContent: "space-evenly",
		margin: "20px",
	};

	const mainFontSize = {
		fontSize: {
			lg: 30,
			md: 20,
			sm: 15,
			xs: 10,
		},
	};

	const secondaryFontSize = {
		fontSize: {
			lg: 25,
			md: 20,
			sm: 15,
			xs: 15,
		},
	};

	return (
		<Paper elevation={3}>
			<Stack spacing={2} direction="row" sx={mainStackStyle}>
				<Stack>
					<Typography sx={mainFontSize}>Repositories </Typography>
					<Typography sx={secondaryFontSize}>{public_repos} </Typography>
				</Stack>
				<Stack>
					<Typography sx={mainFontSize}>Followers </Typography>
					<Typography sx={secondaryFontSize}>{followers} </Typography>
				</Stack>
				<Stack>
					<Typography sx={mainFontSize}>Following </Typography>
					<Typography sx={secondaryFontSize}>{following} </Typography>
				</Stack>
			</Stack>
		</Paper>
	);
};

export default PaperInformation;
