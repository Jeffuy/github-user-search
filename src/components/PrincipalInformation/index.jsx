/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Typography } from "@mui/material";

const PrincipalInformation = (props) => {
	const { userState } = props;
	const { name, login, created_at } = userState;

	const stackStyle = {
		justifyContent: "space-between",
	}

	return (
		<React.Fragment>
			<Stack direction="row" sx={stackStyle}>
				<Typography variant="h4">{name !== null ? name : login}</Typography>
				<Typography variant="subtitle2">{created_at}</Typography>
			</Stack>
			<Typography variant="caption">{`@${login}`}</Typography>
		</React.Fragment>
	);
};

export default PrincipalInformation;
