import axios from "axios";

const api = axios.create({
	baseURL: "https://apijcsociety.larean.com.br",
	timeout: 50000,
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
