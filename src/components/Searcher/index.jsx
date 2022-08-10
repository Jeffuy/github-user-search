import React from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = () => {
	const stackStyles = {
		marginTop: "30px",
		width: "80%",
	};

	const textFieldStyles = {
		width: "90%",
	};

	const iconButtonStyles = {
		left: "-45px",
	};

	return (
		<Stack direction="row" sx={stackStyles}>
			<TextField
				sx={textFieldStyles}
				id="outlined-basic"
				label="GitHub User"
				placeholder="Octocat"
				variant="outlined"
				size="small"
			/>
			<IconButton size="small" sx={iconButtonStyles}>
				<SearchIcon />
			</IconButton>
		</Stack>
	);
};

export default Searcher;
