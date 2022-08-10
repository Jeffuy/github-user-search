import React, { useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = (props) => {
	// eslint-disable-next-line react/prop-types
	const { setInputUser } = props;

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

	const [valueInput, setValueInput] = useState("");

	const onSearchValueChange = (event) => {
		const inputValue = event.target.value;
		setValueInput(inputValue);
	};

	const handleSubmit = () => {
		setInputUser(valueInput);
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
				value={valueInput}
				onChange={onSearchValueChange}
			/>
			<IconButton
				size="small"
				sx={iconButtonStyles}
				onClick={handleSubmit}
			>
				<SearchIcon />
			</IconButton>
		</Stack>
	);
};

export default Searcher;
