/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Typography } from "@mui/material";

const PrincipalInformation = (props) => {
	const { userState } = props;
	const { name, login, created_at } = userState;

	return (
		<React.Fragment>
			<Stack>
				<Typography>{name}</Typography>
				<Typography>{created_at}</Typography>
			</Stack>
			<Typography>{login}</Typography>
		</React.Fragment>
	);
};

export default PrincipalInformation;
