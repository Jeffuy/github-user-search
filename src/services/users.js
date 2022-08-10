import { urlFetch } from "../constants";

const getGitHubUser = async (user) => {
	const response = await fetch(`${urlFetch}${user}`, {
		method: "GET",
	});
	const payload = await response.json();

	return payload;
};

export default getGitHubUser;