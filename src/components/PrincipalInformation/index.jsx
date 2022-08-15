/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Typography } from "@mui/material";

const PrincipalInformation = (props) => {
	const { userState } = props;
	const { name, login, created_at } = userState;

	const stackStyle = {
		justifyContent: "space-between",
		width: "100%",

		"@media (max-width: 600px)": {
			flexDirection: "column",
			width: "100%",
			alignItems: "center",
			textAlign: "center",
		},
	};

	return (
		<React.Fragment>
			<Stack direction="row" sx={stackStyle}>
				<Typography variant="h4">
					{name !== null ? name : login}
				</Typography>
				<Typography variant="subtitle2">
					Created at: {created_at}
				</Typography>
			</Stack>
			<Stack sx={stackStyle}>
				<Typography variant="caption">{`@${login}`}</Typography>
			</Stack>
		</React.Fragment>
	);
};

export default PrincipalInformation;
