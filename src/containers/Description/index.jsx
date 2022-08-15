/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Typography } from "@mui/material";
import PaperInformation from "../../components/PaperInformation";
import LocationInformation from "../../components/LocationInformation";

const Description = (props) => {

	const { userState } = props;
	const { bio } = userState;

	const stackStyle = {
		justifyContent: "center",
	}

	return (
		<React.Fragment>
			<Stack sx={stackStyle}>
				{bio !== null ? (
					<Typography variant="body1" textAlign="center">{bio}</Typography>
				) : (
					<Typography variant="body1" textAlign="center">
						No description available
					</Typography>
				)}
			</Stack>
			<PaperInformation userState={userState} />
	<LocationInformation userState={userState}/>
		</React.Fragment>
	);
};

export default Description;
