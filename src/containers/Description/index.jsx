/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Typography } from "@mui/material";

const Description = (props) => {

	const { userState } = props;
	const { bio } = userState;

	return (
		<React.Fragment>
			<Stack>
				{bio !== null ? (
					<Typography variant="h6">{bio}</Typography>
				) : (
					<Typography variant="h6">
						No description available
					</Typography>
				)}
			</Stack>
			{/* <PaperInformation />
	<LocationInformation /> */}
		</React.Fragment>
	);
};

export default Description;
