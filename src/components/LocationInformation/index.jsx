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

	const mainGridStyle = {
		marginTop: "15px",
		
	};

	const secondaryFontSize = {
		fontSize: {
			lg: 25,
			md: 20,
			sm: 10,
			xs: 10,
		},
	};

	return (
		<Grid container spacing={2} sx={mainGridStyle}>
			<Grid item xs={6}>
				<Stack direction="row" spacing={2}>
					<LocationOnIcon />
					<Typography sx={secondaryFontSize}>
						{location !== null ? location : "No location info"}
					</Typography>
				</Stack>
			</Grid>
			<Grid item xs={6}>
				<Stack direction="row" spacing={2}>
					<LanguageIcon />

					{blog !== null ? (
						<Typography sx={secondaryFontSize}>
							<a target="_blank" href={`https://${blog}`} rel="noreferrer">
								{blog}
							</a>
						</Typography>
					) : (
						<Typography sx={secondaryFontSize}>No blog info</Typography>
					)}
				</Stack>
			</Grid>
			<Grid item xs={6}>
				<Stack direction="row" spacing={2}>
					<TwitterIcon />
					<Typography sx={secondaryFontSize}>
						{twitter_username !== null
							? `@${twitter_username}`
							: "No twitter info"}
					</Typography>
				</Stack>
			</Grid>
			<Grid item xs={6}>
				<Stack direction="row" spacing={2}>
					<BusinessIcon />
					<Typography sx={secondaryFontSize}>
						{company !== null ? company : "No company info"}
					</Typography>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default LocationInformation;
