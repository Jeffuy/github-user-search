/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

import React from "react";

const LocationInformation = (props) => {
	const { userState } = props;
	const { location, twitter_username, blog, company } = userState;

	return (
		<Grid container>
			<Grid item xs={6}>
				<Stack>
					<LocationOnIcon />
					<Typography>
						{location !== null ? location : "No location info"}
					</Typography>

					<LanguageIcon />
					<Typography>
						{blog !== null ? blog : "No blog info"}
					</Typography>
				</Stack>
			</Grid>
			<Grid item xs={6}>
				<Stack>
					<TwitterIcon />
					<Typography>
						{twitter_username !== null
							? `@${twitter_username}`
							: "No twitter info"}
					</Typography>

					<BusinessIcon />
					<Typography>
						{company !== null ? company : "No company info"}
					</Typography>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default LocationInformation;
